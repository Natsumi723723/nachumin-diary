import { useState, useEffect, useMemo, useRef } from "react";
import {
  get, set, loadRooms, ROOMS_KEY, roomDataKey, trashKey, DIARY_ROOM_ID, DECL_KEY,
  MARKS_KEY, DEFAULT_MARKS, doneLogKey
} from "./storage.js";
import {
  keyToDisp, homeDate, uid, escapeRegExp, todayKey, nowTime,
  applyDeclToEntryText
} from "./format.js";
import { dumpAll, restoreAll } from "./backup.js";
import { css } from "./theme.js";
import DiaryRoom from "./DiaryRoom.jsx";
import TalkRoom from "./TalkRoom.jsx";
import TodoRoom from "./TodoRoom.jsx";
import DragList from "./DragList.jsx";
import DarelogRoom from "./DarelogRoom.jsx";
import SwipeBack from "./SwipeBack.jsx";

const EMOJI_PICKS = [
  "💗", "🩷", "💛", "🩵", "💜", "🤍", "🖤", "🌸", "🌷", "🎀",
  "🌟", "✨", "⭐️", "👑", "🫶", "🐰", "🐻", "🐱", "🦄", "🌙",
  "🌊", "🌿", "🍓", "🍒", "🧸", "📖", "💬", "✅", "🌗", "🔥"
];
const TYPE_LABEL = { diary: "日記", talk: "トーク", todo: "TODO", darelog: "だれログ" };

