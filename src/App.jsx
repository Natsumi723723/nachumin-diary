import { useState, useEffect, useMemo, useRef, lazy, Suspense } from "react";
import {
  get, set, loadRooms, ROOMS_KEY, roomDataKey, trashKey, DIARY_ROOM_ID, DECL_KEY,
  MARKS_KEY, DEFAULT_MARKS, doneLogKey, BACKUP_KEY
} from "./storage.js";
import {
  keyToDisp, keyToDate, uid, escapeRegExp, todayKey, nowTime,
  applyDeclToEntryText
} from "./format.js";
import {
  dumpAll, restoreAll, validateBackup, summarizeBackup, BACKUP_FILENAME
} from "./backup.js";
import { css, ROOM_THEMES, DEFAULT_THEME, roomTileStyle } from "./theme.js";
import DiaryRoom from "./DiaryRoom.jsx";
import IconGrid from "./IconGrid.jsx";
import SwipeBack from "./SwipeBack.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
// 起動時は日記ルームしか使わないので、他のルームは遅延読み込み（コード分割）。
// バンドルを分けて、スマホでの起動時パースを軽くする。チャンクはSWがプリキャッシュ済み。
const TalkRoom = lazy(() => import("./TalkRoom.jsx"));
const TodoRoom = lazy(() => import("./TodoRoom.jsx"));
const DarelogRoom = lazy(() => import("./DarelogRoom.jsx"));
const ExpenseRoom = lazy(() => import("./ExpenseRoom.jsx"));

const EMOJI_PICKS = [
  "💗", "🩷", "💛", "🩵", "💜", "🤍", "🖤", "🌸", "🌷", "🎀",
  "🌟", "✨", "⭐️", "👑", "🫶", "🐰", "🐻", "🐱", "🦄", "🌙",
  "🌊", "🌿", "🍓", "🍒", "🧸", "📖", "💬", "✅", "🌗", "💰"
];

