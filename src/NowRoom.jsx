import { useState, useEffect, useRef, Fragment } from "react";
import { get, set, roomDataKey } from "./storage.js";
import {
  todayKey, yesterdayKey, nowTime, uid, keyToDisp, keyToDate, WEEKDAYS, dowClass,
  timeSortKey, addDays, copyText
} from "./format.js";
import Pressable from "./Pressable.jsx";
import ContextMenu from "./ContextMenu.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
import useKbGap from "./useKbGap.js";
import linkify from "./linkify.jsx";

/* 🕐 なうルーム: ひとりツイッター。「いま何してる」を時刻つきでつぶやき続ける。
   - 起動したら最初に開くルーム。開いたらすぐ書けることを最優先にする
   - 投稿は日記ルームの各日に「🕐 なう」として自動で並ぶ（日記本文には書き込まない）
   - 起動を軽くするため、最初は今日と昨日だけ描画する。過去は「前の日を見る」で足す */

const PAGE_DAYS = 7; // 「前の日を見る」1回で足す日数

// その日の投稿を時刻順（29時制）に並べる。同時刻は投稿順
const byTime = (a, b) => timeSortKey(a.time) - timeSortKey(b.time) || (a.at || 0) - (b.at || 0);

// input[type=time] の "09:05" ⇄ 表示用の "9:05"
const toInputTime = (t) => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(t || "");
  return m ? `${m[1].padStart(2, "0")}:${m[2]}` : "";
};
const fromInputTime = (v) => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(v || "");
  return m ? `${Number(m[1])}:${m[2]}` : "";
};