export default function App() {
  const [rooms, setRooms] = useState(null);
  const [view, setView] = useState({ screen: "home" }); // {screen:'room', roomId, q?}
  const [searchOpen, setSearchOpen] = useState(false);
  const [gq, setGq] = useState("");
  const [cache, setCache] = useState(null); // { roomId: data } 横断検索用
  const [modal, setModal] = useState(null); // {mode:'new'|'edit', name, emoji, type, roomId?}
  const [roomDel, setRoomDel] = useState(false);
  const [decl, setDecl] = useState(""); // 今日の宣言（空=未設定）
  const [declModal, setDeclModal] = useState(null); // null | 'view' | 'edit'
  const [declDraft, setDeclDraft] = useState("");
  const [diarySync, setDiarySync] = useState(0); // 開いている日記ルームへ再読込を通知
  const [marks, setMarks] = useState(DEFAULT_MARKS);
  const [markSettingsOpen, setMarkSettingsOpen] = useState(false);
  const [newMark, setNewMark] = useState("");
  const [backupOpen, setBackupOpen] = useState(false);
  const [backupText, setBackupText] = useState("");
  const [restoreText, setRestoreText] = useState("");
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
        const d = await get(DECL_KEY);
        if (d && d.dateKey === todayKey()) setDecl(d.text);
        const mk = await get(MARKS_KEY);
        if (Array.isArray(mk) && mk.length) setMarks(mk);
      } catch (e) {
        showToast("データの読み込みに失敗しました");
        setRooms([]);
      }
    })();
  }, []);

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
    const defaultEmoji = { diary: "💗", todo: "✅", darelog: "🌗", talk: "🩷" }[modal.type] || "🩷";
    // だれログは初期人格を用意（記録のハードルをゼロに）
    const initMembers = modal.type === "darelog"
      ? [
          { id: uid(), name: "ヒカルくん", color: "#d4f0ff", icon: { type: "emoji", value: "🌊" }, side: "left" },
          { id: uid(), name: "柊くん", color: "#d9ffe3", icon: { type: "emoji", value: "🌿" }, side: "left" },
          { id: uid(), name: "ひかりちゃん", color: "#ffd9ec", icon: { type: "emoji", value: "🌸" }, side: "right" }
        ]
      : [];
    const room = {
      id: uid(), type: modal.type, name,
      emoji: modal.emoji.trim() || defaultEmoji,
      members: initMembers, createdAt: Date.now(), lastAt: 0, preview: ""
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
    updateRoom(modal.roomId, { name, emoji: modal.emoji.trim() || "💗" });
    setModal(null);
  };

  const deleteRoom = async () => {
    if (!roomDel) {
      setRoomDel(true);
      return;
    }
    const id = modal.roomId;
    try {
      // ハード削除はしない: データをゴミ箱キーへ退避してからルームを外す
      const data = await get(roomDataKey(id));
      if (data) await set(trashKey(id), data);
      saveRooms(rooms.filter((r) => r.id !== id));
      setModal(null);
      setRoomDel(false);
      showToast("ルームを削除しました");
    } catch (e) {
      showToast("削除に失敗しました");
    }
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

  const downloadBackup = () => {
    try {
      const blob = new Blob([backupText], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `nachumin-diary-backup-${todayKey()}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 3000);
      showToast("バックアップを保存したよ💗 iCloud/ファイルに入れておくと安心");
    } catch (e) {
      showToast("保存できない環境みたい。コピーを使ってね");
    }
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

  const doRestore = async () => {
    let obj;
    try {
      obj = JSON.parse(restoreText);
    } catch (e) {
      showToast("バックアップの形式が読めませんでした 🥺");
      return;
    }
    try {
      const res = await restoreAll(obj);
      setRooms(res.rooms);
      if (obj.declaration && obj.declaration.dateKey === todayKey() && !decl) {
        await set(DECL_KEY, obj.declaration);
        setDecl(obj.declaration.text);
      }
      setDiarySync((s) => s + 1);
      setBackupOpen(false);
      setRestoreText("");
      showToast(`復元完了💗 ${res.addedRooms}ルーム / ${res.addedItems}件を追加`);
    } catch (e) {
      showToast("これはこのアプリのバックアップではないみたい 🥺");
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
          ? <TodoRoom key={room.id} {...common} onTodoComplete={onTodoComplete} onTodoUncomplete={onTodoUncomplete} />
          : room.type === "darelog"
            ? <DarelogRoom key={room.id} {...common} onRoomChange={(patch) => updateRoom(room.id, patch)} />
            : <TalkRoom key={room.id} {...common} onRoomChange={(patch) => updateRoom(room.id, patch)} />;
      content = (
        <SwipeBack key={room.id} onBack={() => setView({ screen: "home" })}>
          {roomEl}
        </SwipeBack>
      );
    }
  } else {
    content = (
      <>
        {/* home header */}
        <div className="hd">
          <span style={{ fontSize: 20 }}>💗</span>
          <div>
            <div className="hd-title">Nachumin Diary</div>
            <div className="hd-sub">自分だけのトークルーム</div>
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

        {/* room list / search results */}
        <div className="rooms">
          {results ? (
            results.length === 0 ? (
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
            )
          ) : (
            <DragList
              items={sorted}
              keyOf={(r) => r.id}
              onReorder={(next) => saveRooms(next)}
              renderItem={(r) => {
                // 1行目=ルーム名。2行目はトーク型なら「話者名: 内容」、日記型は内容のみ
                const isTalk = r.type === "talk";
                const isTodo = r.type === "todo";
                const emptyMsg = isTalk ? "かけあいを書こう💗"
                  : isTodo ? "やることを追加しよう💗"
                  : r.type === "darelog" ? "朝昼夜の記録をつけよう💗"
                  : "日記を書こう💗";
                const line2 = r.preview
                  ? (isTalk && r.previewName ? `${r.previewName}: ${r.preview}` : r.preview)
                  : emptyMsg;
                return (
                  <div
                    className="room-row"
                    onClick={() => setView({ screen: "room", roomId: r.id })}
                  >
                    <div className="r-ic">{r.emoji}</div>
                    <div className="r-main">
                      <div className="r-name">
                        {r.name}
                        <span className="r-type">{TYPE_LABEL[r.type] || ""}</span>
                      </div>
                      <div className="r-prev">{line2}</div>
                    </div>
                    <div className="r-side">
                      {isTodo && r.todoOpen > 0 && <span className="r-badge">{r.todoOpen}</span>}
                      <span className="r-date">{homeDate(r.lastAt)}</span>
                      <button
                        className="r-more" aria-label="ルーム設定"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModal({ mode: "edit", roomId: r.id, name: r.name, emoji: r.emoji, type: r.type });
                          setRoomDel(false);
                        }}
                      >⋯</button>
                    </div>
                  </div>
                );
              }}
            />
          )}
        </div>
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
            </div>
            <div className="panel-btns">
              <button className="p-copy" onClick={modal.mode === "new" ? createRoom : saveEdit}>
                {modal.mode === "new" ? "つくる" : "保存"}
              </button>
              {modal.mode === "edit" && (
                <button className={"p-del" + (roomDel ? " arm" : "")} onClick={deleteRoom}>
                  {roomDel ? "ほんとに削除" : "削除"}
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
              全ルーム・全メンバー・宣言をまるごと1ファイルに保存します。<br />
              端末が変わっても、このファイルから元どおり復元できます。
            </p>
            <div className="panel-btns">
              <button className="p-copy" onClick={downloadBackup}>💾 ファイルに保存</button>
              <button className="p-dl" onClick={copyBackup}>{copied ? "コピーしたよ💗" : "コピー"}</button>
            </div>
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
              <button className="p-copy" disabled={!restoreText.trim()} onClick={doRestore}>復元する</button>
              <button className="p-close" onClick={() => { setBackupOpen(false); setRestoreText(""); }}>閉じる</button>
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

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
