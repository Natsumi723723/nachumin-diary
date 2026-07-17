import { useState, useEffect, useMemo, useRef } from "react";
import {
  get, set, loadRooms, ROOMS_KEY, roomDataKey, trashKey
} from "./storage.js";
import { keyToDisp, homeDate, uid, escapeRegExp } from "./format.js";
import { css } from "./theme.js";
import DiaryRoom from "./DiaryRoom.jsx";
import TalkRoom, { MIcon } from "./TalkRoom.jsx";

export default function App() {
  const [rooms, setRooms] = useState(null);
  const [view, setView] = useState({ screen: "home" }); // {screen:'room', roomId, q?}
  const [searchOpen, setSearchOpen] = useState(false);
  const [gq, setGq] = useState("");
  const [cache, setCache] = useState(null); // { roomId: data } 横断検索用
  const [modal, setModal] = useState(null); // {mode:'new'|'edit', name, emoji, type, roomId?}
  const [roomDel, setRoomDel] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  const showToast = (msg, ms = 3000) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), ms);
  };

  /* 起動時: ルーム読込（旧データがあれば「日記」ルームへ自動移行） */
  useEffect(() => {
    (async () => {
      try {
        setRooms(await loadRooms());
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

  /* ---------- render ---------- */
  if (!rooms) {
    return (
      <div className="app">
        <style>{css}</style>
      </div>
    );
  }

  let content;
  if (view.screen === "room") {
    const room = rooms.find((r) => r.id === view.roomId);
    if (!room) {
      content = null;
      // ルームが消えていたらホームへ
      if (view.screen === "room") setTimeout(() => setView({ screen: "home" }), 0);
    } else {
      const common = {
        room,
        onBack: () => setView({ screen: "home" }),
        onMeta: (patch) => updateRoom(room.id, patch),
        initialQuery: view.q,
        showToast
      };
      content = room.type === "diary"
        ? <DiaryRoom key={room.id} {...common} />
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
            <>
              {sorted.map((r) => (
                <div
                  className="room-row" key={r.id}
                  onClick={() => setView({ screen: "room", roomId: r.id })}
                >
                  <div className="r-ic">{r.emoji}</div>
                  <div className="r-main">
                    <div className="r-name">{r.name}</div>
                    <div className="r-prev">{r.preview || (r.type === "diary" ? "日記を書こう💗" : "かけあいを書こう💗")}</div>
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
              ))}
              <div className="empty" style={{ margin: "24px 24px" }}>
                ➕ からルームを追加できるよ{"\n"}日記型: 1日1吹き出しの日記{"\n"}トーク型: キャラのかけあい・会話メモ
              </div>
            </>
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

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