export default function App() {
  const [rooms, setRooms] = useState(null);
  const [view, setView] = useState({ screen: "home" }); // {screen:'room', roomId, q?}
  const [searchOpen, setSearchOpen] = useState(false);
  const [gq, setGq] = useState("");
  const [cache, setCache] = useState(null); // { roomId: data } 横断検索用
  const [modal, setModal] = useState(null); // {mode:'new'|'edit', name, emoji, type, roomId?}
  const [roomDel, setRoomDel] = useState(false);
  const [confirm, setConfirm] = useState(null); // 削除確認
  const [decl, setDecl] = useState(""); // 今日の宣言（空=未設定）
  const [declModal, setDeclModal] = useState(null); // null | 'view' | 'edit'
  const [declDraft, setDeclDraft] = useState("");
  const [diarySync, setDiarySync] = useState(0); // 開いている日記ルームへ再読込を通知
  const [diaryToday, setDiaryToday] = useState(null); // ホームの日記カード用 {written,preview}
  const [hiddenModal, setHiddenModal] = useState(false); // 🙈 非表示ルームの一覧
  const homeScrollRef = useRef(null);
  const homeScrollPos = useRef(0);
  const [marks, setMarks] = useState(DEFAULT_MARKS);
  const [markSettingsOpen, setMarkSettingsOpen] = useState(false);
  const [newMark, setNewMark] = useState("");
  const [backupOpen, setBackupOpen] = useState(false);
  const [backupText, setBackupText] = useState("");
  const [restoreText, setRestoreText] = useState("");
  const [backupMeta, setBackupMeta] = useState(null); // {lastDateKey,lastAt,dismissedDateKey}
  const [busy, setBusy] = useState(false);            // 書き出し中の二重タップ防止
  const [restoreAsk, setRestoreAsk] = useState(null); // 復元の2段階確認 {obj,counts,exportedAt}
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  const showToast = (msg, ms = 3000) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), ms);
  };

  /* 起動時: ルーム読込（旧データがあれば「日記」ルームへ自動移行）+ 今日の宣言 */
  useEffect(() => {
    (async () => {
      try {
        const loaded = await loadRooms();
        // 起動時は日記ルームを直接開く（無ければ一覧）
        if (loaded.some((r) => r.id === DIARY_ROOM_ID)) {
          setView({ screen: "room", roomId: DIARY_ROOM_ID });
        }
        setRooms(loaded);
        // 残りの設定は独立キーなので並列で読む（起動の初回描画はもう出ている）
        const [d, mk, bk] = await Promise.all([
          get(DECL_KEY), get(MARKS_KEY), get(BACKUP_KEY)
        ]);
        if (d && d.dateKey === todayKey()) setDecl(d.text);
        if (Array.isArray(mk) && mk.length) setMarks(mk);
        setBackupMeta(bk || {});
      } catch (e) {
        showToast("データの読み込みに失敗しました");
        setRooms([]);
      }
    })();
  }, []);

  // ホームに戻るたび、日記カードの「今日書いたか」を軽く読み直す
  useEffect(() => {
    if (view.screen !== "home") return;
    let alive = true;
    (async () => {
      try {
        let raw = await get(roomDataKey(DIARY_ROOM_ID));
        raw = typeof raw === "string" ? JSON.parse(raw) : (raw || {});
        const t = raw[todayKey()];
        if (!alive) return;
        if (t && typeof t.text === "string" && t.text.trim()) {
          setDiaryToday({ written: true, preview: t.text.split("\n")[0].slice(0, 34) });
        } else {
          setDiaryToday({ written: false });
        }
      } catch (e) { if (alive) setDiaryToday({ written: false }); }
    })();
    return () => { alive = false; };
  }, [view.screen, diarySync]);

  // ホームのスクロール位置を保持（ルームを開いて戻っても元の位置へ）
  useEffect(() => {
    if (view.screen === "home" && homeScrollRef.current) {
      homeScrollRef.current.scrollTop = homeScrollPos.current;
    }
  }, [view.screen]);

  // 日記ルームの存在を保証しつつメタ更新＋開いてる日記へ再読込を通知
  const bumpDiary = (preview) => {
    setRooms((prev) => {
      let next = prev;
      if (!prev.find((r) => r.id === DIARY_ROOM_ID)) {
        next = [...prev, {
          id: DIARY_ROOM_ID, type: "diary", name: "日記", emoji: "💗",
          members: [], createdAt: Date.now(), lastAt: 0, preview: ""
        }];
      }
      next = next.map((r) =>
        r.id === DIARY_ROOM_ID
          ? { ...r, ...(preview != null ? { preview } : {}), lastAt: Date.now() }
          : r
      );
      set(ROOMS_KEY, next);
      return next;
    });
    setDiarySync((s) => s + 1);
  };

  // TODO完了 → 完了した日の「🩷 できたこと」ログ（日記本文とは別）へ追加
  const onTodoComplete = async ({ text, time, dateKey }) => {
    try {
      const key = doneLogKey(DIARY_ROOM_ID);
      const log = (await get(key)) || {};
      const arr = (log[dateKey] || []).slice();
      if (!arr.some((x) => x.text === text && x.time === time)) arr.push({ text, time });
      await set(key, { ...log, [dateKey]: arr });
      bumpDiary(`🩷 できたこと ☑ ${text}`.slice(0, 40));
    } catch (e) {
      showToast("できたことの記録に失敗しました");
    }
  };
  // TODO未完了に戻す → 対応行を削除（0件なら日付ごと消える）
  const onTodoUncomplete = async ({ text, time, dateKey }) => {
    try {
      const key = doneLogKey(DIARY_ROOM_ID);
      const log = (await get(key)) || {};
      const arr = (log[dateKey] || []).filter((x) => !(x.text === text && x.time === time));
      const nextLog = { ...log };
      if (arr.length) nextLog[dateKey] = arr;
      else delete nextLog[dateKey];
      await set(key, nextLog);
      bumpDiary(null);
    } catch (e) {
      /* noop */
    }
  };

  const saveRooms = (next) => {
    setRooms(next);
    set(ROOMS_KEY, next).catch(() => showToast("保存に失敗しました"));
  };

  const updateRoom = (id, patch) => {
    setRooms((prev) => {
      const next = prev.map((r) => (r.id === id ? { ...r, ...patch } : r));
      set(ROOMS_KEY, next).catch(() => showToast("保存に失敗しました"));
      return next;
    });
  };

  /* TODOを別のルームへ移動（移動先へ追記するところまで担当）。
     先に移動先へ書き込み、成功したら呼び出し元が元ルームから削除する。
     ＝途中で失敗しても項目が消えない順序にしている。
     場所タグはルームごとの設定なので、同じ名前のタグがあれば引き継ぎ、無ければ外す。 */
  const moveTodoToRoom = async (todo, targetRoomId, srcPlaceName) => {
    try {
      const target = (rooms || []).find((r) => r.id === targetRoomId);
      if (!target) return { ok: false };
      const key = roomDataKey(targetRoomId);
      const data = (await get(key)) || {};
      const list = Array.isArray(data.todos) ? data.todos : [];
      const nm = (srcPlaceName || "").trim();
      const matched = nm ? (target.places || []).find((p) => (p.name || "").trim() === nm) : null;
      const moved = { ...todo, placeId: matched ? matched.id : null };
      const nextList = [...list, moved];
      await set(key, { ...data, todos: nextList });
      // 移動先ルームのメタ（バッジ・プレビュー）も更新
      const open = nextList.filter((t) => !t.done && !t.deferred).length;
      updateRoom(targetRoomId, {
        preview: `${moved.done ? "☑" : "☐"} ${(moved.text || "").split("\n")[0]}`.slice(0, 40),
        todoOpen: open,
        lastAt: Date.now()
      });
      return { ok: true, placeDropped: !!nm && !matched, placeKept: !!matched };
    } catch (e) {
      return { ok: false };
    }
  };

  /* ---------- 今日の宣言 ---------- */
  const applyDeclaration = async (raw) => {
    const text = raw.trim();
    if (!text) return;
    const today = todayKey();
    try {
      await set(DECL_KEY, { dateKey: today, text });
      setDecl(text);
      // 日記ルームの当日吹き出しの先頭に「🎬 今日のコマ」を記録
      const key = roomDataKey(DIARY_ROOM_ID);
      let data = await get(key);
      data = data && typeof data === "object" ? data : {};
      const existing = data[today];
      const newText = applyDeclToEntryText(existing ? existing.text : "", text);
      data = { ...data, [today]: { text: newText, time: existing ? existing.time : nowTime() } };
      await set(key, data);
      // rooms メタ更新（日記ルームが無ければ作り直す）
      const ks = Object.keys(data).sort();
      const lastKey = ks[ks.length - 1];
      const preview = data[lastKey].text.split("\n")[0].slice(0, 40);
      setRooms((prev) => {
        let next = prev;
        if (!prev.find((r) => r.id === DIARY_ROOM_ID)) {
          next = [...prev, {
            id: DIARY_ROOM_ID, type: "diary", name: "日記", emoji: "💗",
            members: [], createdAt: Date.now(), lastAt: 0, preview: ""
          }];
        }
        next = next.map((r) => (r.id === DIARY_ROOM_ID ? { ...r, preview, lastAt: Date.now() } : r));
        set(ROOMS_KEY, next);
        return next;
      });
      setDiarySync((s) => s + 1);
      showToast("今日のコマをピン留めしたよ🩷");
    } catch (e) {
      showToast("宣言の保存に失敗しました");
    }
  };

  /* ---------- 箇条書きマーク ---------- */
  const persistMarks = (next) => {
    setMarks(next);
    set(MARKS_KEY, next).catch(() => showToast("マークの保存に失敗しました"));
  };
  const addMark = () => {
    const m = newMark.trim();
    if (!m) return;
    if (marks.includes(m)) { setNewMark(""); return; }
    persistMarks([...marks, m]);
    setNewMark("");
  };
  const removeMark = (m) => persistMarks(marks.filter((x) => x !== m));

  /* 横断検索: 検索を開いたら全ルームのデータを読み込む */
  useEffect(() => {
    if (!searchOpen || !rooms) return;
    (async () => {
      const c = {};
      for (const r of rooms) c[r.id] = await get(roomDataKey(r.id));
      setCache(c);
    })();
  }, [searchOpen, rooms]);

  // 並びは rooms 配列そのもの（作成順＋手動並び替え、自動ソートしない）
  const sorted = rooms || [];

  const results = useMemo(() => {
    if (!gq || !cache || !rooms) return null;
    const q = gq.toLowerCase();
    const out = [];
    for (const r of sorted) {
      const data = cache[r.id];
      const hits = [];
      if (r.type === "diary") {
        const es = data && typeof data === "object" ? data : {};
        for (const k of Object.keys(es).sort()) {
          if ((es[k].text + keyToDisp(k)).toLowerCase().includes(q)) {
            hits.push({ snippet: es[k].text.split("\n")[0], date: keyToDisp(k) });
          }
        }
      } else if (r.type === "todo") {
        const ts = data && Array.isArray(data.todos) ? data.todos : [];
        for (const t of ts) {
          if ((t.text + keyToDisp(t.dateKey)).toLowerCase().includes(q)) {
            hits.push({ snippet: `${t.done ? "☑" : "☐"} ${t.text.split("\n")[0]}`, date: keyToDisp(t.dateKey) });
          }
        }
      } else if (r.type === "darelog") {
        const recs = data && Array.isArray(data.records) ? data.records : [];
        const nameOf = (id) => r.members?.find((m) => m.id === id)?.name || "";
        for (const rec of recs) {
          const nm = nameOf(rec.memberId);
          if ((nm + (rec.memo || "") + keyToDisp(rec.dateKey)).toLowerCase().includes(q)) {
            hits.push({ snippet: `${nm}${rec.memo ? `: ${rec.memo}` : ""}`, date: keyToDisp(rec.dateKey) });
          }
        }
      } else if (r.type === "expense") {
        const exp = data && Array.isArray(data.expenses) ? data.expenses : [];
        const cn = (id) => r.categories?.find((c) => c.id === id)?.name || "";
        for (const e of exp) {
          if ((cn(e.categoryId) + (e.memo || "") + String(e.amount) + keyToDisp(e.dateKey)).toLowerCase().includes(q)) {
            hits.push({ snippet: `${cn(e.categoryId)} ¥${e.amount}${e.memo ? " " + e.memo : ""}`, date: keyToDisp(e.dateKey) });
          }
        }
      } else {
        const ms = data && Array.isArray(data.messages) ? data.messages : [];
        const nameOf = (id) => r.members?.find((m) => m.id === id)?.name || "";
        for (const m of ms) {
          if (
            (m.text + keyToDisp(m.dateKey)).toLowerCase().includes(q) ||
            nameOf(m.memberId).toLowerCase().includes(q)
          ) {
            hits.push({ snippet: `${nameOf(m.memberId) || "？"}: ${m.text.split("\n")[0]}`, date: keyToDisp(m.dateKey) });
          }
        }
      }
      if (hits.length === 0 && r.name.toLowerCase().includes(q)) {
        hits.push({ snippet: r.preview || "", date: "" });
      }
      if (hits.length) out.push({ room: r, hits });
    }
    return out;
  }, [gq, cache, sorted, rooms]);

  const highlight = (text) => {
    if (!gq) return text;
    const parts = text.split(new RegExp(`(${escapeRegExp(gq)})`, "gi"));
    return parts.map((p, i) =>
      p.toLowerCase() === gq.toLowerCase() ? <mark key={i} className="hl">{p}</mark> : p
    );
  };

  /* ---------- room CRUD ---------- */
  const createRoom = () => {
    const name = modal.name.trim();
    if (!name) {
      showToast("ルーム名を入れてね");
      return;
    }
    const defaultEmoji = { diary: "💗", todo: "✅", darelog: "🌗", expense: "💰", talk: "🩷" }[modal.type] || "🩷";
    // だれログは初期人格を用意（記録のハードルをゼロに）
    const initMembers = modal.type === "darelog"
      ? [
          { id: uid(), name: "ヒカルくん", color: "#d4f0ff", icon: { type: "emoji", value: "🌊" }, side: "left" },
          { id: uid(), name: "柊くん", color: "#d9ffe3", icon: { type: "emoji", value: "🌿" }, side: "left" },
          { id: uid(), name: "ひかりちゃん", color: "#ffd9ec", icon: { type: "emoji", value: "🌸" }, side: "right" }
        ]
      : [];
    // 経費は初期カテゴリを用意
    const initCategories = modal.type === "expense"
      ? [
          { id: uid(), name: "AI費用", emoji: "🤖", color: "#2196F3" },
          { id: uid(), name: "ピンクグッズ", emoji: "🎀", color: "#E91E63" },
          { id: uid(), name: "ネイル", emoji: "💅", color: "#9C27B0" },
          { id: uid(), name: "旅費交通費", emoji: "🚃", color: "#00A5B5", transit: true }
        ]
      : undefined;
    const room = {
      id: uid(), type: modal.type, name,
      emoji: modal.emoji.trim() || defaultEmoji,
      theme: modal.theme || DEFAULT_THEME,
      members: initMembers, createdAt: Date.now(), lastAt: 0, preview: "",
      ...(modal.type === "todo" ? { shopping: !!modal.shopping } : {}),
      ...(initCategories
        ? { categories: initCategories, subscriptions: [], subsPosted: {}, transitSeeded: true,
            stations: [], fares: [], defaultFromId: null, roundTripDefault: false,
            incomeSeeded: true, incomeCategories: [
              { id: uid(), name: "売上", emoji: "💰", color: "#2E9E5B" },
              { id: uid(), name: "返金", emoji: "↩️", color: "#3BA7A0" },
              { id: uid(), name: "その他", emoji: "✨", color: "#7FB800" }
            ] }
        : {})
    };
    saveRooms([...rooms, room]);
    setModal(null);
    setView({ screen: "room", roomId: room.id });
  };

  const saveEdit = () => {
    const name = modal.name.trim();
    if (!name) {
      showToast("ルーム名を入れてね");
      return;
    }
    updateRoom(modal.roomId, {
      name, emoji: modal.emoji.trim() || "💗",
      theme: modal.theme || DEFAULT_THEME,
      hidden: !!modal.hidden,
      ...(modal.type === "todo" ? { shopping: !!modal.shopping } : {})
    });
    setModal(null);
  };

  // ルーム設定モーダルを開く（アイコン長押し・検索結果の⋯から共通で使う）
  const openRoomSettings = (r) => {
    setModal({ mode: "edit", roomId: r.id, name: r.name, emoji: r.emoji, type: r.type, shopping: !!r.shopping, theme: r.theme || DEFAULT_THEME, hidden: !!r.hidden });
    setRoomDel(false);
  };

  const reallyDeleteRoom = async (id) => {
    try {
      // ハード削除はしない: データをゴミ箱キーへ退避してからルームを外す
      const data = await get(roomDataKey(id));
      if (data) await set(trashKey(id), data);
      saveRooms(rooms.filter((r) => r.id !== id));
      setModal(null);
      setConfirm(null);
      showToast("ルームを削除しました");
    } catch (e) {
      showToast("削除に失敗しました");
    }
  };
  const deleteRoom = () => {
    const r = rooms.find((x) => x.id === modal.roomId);
    setConfirm({
      message: `ルーム「${r?.name || ""}」を削除しますか？\n中の記録もすべて消えます。`,
      onConfirm: () => reallyDeleteRoom(modal.roomId)
    });
  };

  /* ---------- 全体バックアップ / 復元 ---------- */
  const openBackup = async () => {
    setRestoreText("");
    setCopied(false);
    try {
      const dump = await dumpAll();
      setBackupText(JSON.stringify(dump, null, 2));
    } catch (e) {
      setBackupText("");
    }
    setBackupOpen(true);
  };

  /* 最後にバックアップした日を記録（29時制の日付キー） */
  const markBackedUp = async () => {
    const next = { ...(backupMeta || {}), lastDateKey: todayKey(), lastAt: Date.now() };
    setBackupMeta(next);
    try { await set(BACKUP_KEY, next); } catch (e) { /* 記録できなくても書き出しは成功 */ }
  };

  const saveByDownload = (json) => {
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = BACKUP_FILENAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
  };

  /* 1タップでまるごと書き出し。
     iOSは共有シート（ファイルに保存→同名で置き換え）、非対応環境はダウンロード。 */
  const runBackup = async () => {
    if (busy) return;
    setBusy(true);
    try {
      let json;
      try {
        json = JSON.stringify(await dumpAll(), null, 2);
      } catch (e) {
        showToast("バックアップの作成に失敗しました 🥺");
        return;
      }
      // Web Share API（ファイル共有に対応している場合だけ）
      try {
        const file = new File([json], BACKUP_FILENAME, { type: "application/json" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: BACKUP_FILENAME });
          await markBackedUp();
          showToast("バックアップを保存したよ💗 同じファイルに置き換えできたかな？");
          return;
        }
      } catch (e) {
        // ユーザーがキャンセルしたときは何もしない（バックアップ済みにもしない）
        if (e && (e.name === "AbortError" || e.name === "NotAllowedError")) return;
        // それ以外の失敗はダウンロードにフォールバック
      }
      try {
        saveByDownload(json);
        await markBackedUp();
        showToast("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心");
      } catch (e) {
        showToast("保存できない環境みたい。コピーを使ってね");
      }
    } finally {
      setBusy(false);
    }
  };

  const downloadBackup = () => {
    try {
      saveByDownload(backupText);
      markBackedUp();
      showToast("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心");
    } catch (e) {
      showToast("保存できない環境みたい。コピーを使ってね");
    }
  };

  /* バックアップバナー（1日1回・29時制） */
  const today = todayKey();
  const daysSinceBackup = (() => {
    if (!backupMeta?.lastDateKey) return null; // 一度もバックアップしていない
    const ms = keyToDate(today) - keyToDate(backupMeta.lastDateKey);
    return Math.max(0, Math.round(ms / 86400000));
  })();
  const backupStale = daysSinceBackup === null || daysSinceBackup >= 7;
  const showBackupBanner = !!backupMeta
    && backupMeta.lastDateKey !== today
    && backupMeta.dismissedDateKey !== today;
  const dismissBackupBanner = async () => {
    const next = { ...(backupMeta || {}), dismissedDateKey: today };
    setBackupMeta(next);
    try { await set(BACKUP_KEY, next); } catch (e) { /* noop */ }
  };

  const copyBackup = async () => {
    try {
      await navigator.clipboard.writeText(backupText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      showToast("コピーできませんでした。全選択して手動でコピーしてね");
    }
  };

  const onBackupFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setRestoreText(String(reader.result || ""));
    reader.onerror = () => showToast("ファイルを読めませんでした");
    reader.readAsText(f);
    e.target.value = "";
  };

  /* 復元 1段階目: 形式を検証して、中身を見せてから確認する */
  const askRestore = () => {
    let obj;
    try {
      obj = JSON.parse(restoreText);
    } catch (e) {
      showToast("JSONとして読めませんでした。ファイルが壊れているかも 🥺", 4000);
      return;
    }
    const err = validateBackup(obj);
    if (err) { showToast(err, 4500); return; }
    setRestoreAsk({
      obj,
      counts: summarizeBackup(obj),
      exportedAt: obj.exportedAt || "",
      version: obj.version
    });
  };

  /* 復元 2段階目: 実行 */
  const doRestore = async () => {
    const obj = restoreAsk?.obj;
    if (!obj) return;
    try {
      const res = await restoreAll(obj);
      setRooms(res.rooms);
      if (obj.declaration && obj.declaration.dateKey === todayKey() && !decl) {
        await set(DECL_KEY, obj.declaration);
        setDecl(obj.declaration.text);
      }
      setDiarySync((s) => s + 1);
      setRestoreAsk(null);
      setBackupOpen(false);
      setRestoreText("");
      showToast(`復元完了💗 ${res.addedRooms}ルーム / ${res.addedItems}件を追加`);
    } catch (e) {
      setRestoreAsk(null);
      showToast("復元中にエラーが出ました。ファイルが壊れているかも 🥺", 4000);
    }
  };

  /* ---------- render ---------- */
  if (!rooms) {
    return (
      <div className="app">
        <style>{css}</style>
      </div>
    );
  }

  // すべてのルーム画面の最上部に出す「今日の宣言」バー
  const pinned = (
    <div
      className="pin"
      onClick={() => { setDeclDraft(decl); setDeclModal(decl ? "view" : "edit"); }}
      role="button"
    >
      <span className="pin-ic">{decl ? "📌" : "🩷"}</span>
      {decl
        ? <span className="pin-txt">{decl}</span>
        : <span className="pin-ph">今日のコマをえらぶ🩷</span>}
    </div>
  );

  let content;
  if (view.screen === "room") {
    const room = rooms.find((r) => r.id === view.roomId);
    if (!room) {
      content = null;
      setTimeout(() => setView({ screen: "home" }), 0);
    } else {
      const common = {
        room,
        onBack: () => setView({ screen: "home" }),
        onMeta: (patch) => updateRoom(room.id, patch),
        initialQuery: view.q,
        showToast,
        pinned
      };
      const roomEl = room.type === "diary"
        ? <DiaryRoom key={room.id} {...common} syncSignal={diarySync} marks={marks} onEditMarks={() => setMarkSettingsOpen(true)} />
        : room.type === "todo"
          ? <TodoRoom key={room.id} {...common} onTodoComplete={onTodoComplete} onTodoUncomplete={onTodoUncomplete} onRoomChange={(patch) => updateRoom(room.id, patch)} todoRooms={rooms.filter((r) => r.type === "todo" && r.id !== room.id)} onMoveTodo={moveTodoToRoom} />
          : room.type === "darelog"
            ? <DarelogRoom key={room.id} {...common} onRoomChange={(patch) => updateRoom(room.id, patch)} />
            : room.type === "expense"
              ? <ExpenseRoom key={room.id} {...common} onRoomChange={(patch) => updateRoom(room.id, patch)} />
              : <TalkRoom key={room.id} {...common} onRoomChange={(patch) => updateRoom(room.id, patch)} />;
      content = (
        <SwipeBack key={room.id} onBack={() => setView({ screen: "home" })}>
          {/* 日記以外は遅延読み込み。チャンク取得中はヘッダー＋ピンだけ先に出す */}
          <Suspense fallback={<><div className="hd hd-loading" /><div className="chat" /></>}>
            {roomEl}
          </Suspense>
        </SwipeBack>
      );
    }
  } else {
    content = (
      <>
        {/* home header */}
        <div className="hd hd-home">
          <div className="app-brand">
            <div className="app-title">💖Nachumin Lifelog💖</div>
          </div>
          <button
            className="icon-btn" style={{ marginLeft: "auto" }}
            aria-label="バックアップ"
            onClick={openBackup}
          >💾</button>
          <button
            className="icon-btn"
            aria-label="新しいルーム"
            onClick={() => setModal({ mode: "new", name: "", emoji: "", type: "talk" })}
          >➕</button>
          <button
            className="icon-btn" aria-label="ぜんぶ検索"
            onClick={() => { setSearchOpen(!searchOpen); setGq(""); }}
          >{searchOpen ? "✕" : "🔍"}</button>
        </div>

        {showBackupBanner && (
          <div className={"bk-banner" + (backupStale ? " stale" : "")}>
            <button className="bk-main" onClick={runBackup} disabled={busy}>
              <span className="bk-ttl">💾 今日のバックアップ🩷</span>
              <span className="bk-sub">
                {daysSinceBackup === null
                  ? "まだ一度も保存していません"
                  : backupStale
                    ? `最後の保存から ${daysSinceBackup}日 たっています`
                    : "タップで1ファイルに書き出し"}
              </span>
            </button>
            <button className="bk-x" aria-label="閉じる" onClick={dismissBackupBanner}>✕</button>
          </div>
        )}

        {searchOpen && (
          <div className="search-row">
            <input
              autoFocus
              placeholder="ぜんぶのルームから検索（ことば・話者・日付）"
              value={gq}
              onChange={(e) => setGq(e.target.value)}
            />
          </div>
        )}

        {results ? (
          /* 検索結果はこれまで通りのリスト表示 */
          <div className="rooms">
            {results.length === 0 ? (
              <div className="empty">みつかりませんでした 🥺</div>
            ) : (
              results.map(({ room, hits }) => (
                <div
                  className="room-row" key={room.id}
                  onClick={() => setView({ screen: "room", roomId: room.id, q: gq })}
                >
                  <div className="r-ic">{room.emoji}</div>
                  <div className="r-main">
                    <div className="r-name">{room.name}</div>
                    <div className="r-prev">{highlight(hits[0].snippet)}</div>
                  </div>
                  <div className="r-side">
                    <span className="r-badge">{hits.length}件</span>
                    {hits[0].date && <span className="r-date">{hits[0].date}</span>}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          /* ホーム: 日記の大カード ＋ 3列アイコングリッド */
          <div
            className="home-scroll" ref={homeScrollRef}
            onScroll={(e) => { homeScrollPos.current = e.target.scrollTop; }}
          >
            {(() => {
              const diaryRoom = rooms.find((r) => r.id === DIARY_ROOM_ID);
              const gridRooms = sorted.filter((r) => r.id !== DIARY_ROOM_ID && !r.hidden);
              const hiddenRooms = sorted.filter((r) => r.id !== DIARY_ROOM_ID && r.hidden);
              const td = keyToDate(todayKey());
              const diarySub = !diaryToday ? "…"
                : diaryToday.written ? diaryToday.preview
                : `${td.getMonth() + 1}/${td.getDate()}・きょうの分はまだ`;
              // 並べ替えは表示中のルームだけ差し替える（非表示ルームの位置はそのまま残す）
              const onReorderGrid = (newGrid) => {
                const q = [...newGrid];
                saveRooms(rooms.map((r) => (r.id === DIARY_ROOM_ID || r.hidden ? r : q.shift())));
              };
              return (
                <>
                  {diaryRoom && (
                    <button className="diary-card" onClick={() => setView({ screen: "room", roomId: diaryRoom.id })}>
                      <span className="dc-ic">{diaryRoom.emoji}</span>
                      <span className="dc-main">
                        <span className="dc-name">DIARY</span>
                        <span className="dc-sub">{diarySub}</span>
                      </span>
                      <span className="dc-arw">›</span>
                    </button>
                  )}
                  <IconGrid
                    items={gridRooms}
                    keyOf={(r) => r.id}
                    onReorder={onReorderGrid}
                    onLongPress={({ item }) => { if (item) openRoomSettings(item); }}
                    footer={
                      <div className="ig-cell ig-add">
                        <div className="ig-tile" role="button" tabIndex={0}
                          onClick={() => setModal({ mode: "new", name: "", emoji: "", type: "talk" })}
                          onKeyDown={(e) => e.key === "Enter" && setModal({ mode: "new", name: "", emoji: "", type: "talk" })}>
                          <span className="ig-btn">＋</span>
                          <span className="ig-name">つくる</span>
                        </div>
                      </div>
                    }
                    renderItem={(r) => {
                      const badge = r.type === "todo" && r.todoOpen > 0 ? r.todoOpen : null;
                      return (
                        <div className="ig-tile" role="button" tabIndex={0}
                          onClick={() => setView({ screen: "room", roomId: r.id })}
                          onKeyDown={(e) => e.key === "Enter" && setView({ screen: "room", roomId: r.id })}>
                          <span className="ig-btn" style={roomTileStyle(r.theme)}>
                            {r.emoji}
                            {badge != null && <span className="ig-badge">{badge > 99 ? "99+" : badge}</span>}
                          </span>
                          <span className="ig-name">{r.name}</span>
                        </div>
                      );
                    }}
                  />
                  {hiddenRooms.length > 0 && (
                    <button className="hidden-entry" onClick={() => setHiddenModal(true)}>
                      🙈 非表示のルーム {hiddenRooms.length}
                    </button>
                  )}
                  {hiddenModal && (
                    <div className="overlay" onClick={() => setHiddenModal(false)}>
                      <div className="panel" onClick={(e) => e.stopPropagation()}>
                        <h3>🙈 非表示のルーム</h3>
                        <p className="panel-note">
                          一覧に出していないルームです。中の記録は消えていません。「戻す」でまた表示できます。
                        </p>
                        <div className="move-list">
                          {hiddenRooms.map((r) => (
                            <div className="move-item as-row" key={r.id}>
                              <span className="move-ic">{r.emoji}</span>
                              <span className="move-name">{r.name}</span>
                              <button className="unhide-btn" onClick={() => updateRoom(r.id, { hidden: false })}>戻す</button>
                            </div>
                          ))}
                        </div>
                        <div className="panel-btns">
                          <button className="p-close" onClick={() => setHiddenModal(false)}>閉じる</button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        )}
      </>
    );
  }

  return (
    <div className="app">
      <style>{css}</style>
      {content}

      {/* room create/edit modal */}
      {modal && (
        <div className="overlay" onClick={() => { setModal(null); setRoomDel(false); }}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>{modal.mode === "new" ? "➕ 新しいルーム" : "⚙️ ルーム設定"}</h3>
            <div className="f-label">ルーム名</div>
            <input
              className="f-input" autoFocus={modal.mode === "new"}
              placeholder="ハートるんず" value={modal.name}
              onChange={(e) => setModal((o) => ({ ...o, name: e.target.value }))}
            />
            <div className="f-label">アイコン（タップで選ぶ）</div>
            <div className="emoji-picks">
              {EMOJI_PICKS.map((em) => (
                <button
                  key={em}
                  className={"emoji-pick" + (modal.emoji === em ? " on" : "")}
                  onClick={() => setModal((o) => ({ ...o, emoji: em }))}
                >{em}</button>
              ))}
            </div>
            <input
              className="f-input" style={{ width: 130, textAlign: "center", marginTop: 4 }}
              maxLength={8} placeholder="または自由入力"
              value={modal.emoji}
              onChange={(e) => setModal((o) => ({ ...o, emoji: e.target.value }))}
            />
            <div className="f-label">テーマカラー</div>
            <div className="theme-swatches">
              {ROOM_THEMES.map((c) => {
                const sel = (modal.theme || DEFAULT_THEME) === c;
                return (
                  <button
                    key={c}
                    className={"theme-sw" + (sel ? " on" : "")}
                    style={roomTileStyle(c)}
                    aria-label={c}
                    onClick={() => setModal((o) => ({ ...o, theme: c }))}
                  />
                );
              })}
            </div>
            <div className="f-label">タイプ{modal.mode === "edit" ? "（変更できません）" : ""}</div>
            <div className="type-row">
              <button
                className={"type-chip" + (modal.type === "diary" ? " on" : "")}
                disabled={modal.mode === "edit"}
                onClick={() => setModal((o) => ({ ...o, type: "diary" }))}
              >📖 日記<small>1日=1吹き出し</small></button>
              <button
                className={"type-chip" + (modal.type === "talk" ? " on" : "")}
                disabled={modal.mode === "edit"}
                onClick={() => setModal((o) => ({ ...o, type: "talk" }))}
              >💬 トーク<small>話者ごと</small></button>
              <button
                className={"type-chip" + (modal.type === "todo" ? " on" : "")}
                disabled={modal.mode === "edit"}
                onClick={() => setModal((o) => ({ ...o, type: "todo" }))}
              >✅ TODO<small>やること</small></button>
              <button
                className={"type-chip" + (modal.type === "darelog" ? " on" : "")}
                disabled={modal.mode === "edit"}
                onClick={() => setModal((o) => ({ ...o, type: "darelog" }))}
              >🌗 だれログ<small>朝昼夜の記録</small></button>
              <button
                className={"type-chip" + (modal.type === "expense" ? " on" : "")}
                disabled={modal.mode === "edit"}
                onClick={() => setModal((o) => ({ ...o, type: "expense" }))}
              >💰 経費<small>支出を記録</small></button>
            </div>
            {modal.mode === "edit" && modal.roomId !== DIARY_ROOM_ID && (
              <>
                <div className="f-label">一覧での表示</div>
                <button
                  className={"shop-toggle" + (modal.hidden ? " on" : "")}
                  onClick={() => setModal((o) => ({ ...o, hidden: !o.hidden }))}
                >
                  <span className="shop-box">{modal.hidden ? "✓" : ""}</span>
                  🙈 一覧に表示しない（記録は消えません）
                </button>
              </>
            )}
            {modal.type === "todo" && (
              <>
                <div className="f-label">用途</div>
                <button
                  className={"shop-toggle" + (modal.shopping ? " on" : "")}
                  onClick={() => setModal((o) => ({ ...o, shopping: !o.shopping }))}
                >
                  <span className="shop-box">{modal.shopping ? "✓" : ""}</span>
                  🛒 買い物リストとして使う（よく買うものクイック追加）
                </button>
              </>
            )}
            <div className="panel-btns">
              <button className="p-copy" onClick={modal.mode === "new" ? createRoom : saveEdit}>
                {modal.mode === "new" ? "つくる" : "保存"}
              </button>
              {modal.mode === "edit" && (
                <button className="p-del" onClick={deleteRoom}>
                  {"削除"}
                </button>
              )}
              <button className="p-close" onClick={() => { setModal(null); setRoomDel(false); }}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* 全体バックアップ / 復元 modal */}
      {backupOpen && (
        <div className="overlay" onClick={() => setBackupOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>💾 まるごとバックアップ</h3>
            <p className="panel-note">
              全ルーム・全データ（日記 / TODO / だれログ / 経費 / 習慣 / 各種設定）を
              まるごと1ファイルに保存します。端末が変わっても元どおり復元できます。
            </p>
            <div className={"bk-last" + (backupStale ? " stale" : "")}>
              <span className="bk-last-l">最後にバックアップした日</span>
              <span className="bk-last-v">
                {backupMeta?.lastDateKey
                  ? `${keyToDisp(backupMeta.lastDateKey)}${daysSinceBackup === 0 ? "（今日）" : `（${daysSinceBackup}日前）`}`
                  : "まだありません"}
              </span>
            </div>
            <div className="panel-btns">
              <button className="p-copy" onClick={runBackup} disabled={busy}>💾 1タップで書き出し</button>
              <button className="p-dl" onClick={downloadBackup}>ダウンロード</button>
              <button className="p-dl" onClick={copyBackup}>{copied ? "コピーしたよ💗" : "コピー"}</button>
            </div>
            <p className="panel-note">
              ファイル名は毎回 <b>{BACKUP_FILENAME}</b> で固定。iPhoneの共有シートから
              「ファイルに保存」を選ぶと、前のファイルを置き換えて上書きできます。
            </p>
            <div className="f-label" style={{ marginTop: 6 }}>復元する（バックアップから読み込み）</div>
            <p className="panel-note">既存のデータは消さず、足りない分だけ追加します（安全マージ）</p>
            <label className="upload-btn" style={{ alignSelf: "flex-start" }}>
              📂 バックアップファイルを選ぶ
              <input type="file" accept=".json,application/json,text/plain" onChange={onBackupFile} />
            </label>
            <textarea
              placeholder="または、コピーしたバックアップをここに貼り付け"
              value={restoreText}
              onChange={(e) => setRestoreText(e.target.value)}
              style={{ minHeight: 120 }}
            />
            <div className="panel-btns">
              <button className="p-copy" disabled={!restoreText.trim()} onClick={askRestore}>復元する</button>
              <button className="p-close" onClick={() => { setBackupOpen(false); setRestoreText(""); }}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* 復元の2段階目: 中身を見せて最終確認 */}
      {restoreAsk && (
        <div className="overlay bk-ask-over" onClick={() => setRestoreAsk(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>⚠️ 復元まえの確認</h3>
            <div className="bk-ask-box">
              <div className="bk-ask-row"><span>ルーム</span><b>{restoreAsk.counts.rooms}</b></div>
              <div className="bk-ask-row"><span>記録の件数</span><b>{restoreAsk.counts.items}</b></div>
              {restoreAsk.exportedAt && (
                <div className="bk-ask-row">
                  <span>書き出し日時</span>
                  <b>{new Date(restoreAsk.exportedAt).toLocaleString("ja-JP")}</b>
                </div>
              )}
            </div>
            <p className="panel-note">
              今のデータは消えません（足りない分を追加する安全マージ）。
              それでも念のため、<b>先に今のデータをバックアップ</b>しておくのがおすすめです💗
            </p>
            <button className="bk-first" onClick={runBackup} disabled={busy}>
              💾 先に今のデータをバックアップする
            </button>
            <div className="panel-btns">
              <button className="p-copy" onClick={doRestore}>この内容で復元する</button>
              <button className="p-close" onClick={() => setRestoreAsk(null)}>キャンセル</button>
            </div>
          </div>
        </div>
      )}

      {/* 今日の宣言 modal */}
      {declModal && (
        <div className="overlay" onClick={() => setDeclModal(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>🩷 今日のコマ</h3>
            {declModal === "view" ? (
              <>
                <div className="decl-full">{decl}</div>
                <p className="panel-note">その日1日だけピン留め。日記にも記録されています🎬</p>
                <div className="panel-btns">
                  <button className="p-copy" onClick={() => { setDeclDraft(decl); setDeclModal("edit"); }}>書きなおす</button>
                  <button className="p-close" onClick={() => setDeclModal(null)}>閉じる</button>
                </div>
              </>
            ) : (
              <>
                <textarea
                  autoFocus
                  style={{ minHeight: 120 }}
                  placeholder="今日は愛全開の私でいる！"
                  value={declDraft}
                  onChange={(e) => setDeclDraft(e.target.value)}
                />
                <p className="panel-note">その日1日だけ表示。決定すると今日の日記の先頭に🎬として残ります</p>
                <div className="panel-btns">
                  <button
                    className="p-copy" disabled={!declDraft.trim()}
                    onClick={() => { applyDeclaration(declDraft); setDeclModal(null); }}
                  >決定</button>
                  <button className="p-close" onClick={() => setDeclModal(null)}>閉じる</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* マーク設定 modal */}
      {markSettingsOpen && (
        <div className="overlay" onClick={() => setMarkSettingsOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>⚙︎ 箇条書きマーク</h3>
            <p className="panel-note">日記の入力欄に出るマーク。タップで削除、下から追加できます。</p>
            <div className="mark-manage">
              {marks.map((m) => (
                <span className="mark-item" key={m}>
                  {m}
                  <button onClick={() => removeMark(m)} aria-label="削除">✕</button>
                </span>
              ))}
              {marks.length === 0 && <p className="panel-note">マークがありません。追加してね</p>}
            </div>
            <div className="in-row" style={{ marginTop: 4 }}>
              <input
                className="f-input"
                maxLength={4}
                placeholder="記号や絵文字（例: ❤︎）"
                value={newMark}
                onChange={(e) => setNewMark(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addMark()}
              />
              <button className="p-copy" style={{ flex: "0 0 auto", padding: "8px 16px", borderRadius: 999 }} disabled={!newMark.trim()} onClick={addMark}>追加</button>
            </div>
            <div className="panel-btns">
              <button className="p-close" onClick={() => setMarkSettingsOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {confirm && (
        <ConfirmDialog message={confirm.message} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
