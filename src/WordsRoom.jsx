import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey } from "./storage.js";
import { uid, copyText } from "./format.js";
import Pressable from "./Pressable.jsx";
import ContextMenu from "./ContextMenu.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
import useKbGap from "./useKbGap.js";
import { getReadPass, setReadPass, readWordsFromImage } from "./readWords.js";
import { pushSupported, currentSub, enablePush, disablePush, testPush } from "./push.js";

/* 💎 名言ルーム: 響いたフレーズを書き留めて、一覧でバーっと見返す。それだけ。
   - 新しい順に上から並べる。日付は出さない（言葉だけを見る）
   - 「誰の言葉か」は任意。書きはじめたときだけ欄が出る
   データ: room-data-v1:<id> = { words: [{ id, text, from, at }] } */

const GOAL = 1000;

export default function WordsRoom({ room, onBack, onMeta, showToast, pinned }) {
  const [words, setWords] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [draft, setDraft] = useState("");
  const [from, setFrom] = useState("");
  const [menu, setMenu] = useState(null);       // 長押しメニュー {id, x, y}
  const [editing, setEditing] = useState(null); // {id, text, from}
  const [confirm, setConfirm] = useState(null);
  const [justPosted, setJustPosted] = useState(null);
  const [barH, setBarH] = useState(76);
  const [bell, setBell] = useState(null);       // 通知パネル {on, busy}
  const [reading, setReading] = useState(false); // 📷 読み取り中
  const [passAsk, setPassAsk] = useState(null);  // 合言葉の入力 {value, file}
  const fileRef = useRef(null);
  const scrollRef = useRef(null);
  const barRef = useRef(null);
  const taRef = useRef(null);
  const kbGap = useKbGap(!editing);

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && Array.isArray(v.words)) setWords(v.words);
      } catch (e) { /* 初回 */ } finally { setLoaded(true); }
    })();
  }, [room.id]);

  // 入力欄の高さぶん、一覧の下に余白をとる
  useEffect(() => {
    if (!barRef.current || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => barRef.current && setBarH(barRef.current.offsetHeight));
    ro.observe(barRef.current);
    return () => ro.disconnect();
  }, [editing]);

  const openBell = async () => {
    let on = false;
    try { on = !!(await currentSub()); } catch (e) { /* 未対応 */ }
    setBell({ on, busy: false });
  };

  const toggleBell = async () => {
    if (!pushSupported()) {
      showToast("ホーム画面に追加したアプリから開いてね");
      return;
    }
    setBell((b) => ({ ...b, busy: true }));
    try {
      if (bell.on) {
        await disablePush();
        setBell({ on: false, busy: false });
        showToast("毎朝の名言をオフにしました");
      } else {
        await enablePush();
        setBell({ on: true, busy: false });
        showToast("毎朝7時に名言が届きます💎");
      }
    } catch (e) {
      setBell((b) => ({ ...b, busy: false }));
      showToast(e.message === "denied" ? "設定アプリで通知を許可してね" : "うまくいきませんでした。電波を確認してね");
    }
  };

  const sendTest = async () => {
    setBell((b) => ({ ...b, busy: true }));
    try {
      await testPush();
      showToast("テストを送りました。数秒で届くよ");
    } catch (e) {
      showToast("送れませんでした");
    }
    setBell((b) => ({ ...b, busy: false }));
  };

  /* 📷 画像 → 入力欄へ。保存はせず、直してから↑で書き留める */
  const readImage = async (file, passOverride) => {
    const pass = passOverride || (await getReadPass());
    if (!pass) { setPassAsk({ value: "", file }); return; }
    setReading(true);
    try {
      const r = await readWordsFromImage(file, pass);
      if (passOverride) await setReadPass(passOverride);
      if (!r.text) { showToast("言葉が見つからなかったよ"); return; }
      setDraft(r.text);
      if (r.from) setFrom(r.from);
      requestAnimationFrame(() => {
        const el = taRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, 140) + "px";
      });
      showToast("読み取ったよ。直してから↑で書き留めてね");
    } catch (e) {
      if (e.message === "pass") {
        await setReadPass(null);
        setPassAsk({ value: "", file, wrong: true });
      } else {
        // 合言葉は通っている（上限・電波などの別の理由）ので覚えておく
        if (passOverride) await setReadPass(passOverride);
        showToast({
          limit: "今日の読み取りは上限（30枚）に達しました",
          image: "この画像は読めませんでした",
          net: "つながりませんでした。電波を確認してね"
        }[e.message] || "読み取りに失敗しました");
      }
    } finally {
      setReading(false);
    }
  };

  const persist = async (next) => {
    setWords(next);
    try {
      await set(roomDataKey(room.id), { words: next });
      const last = [...next].sort((a, b) => (a.at || 0) - (b.at || 0)).pop();
      onMeta({ preview: last ? last.text.split("\n")[0].slice(0, 40) : "", lastAt: Date.now() });
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね");
    }
  };

  const post = () => {
    const text = draft.trim();
    if (!text) return;
    const w = { id: uid(), text, from: from.trim(), at: Date.now() };
    persist([...words, w]);
    setDraft("");
    setFrom("");
    if (taRef.current) taRef.current.style.height = "auto";
    setJustPosted(w.id);
    setTimeout(() => setJustPosted(null), 900);
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }));
  };

  const onKeyDown = (e) => {
    // 日本語変換の確定Enterでは送らない。改行は Shift+Enter
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault();
      post();
    }
  };

  const autoGrow = (e) => {
    setDraft(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  };

  const saveEdit = () => {
    const text = editing.text.trim();
    if (!text) { showToast("言葉を書いてね"); return; }
    persist(words.map((w) => (w.id === editing.id ? { ...w, text, from: editing.from.trim() } : w)));
    setEditing(null);
  };

  const askDelete = (id) => {
    const w = words.find((x) => x.id === id);
    if (!w) return;
    const label = w.text.length > 20 ? w.text.slice(0, 20) + "…" : w.text;
    setConfirm({
      message: `「${label}」を削除しますか？`,
      onConfirm: () => {
        persist(words.filter((x) => x.id !== id));
        setConfirm(null);
        setEditing(null);
      }
    });
  };

  const list = [...words].sort((a, b) => (b.at || 0) - (a.at || 0));
  const menuWord = menu && words.find((w) => w.id === menu.id);

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title">{room.name}</div>
          <div className="hd-sub">{loaded ? "わたしだけの名言" : "Nachumin Lifelog"}</div>
        </div>
        <button className="now-view" aria-label="毎朝の通知" onClick={openBell} style={{ marginLeft: "auto" }}>🔔</button>
        <div className="wd-count" aria-label={`${words.length}個`}>
          <b>{words.length}</b><span>/ {GOAL}</span>
        </div>
      </div>

      {pinned}

      <div className="wd-scroll" ref={scrollRef} style={{ paddingBottom: barH + 12 }}>
        {loaded && list.length === 0 && (
          <div className="now-empty">響いた言葉を下から書き留めてね💎</div>
        )}
        {list.map((w) => (
          <Pressable
            key={w.id}
            className={"wd-card" + (justPosted === w.id ? " pop" : "")}
            onLongPress={(pt) => setMenu({ id: w.id, x: pt.x, y: pt.y })}
          >
            <div className="wd-text">{w.text}</div>
            {w.from && <div className="wd-from">— {w.from}</div>}
          </Pressable>
        ))}
      </div>

      {/* 入力欄。書きはじめたら「誰の言葉？」が出る */}
      {!editing && (
        <div className="bar bar-fixed now-bar" ref={barRef} style={{ bottom: kbGap }}>
          {draft.trim() && (
            <input
              className="wd-from-in"
              placeholder="誰の言葉？（なくてもOK）"
              enterKeyHint="send"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) {
                  e.preventDefault();
                  post();
                }
              }}
            />
          )}
          <div className="in-row">
            <button
              className="wd-cam" aria-label="画像から読み取る" disabled={reading}
              onClick={() => fileRef.current?.click()}
            >{reading ? <span className="wd-cam-spin" /> : "📷"}</button>
            <input
              ref={fileRef} type="file" accept="image/*" hidden
              onChange={(e) => {
                const f = e.target.files?.[0];
                e.target.value = ""; // 同じ画像をもう一度選べるように
                if (f) readImage(f);
              }}
            />
            <textarea
              ref={taRef} className="ta" rows={1}
              placeholder={reading ? "読み取り中…" : "響いた言葉"}
              enterKeyHint="send"
              value={draft} onChange={autoGrow} onKeyDown={onKeyDown}
            />
            <button className="send" aria-label="書き留める" disabled={!draft.trim()} onClick={post}>↑</button>
          </div>
        </div>
      )}

      {menu && menuWord && (
        <ContextMenu
          x={menu.x} y={menu.y}
          onClose={() => setMenu(null)}
          onCopy={async () => {
            const ok = await copyText(menuWord.from ? `${menuWord.text}\n— ${menuWord.from}` : menuWord.text);
            showToast(ok ? "コピーしました🩷" : "コピーできませんでした");
            setMenu(null);
          }}
          onEdit={() => {
            setEditing({ id: menuWord.id, text: menuWord.text, from: menuWord.from || "" });
            setMenu(null);
          }}
          onDelete={() => { const id = menuWord.id; setMenu(null); askDelete(id); }}
        />
      )}

      {editing && (
        <div className="overlay" onClick={() => setEditing(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>💎 名言を直す</h3>
            <div className="f-label">言葉</div>
            <textarea
              autoFocus style={{ minHeight: 90 }}
              value={editing.text}
              onChange={(e) => setEditing((o) => ({ ...o, text: e.target.value }))}
            />
            <div className="f-label">誰の言葉（なくてもOK）</div>
            <input
              className="f-input"
              value={editing.from}
              onChange={(e) => setEditing((o) => ({ ...o, from: e.target.value }))}
            />
            <div className="panel-btns">
              <button className="p-copy" onClick={saveEdit}>保存</button>
              <button className="p-del" onClick={() => askDelete(editing.id)}>削除</button>
              <button className="p-close" onClick={() => setEditing(null)}>もどる</button>
            </div>
          </div>
        </div>
      )}

      {bell && (
        <div className="overlay" onClick={() => setBell(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>🔔 毎朝の名言</h3>
            <div className="wd-bell-note">
              毎朝7時に、書き溜めた名言から1つ選んで通知します。<br />
              言葉はこのスマホの中だけで選ぶので、外には出ません。
            </div>
            <button
              className={"wd-bell-toggle" + (bell.on ? " on" : "")}
              disabled={bell.busy}
              onClick={toggleBell}
            >{bell.busy ? "…" : bell.on ? "💎 オン中（タップでオフ）" : "🔔 オンにする"}</button>
            <div className="panel-btns">
              {bell.on && <button className="p-copy" disabled={bell.busy} onClick={sendTest}>いま1通ためす</button>}
              <button className="p-close" onClick={() => setBell(null)}>もどる</button>
            </div>
          </div>
        </div>
      )}

      {passAsk && (
        <div className="overlay" onClick={() => setPassAsk(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📷 合言葉</h3>
            <div className="wd-bell-note">
              {passAsk.wrong ? "合言葉がちがうみたい。もう一度入れてね。" : "画像の読み取りに使う合言葉を入れてね。"}<br />
              このスマホに覚えるので、入れるのは最初の1回だけ。
            </div>
            <input
              className="f-input" type="password" autoFocus autoComplete="off"
              value={passAsk.value}
              onChange={(e) => setPassAsk((o) => ({ ...o, value: e.target.value }))}
            />
            <div className="panel-btns">
              <button
                className="p-copy" disabled={!passAsk.value.trim()}
                onClick={() => { const { file, value } = passAsk; setPassAsk(null); readImage(file, value.trim()); }}
              >読み取る</button>
              <button className="p-close" onClick={() => setPassAsk(null)}>もどる</button>
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