export default function NowRoom({ room, onBack, onMeta, showToast, pinned, onOpenDiary }) {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [draft, setDraft] = useState("");
  const [showFrom, setShowFrom] = useState(() => yesterdayKey()); // ここより前の日は畳む
  const [menu, setMenu] = useState(null);       // 長押しメニュー {id, x, y}
  const [editing, setEditing] = useState(null); // {id, text, time}
  const [confirm, setConfirm] = useState(null);
  const [justPosted, setJustPosted] = useState(null);
  const [barH, setBarH] = useState(76);
  const scrollRef = useRef(null);
  const barRef = useRef(null);
  const taRef = useRef(null);
  const kbGap = useKbGap(!editing);
  const today = todayKey();

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && Array.isArray(v.posts)) setPosts(v.posts);
      } catch (e) { /* 初回 */ } finally { setLoaded(true); }
    })();
  }, [room.id]);

  // 入力欄の高さぶん、タイムラインの下に余白をとる
  useEffect(() => {
    if (!barRef.current || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => barRef.current && setBarH(barRef.current.offsetHeight));
    ro.observe(barRef.current);
    return () => ro.disconnect();
  }, [editing]);

  // 開いたとき・投稿したときは、いちばん下（いま）を見せる
  const scrollToEnd = (smooth) => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  };
  useEffect(() => { if (loaded) scrollToEnd(false); }, [loaded]);

  const persist = async (next) => {
    setPosts(next);
    try {
      await set(roomDataKey(room.id), { posts: next });
      const last = [...next].sort((a, b) => (a.at || 0) - (b.at || 0)).pop();
      onMeta({
        preview: last ? `${last.time} ${last.text.split("\n")[0]}`.slice(0, 40) : "",
        lastAt: Date.now()
      });
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね");
    }
  };

  const post = () => {
    const text = draft.trim();
    if (!text) return;
    const p = { id: uid(), dateKey: todayKey(), time: nowTime(), text, at: Date.now() };
    persist([...posts, p]);
    setDraft("");
    if (taRef.current) taRef.current.style.height = "auto";
    setJustPosted(p.id);
    setTimeout(() => setJustPosted(null), 900);
    requestAnimationFrame(() => scrollToEnd(true));
  };

  const onKeyDown = (e) => {
    // 日本語変換の確定Enterでは送らない
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault();
      post();
    }
  };

  const autoGrow = (e) => {
    setDraft(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const saveEdit = () => {
    const text = editing.text.trim();
    const time = fromInputTime(editing.time);
    if (!text) { showToast("なにしてたか書いてね"); return; }
    if (!time) { showToast("時刻を入れてね"); return; }
    persist(posts.map((p) => (p.id === editing.id ? { ...p, text, time } : p)));
    setEditing(null);
  };

  const askDelete = (id) => {
    const p = posts.find((x) => x.id === id);
    if (!p) return;
    const label = p.text.length > 20 ? p.text.slice(0, 20) + "…" : p.text;
    setConfirm({
      message: `${p.time}「${label}」を削除しますか？`,
      onConfirm: () => {
        persist(posts.filter((x) => x.id !== id));
        setConfirm(null);
        setEditing(null);
      }
    });
  };

  // 日付ごとにまとめる（表示範囲より前は数だけ数えておく）
  const days = {};
  for (const p of posts) (days[p.dateKey] = days[p.dateKey] || []).push(p);
  const allKeys = Object.keys(days).sort();
  const shownKeys = allKeys.filter((k) => k >= showFrom);
  if (!shownKeys.includes(today)) shownKeys.push(today); // 今日は投稿0件でも見出しを出す
  const hiddenDays = allKeys.filter((k) => k < showFrom).length;
  const todayCount = (days[today] || []).length;

  const dayLabel = (k) => {
    const d = `${keyToDisp(k).slice(5)} ${WEEKDAYS[keyToDate(k).getDay()]}`;
    return k === today ? `今日 ${d}` : k === yesterdayKey() ? `昨日 ${d}` : d;
  };

  const menuPost = menu && posts.find((p) => p.id === menu.id);

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title">{room.name}</div>
          <div className="hd-sub">{loaded ? `今日 ${todayCount}件` : "Nachumin Lifelog"}</div>
        </div>
        {/* 日記へ1タップ（今日のなうがどう並んだかをすぐ見られるように） */}
        {onOpenDiary && (
          <button className="now-to-diary" onClick={onOpenDiary} aria-label="日記をひらく">
            <span className="now-to-diary-ic">💗</span>日記<span className="now-to-diary-arw">›</span>
          </button>
        )}
      </div>

      {pinned}

      <div className="chat now-scroll" ref={scrollRef} style={{ paddingBottom: barH + 12 }}>
        {hiddenDays > 0 && (
          <button className="now-more" onClick={() => setShowFrom((f) => addDays(f, -PAGE_DAYS))}>
            ↑ 前の日を見る（あと{hiddenDays}日ぶん）
          </button>
        )}

        {shownKeys.map((k) => {
          const list = (days[k] || []).slice().sort(byTime);
          return (
            <Fragment key={k}>
              <div className={"now-day" + (k === today ? " today" : "")}>
                <span className={"now-day-l " + dowClass(k)}>{dayLabel(k)}</span>
                {list.length > 0 && <span className="now-day-n">{list.length}</span>}
              </div>
              {list.length === 0 && k === today && (
                <div className="now-empty">下からつぶやいてね🕐 時刻は自動でつくよ</div>
              )}
              <div className="now-tl">
                {list.map((p) => (
                  <Pressable
                    key={p.id}
                    className={"now-post" + (justPosted === p.id ? " pop" : "")}
                    onLongPress={(pt) => setMenu({ id: p.id, x: pt.x, y: pt.y })}
                  >
                    <span className="now-time">{p.time}</span>
                    <span className="now-dot" aria-hidden="true" />
                    <span className="now-text">{linkify(p.text)}</span>
                  </Pressable>
                ))}
              </div>
            </Fragment>
          );
        })}
      </div>

      {/* 入力欄。開いたらすぐ書けるように、ほかの操作は置かない */}
      {!editing && (
        <div className="bar bar-fixed now-bar" ref={barRef} style={{ bottom: kbGap }}>
          <div className="in-row">
            <textarea
              ref={taRef} className="ta" rows={1}
              placeholder="いまなにしてる？"
              enterKeyHint="send"
              value={draft} onChange={autoGrow} onKeyDown={onKeyDown}
            />
            <button className="send" aria-label="つぶやく" disabled={!draft.trim()} onClick={post}>↑</button>
          </div>
        </div>
      )}

      {menu && menuPost && (
        <ContextMenu
          x={menu.x} y={menu.y}
          onClose={() => setMenu(null)}
          onCopy={async () => {
            const ok = await copyText(`${menuPost.time} ${menuPost.text}`);
            showToast(ok ? "コピーしました🩷" : "コピーできませんでした");
            setMenu(null);
          }}
          onEdit={() => {
            setEditing({ id: menuPost.id, text: menuPost.text, time: toInputTime(menuPost.time) });
            setMenu(null);
          }}
          onDelete={() => { const id = menuPost.id; setMenu(null); askDelete(id); }}
        />
      )}

      {editing && (
        <div className="overlay" onClick={() => setEditing(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>🕐 なうを直す</h3>
            <div className="f-label">時刻（あとから書いたときは直してね）</div>
            <input
              className="f-input" type="time" style={{ width: 140 }}
              value={editing.time}
              onChange={(e) => setEditing((o) => ({ ...o, time: e.target.value }))}
            />
            <div className="f-label">なにしてた</div>
            <textarea
              autoFocus style={{ minHeight: 80 }}
              value={editing.text}
              onChange={(e) => setEditing((o) => ({ ...o, text: e.target.value }))}
            />
            <div className="panel-btns">
              <button className="p-copy" onClick={saveEdit}>保存</button>
              <button className="p-del" onClick={() => askDelete(editing.id)}>削除</button>
              <button className="p-close" onClick={() => setEditing(null)}>もどる</button>
            </div>
          </div>
        </div>
      )}

      {confirm && (
        <ConfirmDialog message={confirm.message} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />
      )}
    </>
  );
}
