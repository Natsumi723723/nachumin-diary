import { useState, useEffect, useMemo, useRef } from "react";
import {
  get, set, loadRooms, ROOMS_KEY, roomDataKey, trashKey, DIARY_ROOM_ID, DECL_KEY
} from "./storage.js";
import {
  keyToDisp, homeDate, uid, escapeRegExp, todayKey, nowTime, applyDeclToEntryText
} from "./format.js";
import { dumpAll, restoreAll } from "./backup.js";
import { css } from "./theme.js";
import DiaryRoom from "./DiaryRoom.jsx";
import TalkRoom from "./TalkRoom.jsx";

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
        setRooms(await loadRooms());
        const d = await get(DECL_KEY);
        if (d && d.dateKey === todayKey()) setDecl(d.text);
      } catch (e) {
        showToast("データの読み込みに失敗しました");
        setRooms([]);
      }
    })();
  }, []);

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

  /* 横断検索: 検索を開いたら全ルームのデータを読み込む */
  useEffect(() => {
    if (!searchOpen || !rooms) return;
    (async () => {
      const c = {};
      for (const r of rooms) c[r.id] = await get(roomDataKey(r.id));
      setCache(c);
    })();
  }, [searchOpen, rooms]);

  const sorted = useMemo(
    () => (rooms ? [...rooms].sort((a, b) => (b.lastAt || 0) - (a.lastAt || 0)) : []),
    [rooms]
  );

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
    const room = {
      id: uid(), type: modal.type, name,
      emoji: modal.emoji.trim() || (modal.type === "diary" ? "💗" : "🩷"),
      members: [], createdAt: Date.now(), lastAt: 0, preview: ""
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
      content = room.type === "diary"
        ? <DiaryRoom key={room.id} {...common} syncSignal={diarySync} />
        : <TalkRoom key={room.id} {...common} onRoomChange={(patch) => updateRoom(room.id, patch)} />;
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
            sorted.map((r) => {
              // 1行目=ルーム名。2行目はトーク型なら「話者名: 内容」、日記型は内容のみ
              const isTalk = r.type === "talk";
              const line1 = r.name;
              const line2 = r.preview
                ? (isTalk && r.previewName ? `${r.previewName}: ${r.preview}` : r.preview)
                : (isTalk ? "かけあいを書こう💗" : "日記を書こう💗");
              return (
                <div
                  className="room-row" key={r.id}
                  onClick={() => setView({ screen: "room", roomId: r.id })}
                >
                  <div className="r-ic">{r.emoji}</div>
                  <div className="r-main">
                    <div className="r-name">{line1}</div>
                    <div className="r-prev">{line2}</div>
                  </div>
                  <div className="r-side">
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
            })
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
            <div className="f-label">アイコン絵文字</div>
            <input
              className="f-input" style={{ width: 90, textAlign: "center" }}
              maxLength={8} placeholder={modal.type === "diary" ? "💗" : "🩷"}
              value={modal.emoji}
              onChange={(e) => setModal((o) => ({ ...o, emoji: e.target.value }))}
            />
            <div className="f-label">タイプ{modal.mode === "edit" ? "（変更できません）" : ""}</div>
            <div className="type-row">
              <button
                className={"type-chip" + (modal.type === "diary" ? " on" : "")}
                disabled={modal.mode === "edit"}
                onClick={() => setModal((o) => ({ ...o, type: "diary" }))}
              >📖 日記型<small>1日=1吹き出し・追記式</small></button>
              <button
                className={"type-chip" + (modal.type === "talk" ? " on" : "")}
                disabled={modal.mode === "edit"}
                onClick={() => setModal((o) => ({ ...o, type: "talk" }))}
              >💬 トーク型<small>話者ごとに吹き出し</small></button>
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

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
