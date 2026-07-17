import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey } from "./storage.js";
import {
  keyToDisp, todayKey, nowTime, escapeRegExp, uid,
  todoToText, parseTodoText
} from "./format.js";

/* TODO型ルーム: 1メッセージ=1TODO。チェックで完了→日記へライフログ */
export default function TodoRoom({
  room, onBack, onMeta, initialQuery, showToast, pinned,
  onTodoComplete, onTodoUncomplete
}) {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("todo"); // 'todo'=やること(未完了) | 'all'=ぜんぶ
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
    if (editing) {
      persist(todos.map((t) => (t.id === editing ? { ...t, text } : t)));
      setEditing(null);
      setConfirmDel(false);
    } else {
      persist([...todos, {
        id: uid(), dateKey: todayKey(), time: nowTime(),
        text, done: false, doneTime: null, doneDateKey: null
      }]);
    }
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
    setConfirmDel(false);
    setDraft(t.text);
    setQuery("");
    setSearchOpen(false);
    setTimeout(() => taRef.current && taRef.current.focus(), 50);
  };

  const cancelEdit = () => {
    setEditing(null);
    setConfirmDel(false);
    setDraft("");
    if (taRef.current) taRef.current.style.height = "auto";
  };

  const deleteTodo = () => {
    if (!confirmDel) {
      setConfirmDel(true);
      return;
    }
    persist(todos.filter((t) => t.id !== editing));
    cancelEdit();
  };

  const autoGrow = (e) => {
    setDraft(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  };

  /* export / import */
  const exportText = () => todoToText(todos);

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
      a.download = `nachumin-diary-${room.name}-${todayKey()}.txt`;
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

  let shown = tab === "todo" ? todos.filter((t) => !t.done || justDone.has(t.id)) : todos;
  if (query) {
    const q = query.toLowerCase();
    shown = shown.filter((t) => t.text.toLowerCase().includes(q));
  }

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
        <button className={"tab" + (tab === "all" ? " on" : "")} onClick={() => setTab("all")}>ぜんぶ</button>
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
        {loaded && shown.length === 0 && (
          <div className="empty">
            {query
              ? "みつかりませんでした 🥺"
              : tab === "todo"
                ? "やることは空っぽ！\n下から追加してね💗"
                : "まだTODOがありません。\n下から追加してみよう💗"}
          </div>
        )}
        {shown.map((t) => (
          <div className="todo-row" key={t.id}>
            <button
              className={"todo-check" + (t.done ? " on" : "")}
              aria-label={t.done ? "未完了にする" : "完了にする"}
              onClick={() => toggle(t)}
            />
            <div
              className={"todo-bubble" + (editing === t.id ? " editing-now" : "")}
              onClick={() => startEdit(t)}
              role="button" tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && startEdit(t)}
            >
              <span className={"todo-text" + (t.done ? " done" : "")}>{highlight(t.text)}</span>
              {t.done && <span className="todo-react">🩷</span>}
            </div>
            <div className="todo-time">{t.time}</div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="banner">
          ✏️ TODOを編集中
          <button className="b-cancel" onClick={cancelEdit}>キャンセル</button>
          <button className={"b-del" + (confirmDel ? " arm" : "")} onClick={deleteTodo}>
            {confirmDel ? "ほんとに削除する" : "削除"}
          </button>
        </div>
      )}

      <div className="bar">
        <div className="in-row">
          <textarea
            ref={taRef} className="ta" rows={1}
            placeholder={editing ? "TODOを書きなおしてね" : "やることを追加…"}
            value={draft} onChange={autoGrow}
          />
          <button className="send" aria-label={editing ? "保存" : "追加"} disabled={!draft.trim()} onClick={send}>
            {editing ? "✓" : "↑"}
          </button>
        </div>
      </div>

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
