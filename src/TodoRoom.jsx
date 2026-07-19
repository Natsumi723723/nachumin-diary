import { useState, useEffect, useRef, Fragment } from "react";
import { get, set, roomDataKey } from "./storage.js";
import {
  keyToDisp, keyToDate, WEEKDAYS, todayKey, nowTime, escapeRegExp, uid,
  parseTodoText, safeFileName, copyText
} from "./format.js";
import InlineEdit from "./InlineEdit.jsx";
import DragList from "./DragList.jsx";
import Pressable from "./Pressable.jsx";
import ContextMenu from "./ContextMenu.jsx";

/* TODO型ルーム: 1メッセージ=1TODO。チェックで完了→日記へライフログ */
export default function TodoRoom({
  room, onBack, onMeta, initialQuery, showToast, pinned,
  onTodoComplete, onTodoUncomplete
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
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [copied, setCopied] = useState(false);
  const [menu, setMenu] = useState(null); // 長押しメニュー {id,x,y}
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

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    persist([...todos, {
      id: uid(), dateKey: todayKey(), time: nowTime(),
      text, done: false, doneTime: null, doneDateKey: null
    }]);
    setDraft("");
    if (taRef.current) taRef.current.style.height = "auto";
  };

  const toggle = (todo) => {
    if (!todo.done) {
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
    } else {
      persist(todos.map((t) => (t.id === todo.id ? { ...t, done: false, doneTime: null, doneDateKey: null } : t)));
      // 未完了へ戻す→日記側の行も削除
      if (todo.doneDateKey) onTodoUncomplete({ text: todo.text, time: todo.doneTime, dateKey: todo.doneDateKey });
      setJustDone((s) => {
        const n = new Set(s);
        n.delete(todo.id);
        return n;
      });
    }
  };

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
  // 未完了のみ・画面の並び順（ドラッグ順＝配列順）で出力
  const exportText = () => todos.filter((t) => !t.done).map((t) => `☐ ${t.text}`).join("\n");

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
        text: p.text, done: p.done, doneTime: null, doneDateKey: null
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
  // やること: 未完了（完了直後は一瞬残す）
  const shown = todos.filter((t) => (!t.done || justDone.has(t.id)) && matchQ(t));
  // 完了: doneDateKey(29時制)でグループ化・古い順（新しい日が下）
  const doneGroups = {};
  for (const t of todos) {
    if (!t.done || !matchQ(t)) continue;
    const dk = t.doneDateKey || t.dateKey;
    (doneGroups[dk] ||= []).push(t);
  }
  const doneDates = Object.keys(doneGroups).sort();
  for (const dk of doneDates) doneGroups[dk].sort((a, b) => (a.doneTime || "").localeCompare(b.doneTime || ""));

  const openCount = todos.filter((t) => !t.done).length;

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{room.name}</div>
          <div className="hd-sub">Nachumin Diary</div>
        </div>
        <button className="icon-btn" style={{ marginLeft: "auto" }} aria-label="テキスト書き出し" onClick={() => setExportOpen(true)}>📤</button>
        <button className="icon-btn" aria-label="テキストから復元" onClick={() => setImportOpen(true)}>📥</button>
        <button className="icon-btn" aria-label="検索" onClick={() => { setSearchOpen(!searchOpen); setQuery(""); }}>{searchOpen ? "✕" : "🔍"}</button>
      </div>

      {pinned}

      <div className="tabs">
        <button className={"tab" + (tab === "todo" ? " on" : "")} onClick={() => setTab("todo")}>
          やること{openCount ? ` ${openCount}` : ""}
        </button>
        <button className={"tab" + (tab === "done" ? " on" : "")} onClick={() => setTab("done")}>完了</button>
      </div>

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
              renderItem={(t) => (
                <div className="todo-row">
                  <button
                    className="todo-check"
                    aria-label="完了にする"
                    onClick={() => toggle(t)}
                  />
                  <div
                    className={"todo-bubble" + (editing === t.id ? " editing-now" : "")}
                    onClick={editing === t.id ? undefined : () => startEdit(t)}
                    role="button" tabIndex={0}
                    onKeyDown={(e) => editing !== t.id && e.key === "Enter" && startEdit(t)}
                  >
                    {editing === t.id ? (
                      <InlineEdit
                        initial={t.text}
                        onSave={(text) => saveEdit(t.id, text)}
                        onCancel={() => setEditing(null)}
                        onDelete={() => deleteTodo(t.id)}
                        placeholder="TODOを書きなおしてね"
                      />
                    ) : (
                      <>
                        <span className={"todo-text" + (t.done ? " done" : "")}>{highlight(t.text)}</span>
                        {t.done && <span className="todo-react">🩷</span>}
                      </>
                    )}
                  </div>
                  <div className="todo-time">{t.time}</div>
                </div>
              )}
            />
          </>
        ) : (
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
                            onDelete={() => deleteTodo(t.id)}
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
        )}
      </div>

      {tab === "todo" && (
        <div className="bar">
          <div className="in-row">
            <textarea
              ref={taRef} className="ta" rows={1}
              placeholder="やることを追加…"
              value={draft} onChange={autoGrow}
            />
            <button className="send" aria-label="追加" disabled={!draft.trim()} onClick={send}>↑</button>
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
              const ok = await copyText(t ? t.text : "");
              showToast(ok ? "コピーしました🩷" : "コピーできませんでした。手動でコピーしてね");
              setMenu(null);
            }}
            onEdit={() => { setMenu(null); if (t) startEdit(t); }}
            onDelete={() => { setMenu(null); deleteTodo(menu.id); }}
          />
        );
      })()}

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
