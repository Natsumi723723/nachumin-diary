import { useState, useEffect, useRef, Fragment } from "react";
import {
  get, set, roomDataKey, doneLogKey, habitsKey, habitLogKey
} from "./storage.js";
import {
  keyToDisp, todayKey, yesterdayKey, nowTime, escapeRegExp, uid,
  diaryToText, parseDiaryText, extractDoneSection, DONE_HEADER, safeFileName, copyText
} from "./format.js";
import InlineEdit from "./InlineEdit.jsx";
import MarkBar, { insertAtCursor } from "./MarkBar.jsx";
import useKbGap from "./useKbGap.js";
import Pressable from "./Pressable.jsx";
import ContextMenu from "./ContextMenu.jsx";

/* 日記型ルーム: 1日=1吹き出し。下部入力欄で送信=追記、吹き出しタップで全文編集。
   「できたこと」吹き出しに完了TODO＋習慣チップを表示。 */
export default function DiaryRoom({ room, onBack, onMeta, initialQuery, showToast, pinned, syncSignal, marks, onEditMarks }) {
  const [entries, setEntries] = useState({});
  const [doneLog, setDoneLog] = useState({});   // { dateKey: [{text,time}] }
  const [habits, setHabits] = useState([]);      // [{id,name,emoji}]
  const [habitAch, setHabitAch] = useState({});  // { dateKey: [habitId] }
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(null);
  const [selected, setSelected] = useState(todayKey());
  const [draft, setDraft] = useState("");
  const [searchOpen, setSearchOpen] = useState(!!initialQuery);
  const [query, setQuery] = useState(initialQuery || "");
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [habitModal, setHabitModal] = useState(false);
  const [habitDel, setHabitDel] = useState(null);
  const [menu, setMenu] = useState(null); // 長押しメニュー {type,k,x,y}
  const [copied, setCopied] = useState(false);
  const [barH, setBarH] = useState(120);
  const scrollRef = useRef(null);
  const taRef = useRef(null);
  const exRef = useRef(null);
  const barRef = useRef(null);
  const kbGap = useKbGap(!editing);

  /* load（+ 旧「できたこと」セクションの移行 + 習慣の初期化） */
  useEffect(() => {
    (async () => {
      try {
        let raw = await get(roomDataKey(room.id));
        raw = typeof raw === "string" ? JSON.parse(raw) : (raw || {});
        const log = (await get(doneLogKey(room.id))) || {};
        let migrated = false;
        const nextEntries = {};
        const nextLog = { ...log };
        for (const [k, v] of Object.entries(raw)) {
          if (v && typeof v.text === "string" && v.text.includes(DONE_HEADER)) {
            const { text, items } = extractDoneSection(v.text);
            nextEntries[k] = { ...v, text };
            if (items.length) {
              const arr = (nextLog[k] || []).slice();
              for (const it of items) {
                if (!arr.some((x) => x.text === it.text && x.time === it.time)) arr.push(it);
              }
              nextLog[k] = arr;
            }
            migrated = true;
          } else {
            nextEntries[k] = v;
          }
        }
        if (migrated) {
          await set(roomDataKey(room.id), nextEntries);
          await set(doneLogKey(room.id), nextLog);
        }
        setEntries(nextEntries);
        setDoneLog(nextLog);
        // 習慣: 初回のみ例を用意
        let hb = await get(habitsKey(room.id));
        if (hb === undefined) {
          hb = [
            { id: uid(), name: "note投稿", emoji: "📝" },
            { id: uid(), name: "キャラ投稿", emoji: "🎨" }
          ];
          await set(habitsKey(room.id), hb);
        }
        setHabits(Array.isArray(hb) ? hb : []);
        setHabitAch((await get(habitLogKey(room.id))) || {});
      } catch (e) {
        /* no data yet */
      } finally {
        setLoaded(true);
      }
    })();
  }, [room.id]);

  useEffect(() => {
    if (!syncSignal) return;
    (async () => {
      const v = await get(roomDataKey(room.id));
      if (v) setEntries(typeof v === "string" ? JSON.parse(v) : v);
      setDoneLog((await get(doneLogKey(room.id))) || {});
    })();
  }, [syncSignal]); // eslint-disable-line react-hooks/exhaustive-deps

  // 入力バーの高さを測って本文の下パディングにする
  useEffect(() => {
    if (!barRef.current || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => barRef.current && setBarH(barRef.current.offsetHeight));
    ro.observe(barRef.current);
    return () => ro.disconnect();
  }, [editing, searchOpen]);

  const persist = async (next) => {
    setEntries(next);
    try {
      await set(roomDataKey(room.id), next);
      const ks = Object.keys(next).sort();
      const lastKey = ks[ks.length - 1];
      onMeta({
        preview: lastKey ? next[lastKey].text.split("\n")[0].slice(0, 40) : "",
        lastAt: Date.now()
      });
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね");
    }
  };

  useEffect(() => {
    if (!query && !editing && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [loaded, query, editing]);

  useEffect(() => {
    if (!editing) return;
    const el = scrollRef.current?.querySelector(".editing-now");
    if (el) setTimeout(() => el.scrollIntoView({ block: "start", behavior: "smooth" }), 60);
  }, [editing]);

  /* ---------- 送信=追記 ---------- */
  const send = () => {
    const text = draft.trim();
    if (!text) return;
    const prev = entries[selected];
    persist({
      ...entries,
      [selected]: prev
        ? { ...prev, text: prev.text + "\n\n" + text } // 前回末尾に空行を挟んで続き
        : { text, time: nowTime() }
    });
    setDraft("");
    if (taRef.current) taRef.current.style.height = "auto";
    setTimeout(() => {
      const el = scrollRef.current?.querySelector(`[data-date="${selected}"]`);
      if (el) el.scrollIntoView({ block: "end", behavior: "smooth" });
      else if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 50);
  };

  const autoGrow = (e) => {
    setDraft(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  };
  const insertMark = (m) =>
    insertAtCursor(taRef.current, m + " ", (v) => {
      setDraft(v);
      requestAnimationFrame(() => {
        const el = taRef.current;
        if (el) { el.style.height = "auto"; el.style.height = Math.min(el.scrollHeight, 140) + "px"; }
      });
    });

  /* ---------- 全文編集（タップ） ---------- */
  const startEdit = (k) => { setEditing(k); setQuery(""); setSearchOpen(false); };
  const saveEdit = (k, raw) => {
    const text = raw.trim();
    if (!text) { setEditing(null); return; }
    persist({ ...entries, [k]: { ...entries[k], text } });
    setEditing(null);
  };
  const deleteEntry = (k) => {
    const next = { ...entries };
    delete next[k];
    persist(next);
    setEditing(null);
  };

  /* ---------- 習慣 ---------- */
  const toggleHabit = (dateKey, habitId) => {
    const cur = habitAch[dateKey] || [];
    const nextArr = cur.includes(habitId) ? cur.filter((x) => x !== habitId) : [...cur, habitId];
    const nextLog = { ...habitAch };
    if (nextArr.length) nextLog[dateKey] = nextArr;
    else delete nextLog[dateKey];
    setHabitAch(nextLog);
    set(habitLogKey(room.id), nextLog).catch(() => showToast("保存に失敗しました"));
  };
  const saveHabits = (next) => {
    setHabits(next);
    set(habitsKey(room.id), next).catch(() => showToast("保存に失敗しました"));
  };
  const addHabit = () => saveHabits([...habits, { id: uid(), name: "", emoji: "🩷" }]);
  const updateHabit = (id, patch) => saveHabits(habits.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  const moveHabit = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= habits.length) return;
    const next = [...habits];
    [next[i], next[j]] = [next[j], next[i]];
    saveHabits(next);
  };
  const removeHabit = (id) => {
    if (habitDel !== id) { setHabitDel(id); return; }
    saveHabits(habits.filter((h) => h.id !== id));
    setHabitDel(null);
  };
  const closeHabitModal = () => {
    // 名前空の習慣は片付ける
    const cleaned = habits.filter((h) => h.name.trim() || (h.emoji && h.emoji.trim()));
    if (cleaned.length !== habits.length) saveHabits(cleaned);
    setHabitModal(false);
    setHabitDel(null);
  };

  /* ---------- export / import ---------- */
  const exportText = () => diaryToText(entries);
  const doCopy = async () => {
    try { await navigator.clipboard.writeText(exportText()); setCopied(true); }
    catch (e) {
      try { exRef.current.focus(); exRef.current.select(); document.execCommand("copy"); setCopied(true); }
      catch (e2) { showToast("コピーできませんでした。全選択して手動でコピーしてね"); }
    }
    setTimeout(() => setCopied(false), 2000);
  };
  const doDownload = () => {
    try {
      const blob = new Blob([exportText()], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `nachumin-diary-${safeFileName(room.name)}.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 3000);
    } catch (e) { showToast("ダウンロードできない環境みたい。コピーを使ってね"); }
  };
  const doImport = () => {
    const parsed = parseDiaryText(importText);
    const keys = Object.keys(parsed);
    if (keys.length === 0) { showToast("読み込める日記が見つかりませんでした 🥺"); return; }
    let added = 0, skipped = 0;
    const next = { ...entries };
    for (const k of keys) {
      if (next[k]) skipped += 1;
      else { next[k] = parsed[k]; added += 1; }
    }
    persist(next);
    setImportOpen(false);
    setImportText("");
    showToast(`${added}件の日記を復元したよ💗` + (skipped ? `（${skipped}件はもうあるのでスキップ）` : ""));
  };

  const highlight = (text) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
    return parts.map((p, i) =>
      p.toLowerCase() === query.toLowerCase() ? <mark key={i} className="hl">{p}</mark> : p
    );
  };

  const doneTextOf = (k) => {
    const lines = ["🩷 できたこと"];
    for (const it of (doneLog[k] || [])) lines.push(`☑ ${it.text}${it.time ? ` (${it.time})` : ""}`);
    const ach = habitAch[k] || [];
    const hn = habits.filter((h) => ach.includes(h.id)).map((h) => `${h.emoji || ""}${h.name}`);
    if (hn.length) lines.push("習慣: " + hn.join(" "));
    return lines.join("\n");
  };
  const doCopyText = async (text) => {
    const ok = await copyText(text);
    showToast(ok ? "コピーしました🩷" : "コピーできませんでした。手動でコピーしてね");
    setMenu(null);
  };

  const q = query.toLowerCase();
  const today = todayKey();
  const allDates = new Set([...Object.keys(entries), ...Object.keys(doneLog), ...Object.keys(habitAch)]);
  if (habits.length) allDates.add(today);
  let displayKeys = [...allDates].sort();
  if (query) {
    displayKeys = displayKeys.filter((k) => {
      const inDiary = entries[k] && (entries[k].text + keyToDisp(k)).toLowerCase().includes(q);
      const inDone = (doneLog[k] || []).some((it) => it.text.toLowerCase().includes(q));
      return inDiary || inDone;
    });
  }

  const selDisp = keyToDisp(selected).slice(5);
  const chip = (label, key) => (
    <button
      key={label}
      className={"chip" + (selected === key ? " chip-on" : "")}
      onClick={() => setSelected(key)}
    >{label}</button>
  );

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div>
          <div className="hd-title">{room.name}</div>
          <div className="hd-sub">Nachumin Diary</div>
        </div>
        <button className="icon-btn" style={{ marginLeft: "auto" }} aria-label="習慣" onClick={() => setHabitModal(true)}>🎯</button>
        <button className="icon-btn" aria-label="テキスト書き出し" onClick={() => setExportOpen(true)}>📤</button>
        <button className="icon-btn" aria-label="テキストから復元" onClick={() => setImportOpen(true)}>📥</button>
        <button className="icon-btn" aria-label="検索" onClick={() => { setSearchOpen(!searchOpen); setQuery(""); }}>{searchOpen ? "✕" : "🔍"}</button>
      </div>

      {pinned}

      {searchOpen && (
        <div className="search-row">
          <input autoFocus placeholder="日記を検索（ことば・日付）" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      )}

      <div className="chat" ref={scrollRef} style={{ paddingBottom: editing ? 210 : barH + 12 }}>
        {loaded && displayKeys.length === 0 && (
          <div className="empty">
            {query ? "みつかりませんでした 🥺" : "まだ日記がありません。\n下から今日のことを書いてみよう💗"}
          </div>
        )}
        {displayKeys.map((k) => {
          const isEditing = editing === k;
          const hasDiary = !!entries[k];
          const done = doneLog[k] || [];
          const isToday = k === today;
          const ach = habitAch[k] || [];
          const showHabits = habits.length > 0 && (isToday || hasDiary || ach.length > 0);
          const showDone = done.length > 0 || showHabits;
          return (
            <Fragment key={k}>
              {hasDiary && (
                <div className="row" data-date={k}>
                  <div className="time">{entries[k].time}</div>
                  <Pressable
                    className={"bubble" + (isEditing ? " editing-now" : "")}
                    onClick={isEditing ? undefined : () => startEdit(k)}
                    onLongPress={isEditing ? undefined : (p) => setMenu({ type: "diary", k, x: p.x, y: p.y })}
                    role="button" tabIndex={0}
                    onKeyDown={(e) => !isEditing && e.key === "Enter" && startEdit(k)}
                  >
                    <span className="spark">✨</span>
                    <div className="d-head">🩷<span className="lnk">{keyToDisp(k)}</span>🩷</div>
                    {isEditing ? (
                      <InlineEdit
                        initial={entries[k].text}
                        appendNewline marks={marks} onEditMarks={onEditMarks} bottomToolbar
                        onSave={(t) => saveEdit(k, t)}
                        onCancel={() => setEditing(null)}
                        onDelete={() => deleteEntry(k)}
                        placeholder="内容を書きなおしてね"
                      />
                    ) : (
                      <div className="body">{highlight(entries[k].text)}</div>
                    )}
                  </Pressable>
                </div>
              )}
              {showDone && (
                <div className="done-row" style={hasDiary ? undefined : { marginTop: 0 }}>
                  <Pressable
                    className="done-bubble"
                    onLongPress={(p) => setMenu({ type: "done", k, x: p.x, y: p.y })}
                  >
                    <div className="done-head">🩷 できたこと</div>
                    {done.map((it, i) => (
                      <div className="done-line" key={i}>
                        ☑ {highlight(it.text)}
                        {it.time ? <span className="done-time"> ({it.time})</span> : null}
                      </div>
                    ))}
                    {showHabits && (
                      <div className={"habits-row" + (done.length ? " has-sep" : "")}>
                        {habits.map((h) => {
                          const on = ach.includes(h.id);
                          return (
                            <button
                              key={h.id}
                              className={"habit-chip" + (on ? " on" : "")}
                              onClick={() => toggleHabit(k, h.id)}
                            >
                              {h.emoji ? h.emoji + " " : ""}{h.name}{on ? " 🩷" : ""}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </Pressable>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* 下部入力欄（編集中は隠す） */}
      {!editing && (
        <div className="bar bar-fixed" ref={barRef} style={{ bottom: kbGap }}>
          <div className="chips">
            {chip("今日", today)}
            {chip("昨日", yesterdayKey())}
            <button className="chip chip-date">
              📅 {selected === today || selected === yesterdayKey() ? "日付をえらぶ" : selDisp}
              <input type="date" value={selected} onChange={(e) => e.target.value && setSelected(e.target.value)} />
            </button>
            {entries[selected] && <span className="exists-note">この日はもうあるので追記されます</span>}
          </div>
          {marks && marks.length > 0 && (
            <MarkBar marks={marks} onInsert={insertMark} onEdit={onEditMarks} />
          )}
          <div className="in-row">
            <textarea
              ref={taRef} className="ta" rows={1}
              placeholder={selected === today ? "今日あったことを書く…" : `${selDisp} に追記…`}
              value={draft} onChange={autoGrow}
            />
            <button className="send" aria-label="送信" disabled={!draft.trim()} onClick={send}>↑</button>
          </div>
        </div>
      )}

      {/* 長押しメニュー */}
      {menu && (
        <ContextMenu
          x={menu.x} y={menu.y}
          onClose={() => setMenu(null)}
          onCopy={() => doCopyText(menu.type === "diary" ? entries[menu.k]?.text || "" : doneTextOf(menu.k))}
          onEdit={menu.type === "diary" ? () => { setMenu(null); startEdit(menu.k); } : undefined}
          onDelete={menu.type === "diary" ? () => { setMenu(null); deleteEntry(menu.k); } : undefined}
        />
      )}

      {/* 習慣モーダル */}
      {habitModal && (
        <div className="overlay" onClick={closeHabitModal}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>🎯 習慣</h3>
            <p className="panel-note">毎日くり返すこと。日記の「できたこと」からワンタップで記録できます。</p>
            {habits.map((h, i) => (
              <div className="mem-row" key={h.id}>
                <input
                  className="f-input" style={{ width: 54, textAlign: "center", flex: "0 0 auto" }}
                  maxLength={4} placeholder="🩷"
                  value={h.emoji || ""}
                  onChange={(e) => updateHabit(h.id, { emoji: e.target.value })}
                />
                <input
                  className="f-input" style={{ flex: 1, minWidth: 0 }}
                  placeholder="習慣の名前" value={h.name}
                  onChange={(e) => updateHabit(h.id, { name: e.target.value })}
                />
                <button className="mem-btn" disabled={i === 0} onClick={() => moveHabit(i, -1)} aria-label="上へ">↑</button>
                <button className="mem-btn" disabled={i === habits.length - 1} onClick={() => moveHabit(i, 1)} aria-label="下へ">↓</button>
                <button
                  className="mem-btn" style={habitDel === h.id ? { background: "#e23d7c", color: "#fff" } : undefined}
                  onClick={() => removeHabit(h.id)} aria-label="削除"
                >{habitDel === h.id ? "!" : "🗑"}</button>
              </div>
            ))}
            {habits.length === 0 && <p className="panel-note">まだ習慣がありません。追加してね💗</p>}
            <div className="panel-btns">
              <button className="p-copy" onClick={addHabit}>＋ 習慣を追加</button>
              <button className="p-close" onClick={closeHabitModal}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* export modal */}
      {exportOpen && (
        <div className="overlay" onClick={() => setExportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📤 日記をテキストで書き出し</h3>
            <textarea ref={exRef} readOnly value={exportText()} />
            <div className="panel-btns">
              <button className="p-copy" onClick={doCopy}>{copied ? "コピーしたよ💗" : "ぜんぶコピー"}</button>
              <button className="p-dl" onClick={doDownload}>.txtでDL</button>
              <button className="p-close" onClick={() => setExportOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* import modal */}
      {importOpen && (
        <div className="overlay" onClick={() => setImportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📥 テキストから復元</h3>
            <textarea
              placeholder={"エクスポートした .txt の内容をここに貼り付けてね\n\n🩷2026/07/17🩷 9:30\n今日あったこと…"}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
            />
            <p className="panel-note">※ すでにある日付の日記は上書きせずスキップされます</p>
            <div className="panel-btns">
              <button className="p-copy" disabled={!importText.trim()} onClick={doImport}>読み込む</button>
              <button className="p-close" onClick={() => { setImportOpen(false); setImportText(""); }}>閉じる</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
