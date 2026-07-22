import { useState, useEffect, useRef, Fragment } from "react";
import { get, set, roomDataKey } from "./storage.js";
import {
  keyToDisp, keyToDate, WEEKDAYS, todayKey, nowTime, escapeRegExp, uid,
  parseTodoText, parseTodoLines, safeFileName, copyText
} from "./format.js";
import InlineEdit from "./InlineEdit.jsx";
import DragList from "./DragList.jsx";
import Pressable from "./Pressable.jsx";
import ContextMenu from "./ContextMenu.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
import { MEMBER_COLORS, textOn } from "./theme.js";

/* TODO型ルーム: 1メッセージ=1TODO。チェックで完了→日記へライフログ */
export default function TodoRoom({
  room, onBack, onMeta, initialQuery, showToast, pinned,
  onTodoComplete, onTodoUncomplete, onRoomChange
}) {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("todo"); // 'todo'=やること(未完了) | 'done'=完了
  const [draft, setDraft] = useState("");
  const [editing, setEditing] = useState(null); // todo id
  const [confirmDel, setConfirmDel] = useState(false);
  const [searchOpen, setSearchOpen] = useState(!!initialQuery);
  const [query, setQuery] = useState(initialQuery || "");
  const [justDone, setJustDone] = useState(() => new Set()); // 完了直後に一瞬残す
  const [undo, setUndo] = useState(null); // 直前の完了を戻すバー {id,text,doneTime,doneDateKey}
  const undoTimer = useRef(null);
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [copied, setCopied] = useState(false);
  const [menu, setMenu] = useState(null); // 長押しメニュー {id,x,y}
  const [clip, setClip] = useState(null); // クリップボード取り込み確認 {items:[{text,on}]}
  const [nextImportant, setNextImportant] = useState(false); // 入力欄の重要トグル
  const [onlyImportant, setOnlyImportant] = useState(false); // やること: 重要だけ絞り込み
  const [selPlace, setSelPlace] = useState(null); // 入力に付ける場所（次のTODOにも保持）
  const [placeFilter, setPlaceFilter] = useState(null); // やること: 場所で絞り込み
  const [placeModal, setPlaceModal] = useState(false); // 場所の管理
  const [placeDel, setPlaceDel] = useState(null);
  const [placePickFor, setPlacePickFor] = useState(null); // このTODOの場所を選ぶ
  const scrollRef = useRef(null);
  const taRef = useRef(null);
  const exRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && Array.isArray(v.todos)) setTodos(v.todos);
      } catch (e) {
        /* no data yet */
      } finally {
        setLoaded(true);
      }
    })();
  }, [room.id]);

  const persist = async (next) => {
    setTodos(next);
    try {
      await set(roomDataKey(room.id), { todos: next });
      const open = next.filter((t) => !t.done).length;
      const last = next[next.length - 1];
      onMeta({
        preview: last ? `${last.done ? "☑" : "☐"} ${last.text.split("\n")[0]}`.slice(0, 40) : "",
        todoOpen: open,
        lastAt: Date.now()
      });
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね");
    }
  };

  useEffect(() => {
    if (!query && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [todos, loaded, query]);

  const places = room.places || [];
  const placeOf = (id) => places.find((p) => p.id === id);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    // フィルタ中の場所があればそれを優先で付ける（その場所を見ながら追加するケース）
    const placeId = placeFilter || selPlace || null;
    persist([...todos, {
      id: uid(), dateKey: todayKey(), time: nowTime(),
      text, done: false, doneTime: null, doneDateKey: null,
      important: nextImportant, placeId
    }]);
    setDraft("");
    setNextImportant(false); // 重要は引きずらない（場所は保持）
    if (taRef.current) taRef.current.style.height = "auto";
  };

  const toggleImportant = (id) =>
    persist(todos.map((t) => (t.id === id ? { ...t, important: !t.important } : t)));
  const setTodoPlace = (id, placeId) => {
    persist(todos.map((t) => (t.id === id ? { ...t, placeId } : t)));
    setPlacePickFor(null);
  };

  /* ---------- 場所の管理（ルーム単位） ---------- */
  const savePlaces = (next) => onRoomChange({ places: next });
  const addPlace = () => savePlaces([...places, { id: uid(), name: "", emoji: "📍", color: MEMBER_COLORS[places.length % MEMBER_COLORS.length] }]);
  const updatePlace = (id, patch) => savePlaces(places.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  const movePlace = (i, dir) => {
    const j = i + dir; if (j < 0 || j >= places.length) return;
    const next = [...places]; [next[i], next[j]] = [next[j], next[i]]; savePlaces(next);
  };
  const removePlace = (id) => {
    if (placeDel !== id) { setPlaceDel(id); return; }
    savePlaces(places.filter((p) => p.id !== id));
    if (selPlace === id) setSelPlace(null);
    if (placeFilter === id) setPlaceFilter(null);
    setPlaceDel(null);
  };
  const closePlaceModal = () => {
    const cleaned = places.filter((p) => p.name.trim());
    if (cleaned.length !== places.length) savePlaces(cleaned);
    setPlaceModal(false); setPlaceDel(null);
  };

  const complete = (todo) => {
    const doneTime = nowTime();
    const doneDateKey = todayKey();
    persist(todos.map((t) => (t.id === todo.id ? { ...t, done: true, doneTime, doneDateKey } : t)));
    // 完了→日記へ反映（完了した日の日記に）
    onTodoComplete({ text: todo.text, time: doneTime, dateKey: doneDateKey });
    // やることタブでも一瞬リアクションを見せてから消す
    setJustDone((s) => new Set(s).add(todo.id));
    setTimeout(() => {
      setJustDone((s) => {
        const n = new Set(s);
        n.delete(todo.id);
        return n;
      });
    }, 1100);
    // 直後に「もどす」バーを出す（誤操作対策）
    setUndo({ id: todo.id, text: todo.text, doneTime, doneDateKey });
    clearTimeout(undoTimer.current);
    undoTimer.current = setTimeout(() => setUndo(null), 6000);
  };

  const uncomplete = (todo) => {
    persist(todos.map((t) => (t.id === todo.id ? { ...t, done: false, doneTime: null, doneDateKey: null } : t)));
    // 未完了へ戻す→日記側の行も削除
    if (todo.doneDateKey) onTodoUncomplete({ text: todo.text, time: todo.doneTime, dateKey: todo.doneDateKey });
    setJustDone((s) => {
      const n = new Set(s);
      n.delete(todo.id);
      return n;
    });
    if (undo && undo.id === todo.id) { clearTimeout(undoTimer.current); setUndo(null); }
  };

  const toggle = (todo) => (todo.done ? uncomplete(todo) : complete(todo));

  // 見送り: 書いたけどやらなくてよくなったもの（消さずに退避／日記への反映はなし）
  const defer = (todo) =>
    persist(todos.map((t) => (t.id === todo.id ? { ...t, deferred: true, done: false, doneTime: null, doneDateKey: null } : t)));
  const undefer = (todo) =>
    persist(todos.map((t) => (t.id === todo.id ? { ...t, deferred: false } : t)));

  const startEdit = (t) => {
    setEditing(t.id);
    setQuery("");
    setSearchOpen(false);
  };

  const saveEdit = (id, raw) => {
    const text = raw.trim();
    if (!text) { setEditing(null); return; }
    persist(todos.map((t) => (t.id === id ? { ...t, text } : t)));
    setEditing(null);
  };

  const deleteTodo = (id) => {
    persist(todos.filter((t) => t.id !== id));
    setEditing(null);
  };
  const [confirm, setConfirm] = useState(null); // 削除確認ダイアログ
  const askDeleteTodo = (t) => {
    if (!t) return;
    const label = t.text.length > 24 ? t.text.slice(0, 24) + "…" : t.text;
    setConfirm({ message: `「${label}」を削除しますか？`, onConfirm: () => { deleteTodo(t.id); setConfirm(null); } });
  };

  /* クリップボードから一括取り込み（1タップ） */
  const fromClipboard = async () => {
    let text = "";
    try {
      text = await navigator.clipboard.readText();
    } catch (e) {
      showToast("クリップボードを読めませんでした。📥から貼り付けてね");
      setImportOpen(true);
      return;
    }
    const lines = parseTodoLines(text);
    if (lines.length === 0) {
      showToast("箇条書きが見つかりませんでした 🥺");
      return;
    }
    const existing = new Set(todos.filter((t) => !t.done).map((t) => t.text));
    setClip({ items: lines.map((t) => ({ text: t, on: !existing.has(t) })) });
  };

  const addFromClip = () => {
    const picked = clip.items.filter((i) => i.on);
    if (!picked.length) { setClip(null); return; }
    const dk = todayKey();
    const seen = new Set(todos.map((t) => `${t.dateKey} ${t.text}`));
    let added = 0;
    const next = [...todos];
    for (const i of picked) {
      if (seen.has(`${dk} ${i.text}`)) continue;
      seen.add(`${dk} ${i.text}`);
      next.push({ id: uid(), dateKey: dk, time: nowTime(), text: i.text, done: false, doneTime: null, doneDateKey: null });
      added += 1;
    }
    persist(next);
    setClip(null);
    setTab("todo");
    showToast(added ? `${added}件のやることを追加したよ💗` : "すでに入っていました");
  };

  // 表示中リストの並び替えを全体配列へ反映（隠れた項目の位置は保持）
  const onReorderTodos = (newVisible) => {
    const visIds = new Set(newVisible.map((t) => t.id));
    const queue = [...newVisible];
    const next = todos.map((t) => (visIds.has(t.id) ? queue.shift() : t));
    persist(next);
  };

  const autoGrow = (e) => {
    setDraft(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  };

  /* export / import */
  // 未完了のみ・画面の並び順。重要は行頭に★。場所ごとにまとめて出力
  const exportText = () => {
    const open = todos.filter((t) => !t.done && !t.deferred);
    const line = (t) => `${t.important ? "★ " : ""}☐ ${t.text}`;
    const out = [];
    // 定義順の場所ごと → 最後に場所なし
    const groups = [...places.map((p) => ({ head: `📍${p.name}`, items: open.filter((t) => t.placeId === p.id) })),
      { head: "（場所なし）", items: open.filter((t) => !placeOf(t.placeId)) }];
    for (const g of groups) {
      if (!g.items.length) continue;
      if (out.length) out.push("");
      out.push(g.head);
      for (const t of g.items) out.push(line(t));
    }
    return out.join("\n");
  };

  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(exportText());
      setCopied(true);
    } catch (e) {
      try {
        exRef.current.focus();
        exRef.current.select();
        document.execCommand("copy");
        setCopied(true);
      } catch (e2) {
        showToast("コピーできませんでした。全選択して手動でコピーしてね");
      }
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
    } catch (e) {
      showToast("ダウンロードできない環境みたい。コピーを使ってね");
    }
  };

  const doImport = () => {
    const parsed = parseTodoText(importText);
    if (parsed.length === 0) {
      showToast("読み込めるTODOが見つかりませんでした 🥺");
      return;
    }
    const seen = new Set(todos.map((t) => `${t.dateKey} ${t.text}`));
    let added = 0, skipped = 0;
    const next = [...todos];
    for (const p of parsed) {
      const sig = `${p.dateKey} ${p.text}`;
      if (seen.has(sig)) { skipped += 1; continue; }
      seen.add(sig);
      // 復元は日記への副作用なし（doneDateKey=null）
      next.push({
        id: uid(), dateKey: p.dateKey, time: "",
        text: p.text, done: p.done, doneTime: null, doneDateKey: null,
        important: !!p.important
      });
      added += 1;
    }
    persist(next);
    setImportOpen(false);
    setImportText("");
    showToast(`${added}件のTODOを復元したよ💗` + (skipped ? `（${skipped}件は重複スキップ）` : ""));
  };

  const highlight = (text) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
    return parts.map((p, i) =>
      p.toLowerCase() === query.toLowerCase() ? <mark key={i} className="hl">{p}</mark> : p
    );
  };

  const q = query.toLowerCase();
  const matchQ = (t) => !query || t.text.toLowerCase().includes(q);
  // やること: 未完了かつ見送りでない（完了直後は一瞬残す）。重要／場所フィルタは併用可
  const shown = todos.filter((t) =>
    ((!t.done && !t.deferred) || justDone.has(t.id)) && matchQ(t)
    && (!onlyImportant || t.important)
    && (!placeFilter || t.placeId === placeFilter));
  const importantCount = todos.filter((t) => !t.done && !t.deferred && t.important).length;
  const placeCount = (pid) => todos.filter((t) => !t.done && !t.deferred && t.placeId === pid).length;
  // 見送り: 古い順（新しいものが下）
  const deferredList = todos.filter((t) => t.deferred && matchQ(t))
    .sort((a, b) => (a.dateKey + a.time).localeCompare(b.dateKey + b.time));
  const deferredCount = todos.filter((t) => t.deferred).length;
  // 完了: doneDateKey(29時制)でグループ化・古い順（新しい日が下）
  const doneGroups = {};
  for (const t of todos) {
    if (!t.done || !matchQ(t)) continue;
    const dk = t.doneDateKey || t.dateKey;
    (doneGroups[dk] ||= []).push(t);
  }
  const doneDates = Object.keys(doneGroups).sort();
  for (const dk of doneDates) doneGroups[dk].sort((a, b) => (a.doneTime || "").localeCompare(b.doneTime || ""));

  const openCount = todos.filter((t) => !t.done && !t.deferred).length;

  // 見送りが空になったら「見送り」タブから抜ける
  useEffect(() => {
    if (tab === "defer" && !todos.some((t) => t.deferred)) setTab("todo");
  }, [todos, tab]);

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{room.name}</div>
          <div className="hd-sub">Nachumin Lifelog</div>
        </div>
        <button className="icon-btn" style={{ marginLeft: "auto" }} aria-label="場所タグ" onClick={() => setPlaceModal(true)}>📍</button>
        <button className="icon-btn" aria-label="クリップボードから追加" onClick={fromClipboard}>📋</button>
        <button className="icon-btn" aria-label="テキスト書き出し" onClick={() => setExportOpen(true)}>📤</button>
        <button className="icon-btn" aria-label="テキストから復元" onClick={() => setImportOpen(true)}>📥</button>
        <button className="icon-btn" aria-label="検索" onClick={() => { setSearchOpen(!searchOpen); setQuery(""); }}>{searchOpen ? "✕" : "🔍"}</button>
      </div>

      {pinned}

      <div className="tabs">
        {tab === "todo" && importantCount > 0 && (
          <button
            className={"tab tab-imp" + (onlyImportant ? " on" : "")}
            onClick={() => setOnlyImportant((v) => !v)}
          >❣️重要 {importantCount}</button>
        )}
        <button className={"tab" + (tab === "todo" ? " on" : "")} onClick={() => { setTab("todo"); }}>
          やること{openCount ? ` ${openCount}` : ""}
        </button>
        <button className={"tab" + (tab === "done" ? " on" : "")} onClick={() => setTab("done")}>完了</button>
        {deferredCount > 0 && (
          <button className={"tab" + (tab === "defer" ? " on" : "")} onClick={() => setTab("defer")}>見送り {deferredCount}</button>
        )}
      </div>

      {tab === "todo" && places.length > 0 && (
        <div className="place-filter">
          <button
            className={"pf-chip" + (!placeFilter ? " on" : "")}
            onClick={() => setPlaceFilter(null)}
          >すべて</button>
          {places.map((p) => {
            const n = placeCount(p.id);
            const on = placeFilter === p.id;
            return (
              <button
                key={p.id}
                className={"pf-chip" + (on ? " on" : "")}
                style={on ? { background: p.color, color: textOn(p.color), borderColor: p.color } : { borderColor: p.color }}
                onClick={() => setPlaceFilter(on ? null : p.id)}
              >
                {p.emoji ? p.emoji + " " : ""}{p.name}{n ? ` ${n}` : ""}
              </button>
            );
          })}
        </div>
      )}

      {searchOpen && (
        <div className="search-row">
          <input
            autoFocus
            placeholder="TODOを検索"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      )}

      <div className="chat" ref={scrollRef}>
        {tab === "todo" ? (
          <>
            {loaded && shown.length === 0 && (
              <div className="empty">
                {query ? "みつかりませんでした 🥺" : "やることは空っぽ！\n下から追加してね💗"}
              </div>
            )}
            <DragList
              items={shown}
              keyOf={(t) => t.id}
              onReorder={onReorderTodos}
              onLongPress={({ item, x, y }) => setMenu({ id: item.id, x, y })}
              longPress={500}
              disabled={!!editing || !!query}
              renderItem={(t) => {
                const imp = t.important && !t.done;
                const pl = placeOf(t.placeId);
                return (
                  <div className="todo-row">
                    <button
                      className="todo-check"
                      aria-label="完了にする"
                      onClick={() => toggle(t)}
                    />
                    <div
                      className={"todo-bubble" + (imp ? " important" : "") + (editing === t.id ? " editing-now" : "")}
                      onClick={editing === t.id ? undefined : () => startEdit(t)}
                      role="button" tabIndex={0}
                      onKeyDown={(e) => editing !== t.id && e.key === "Enter" && startEdit(t)}
                    >
                      {editing === t.id ? (
                        <InlineEdit
                          initial={t.text}
                          onSave={(text) => saveEdit(t.id, text)}
                          onCancel={() => setEditing(null)}
                          onDelete={() => askDeleteTodo(t)}
                          placeholder="TODOを書きなおしてね"
                        />
                      ) : (
                        <>
                          {imp && <span className="todo-star">❣️</span>}
                          <span className={"todo-text" + (t.done ? " done" : "")}>{highlight(t.text)}</span>
                          {pl && !imp && (
                            <span
                              className="todo-place"
                              style={{ background: pl.color, color: textOn(pl.color) }}
                              onClick={(e) => { e.stopPropagation(); setPlacePickFor(t.id); }}
                            >{pl.emoji ? pl.emoji + " " : ""}{pl.name}</span>
                          )}
                          {pl && imp && (
                            <span
                              className="todo-place on-imp"
                              onClick={(e) => { e.stopPropagation(); setPlacePickFor(t.id); }}
                            >{pl.emoji ? pl.emoji + " " : ""}{pl.name}</span>
                          )}
                          {t.done && <span className="todo-react">🩷</span>}
                        </>
                      )}
                    </div>
                    <div className="todo-time">{t.time}</div>
                  </div>
                );
              }}
            />
          </>
        ) : tab === "done" ? (
          <>
            {loaded && doneDates.length === 0 && (
              <div className="empty">
                {query ? "みつかりませんでした 🥺" : "完了したことはまだないよ💗\nチェックすると here に残るよ"}
              </div>
            )}
            {doneDates.map((dk) => {
              const d = keyToDate(dk);
              return (
                <Fragment key={dk}>
                  <div className="date-pill">
                    <span>🩷{keyToDisp(dk)}🩷 {WEEKDAYS[d.getDay()]}</span>
                  </div>
                  {doneGroups[dk].map((t) => (
                    <div className="todo-row" key={t.id}>
                      <button
                        className="todo-check on"
                        aria-label="未完了にする"
                        onClick={() => toggle(t)}
                      />
                      <Pressable
                        className={"todo-bubble" + (editing === t.id ? " editing-now" : "")}
                        onClick={editing === t.id ? undefined : () => startEdit(t)}
                        onLongPress={editing === t.id ? undefined : (p) => setMenu({ id: t.id, x: p.x, y: p.y })}
                        role="button" tabIndex={0}
                        onKeyDown={(e) => editing !== t.id && e.key === "Enter" && startEdit(t)}
                      >
                        {editing === t.id ? (
                          <InlineEdit
                            initial={t.text}
                            onSave={(text) => saveEdit(t.id, text)}
                            onCancel={() => setEditing(null)}
                            onDelete={() => askDeleteTodo(t)}
                            placeholder="TODOを書きなおしてね"
                          />
                        ) : (
                          <span className="todo-text done">{highlight(t.text)}</span>
                        )}
                      </Pressable>
                      <div className="todo-time">{t.doneTime || ""} 完了</div>
                    </div>
                  ))}
                </Fragment>
              );
            })}
          </>
        ) : (
          <>
            {loaded && deferredList.length === 0 && (
              <div className="empty">
                {query ? "みつかりませんでした 🥺" : "見送りにしたものはないよ💗"}
              </div>
            )}
            {deferredList.map((t) => (
              <div className="todo-row" key={t.id}>
                <button
                  className="todo-undefer"
                  aria-label="やることに戻す"
                  onClick={() => undefer(t)}
                >↩︎</button>
                <Pressable
                  className={"todo-bubble deferred" + (editing === t.id ? " editing-now" : "")}
                  onClick={editing === t.id ? undefined : () => startEdit(t)}
                  onLongPress={editing === t.id ? undefined : (p) => setMenu({ id: t.id, x: p.x, y: p.y })}
                  role="button" tabIndex={0}
                  onKeyDown={(e) => editing !== t.id && e.key === "Enter" && startEdit(t)}
                >
                  {editing === t.id ? (
                    <InlineEdit
                      initial={t.text}
                      onSave={(text) => saveEdit(t.id, text)}
                      onCancel={() => setEditing(null)}
                      onDelete={() => askDeleteTodo(t)}
                      placeholder="TODOを書きなおしてね"
                    />
                  ) : (
                    <span className="todo-text deferred-text">{highlight(t.text)}</span>
                  )}
                </Pressable>
                <div className="todo-time">見送り</div>
              </div>
            ))}
          </>
        )}
      </div>

      {undo && (
        <div className="undo-bar">
          <span className="undo-msg">🩷 完了にしたよ</span>
          <button className="undo-btn" onClick={() => uncomplete(undo)}>↩︎ やることに戻す</button>
        </div>
      )}

      {tab === "todo" && (
        <div className="bar">
          {places.length > 0 && (
            <div className="place-select">
              {places.map((p) => {
                const on = (placeFilter || selPlace) === p.id;
                return (
                  <button
                    key={p.id}
                    className={"ps-chip" + (on ? " on" : "")}
                    style={on ? { background: p.color, color: textOn(p.color), borderColor: p.color } : { borderColor: p.color }}
                    onClick={() => setSelPlace(selPlace === p.id ? null : p.id)}
                    disabled={!!placeFilter}
                  >{p.emoji ? p.emoji + " " : ""}{p.name}</button>
                );
              })}
              <button className="ps-chip ps-edit" onClick={() => setPlaceModal(true)} aria-label="場所を編集">＋</button>
            </div>
          )}
          <div className="in-row">
            <textarea
              ref={taRef} className={"ta" + (nextImportant ? " ta-important" : "")} rows={1}
              placeholder={nextImportant ? "❣️重要なやることを追加…" : "やることを追加…"}
              value={draft} onChange={autoGrow}
            />
            <button
              className={"imp-toggle" + (nextImportant ? " on" : "")}
              aria-label={nextImportant ? "重要を外す" : "重要にする"}
              aria-pressed={nextImportant}
              onClick={() => setNextImportant((v) => !v)}
            >❣️</button>
            <button className="send" aria-label="追加" disabled={!draft.trim()} onClick={send}>↑</button>
          </div>
        </div>
      )}

      {/* クリップボード取り込みの確認 */}
      {clip && (
        <div className="overlay" onClick={() => setClip(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📋 これを追加する？</h3>
            <p className="panel-note">いらない行はタップで外せます</p>
            <div className="clip-list">
              {clip.items.map((it, i) => (
                <button
                  key={i}
                  className={"clip-item" + (it.on ? " on" : "")}
                  onClick={() => setClip((o) => ({
                    items: o.items.map((x, j) => (j === i ? { ...x, on: !x.on } : x))
                  }))}
                >
                  <span className="clip-check">{it.on ? "✓" : ""}</span>
                  <span className="clip-text">{it.text}</span>
                </button>
              ))}
            </div>
            <div className="panel-btns">
              <button
                className="p-copy"
                disabled={!clip.items.some((i) => i.on)}
                onClick={addFromClip}
              >{clip.items.filter((i) => i.on).length}件を追加</button>
              <button className="p-close" onClick={() => setClip(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* 長押しメニュー */}
      {menu && (() => {
        const t = todos.find((x) => x.id === menu.id);
        return (
          <ContextMenu
            x={menu.x} y={menu.y}
            onClose={() => setMenu(null)}
            onCopy={async () => {
              const ok = await copyText(t ? `🩷${keyToDisp(t.doneDateKey || t.dateKey)}🩷\n${t.text}` : "");
              showToast(ok ? "コピーしました🩷" : "コピーできませんでした。手動でコピーしてね");
              setMenu(null);
            }}
            onEdit={() => { setMenu(null); if (t) startEdit(t); }}
            top={!t ? [] : (
              t.done ? [{
                label: "↩︎ やることに戻す",
                onClick: () => { setMenu(null); uncomplete(t); }
              }] : t.deferred ? [{
                label: "↩︎ やることに戻す",
                onClick: () => { setMenu(null); undefer(t); }
              }] : [{
                label: t.important ? "❣️重要を外す" : "❣️重要にする",
                onClick: () => { setMenu(null); toggleImportant(menu.id); }
              }, {
                label: "⤵︎ 見送りにする",
                onClick: () => { setMenu(null); defer(t); }
              }]
            )}
            extra={t && places.length > 0 ? [{
              label: "📍 場所を選ぶ",
              onClick: () => { setMenu(null); setPlacePickFor(menu.id); }
            }] : []}
            onDelete={() => { setMenu(null); askDeleteTodo(t); }}
          />
        );
      })()}

      {confirm && (
        <ConfirmDialog message={confirm.message} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />
      )}

      {/* 場所の管理 */}
      {placeModal && (
        <div className="overlay" onClick={closePlaceModal}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📍 場所タグ</h3>
            <p className="panel-note">よく行く場所を登録。入力欄や絞り込みで使えます。</p>
            {places.map((p, i) => (
              <div className="mem-row" key={p.id} style={{ flexWrap: "wrap" }}>
                <input className="f-input" style={{ width: 54, textAlign: "center", flex: "0 0 auto" }} maxLength={4}
                  placeholder="📍" value={p.emoji || ""} onChange={(e) => updatePlace(p.id, { emoji: e.target.value })} />
                <input className="f-input" style={{ flex: 1, minWidth: 0 }} placeholder="場所の名前（例: 100均）"
                  value={p.name} onChange={(e) => updatePlace(p.id, { name: e.target.value })} />
                <button className="mem-btn" disabled={i === 0} onClick={() => movePlace(i, -1)} aria-label="上へ">↑</button>
                <button className="mem-btn" disabled={i === places.length - 1} onClick={() => movePlace(i, 1)} aria-label="下へ">↓</button>
                <button className="mem-btn" style={placeDel === p.id ? { background: "#e23d7c", color: "#fff" } : undefined}
                  onClick={() => removePlace(p.id)} aria-label="削除">{placeDel === p.id ? "!" : "🗑"}</button>
                <div className="swatches" style={{ flexBasis: "100%", marginTop: 4 }}>
                  {MEMBER_COLORS.map((col) => (
                    <button key={col} className={"swatch" + (p.color === col ? " on" : "")}
                      style={{ background: col }} onClick={() => updatePlace(p.id, { color: col })} aria-label={col} />
                  ))}
                </div>
              </div>
            ))}
            {places.length === 0 && <p className="panel-note">場所を追加してね💗</p>}
            <div className="panel-btns">
              <button className="p-copy" onClick={addPlace}>＋ 場所を追加</button>
              <button className="p-close" onClick={closePlaceModal}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* このTODOの場所を選ぶ */}
      {placePickFor && (
        <div className="overlay" onClick={() => setPlacePickFor(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📍 場所を選ぶ</h3>
            <div className="place-select">
              <button className="ps-chip" onClick={() => setTodoPlace(placePickFor, null)}>なし</button>
              {places.map((p) => (
                <button
                  key={p.id}
                  className="ps-chip"
                  style={{ background: p.color, color: textOn(p.color), borderColor: p.color }}
                  onClick={() => setTodoPlace(placePickFor, p.id)}
                >{p.emoji ? p.emoji + " " : ""}{p.name}</button>
              ))}
            </div>
            <div className="panel-btns">
              <button className="p-close" onClick={() => setPlacePickFor(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {exportOpen && (
        <div className="overlay" onClick={() => setExportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📤 TODOをテキストで書き出し</h3>
            <textarea ref={exRef} readOnly value={exportText()} />
            <div className="panel-btns">
              <button className="p-copy" onClick={doCopy}>{copied ? "コピーしたよ💗" : "ぜんぶコピー"}</button>
              <button className="p-dl" onClick={doDownload}>.txtでDL</button>
              <button className="p-close" onClick={() => setExportOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {importOpen && (
        <div className="overlay" onClick={() => setImportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📥 テキストから復元</h3>
            <textarea
              placeholder={"エクスポートした .txt を貼り付けてね\n\n🩷2026/07/17🩷\n☑ 牛乳を買う\n☐ 原稿を書く"}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
            />
            <p className="panel-note">※ 同じ日付・同じ内容は重複スキップ。復元では日記への反映は行いません</p>
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
