import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey } from "./storage.js";
import {
  keyToDisp, todayKey, yesterdayKey, nowTime, escapeRegExp,
  diaryToText, parseDiaryText
} from "./format.js";

/* 日記型ルーム: 1日=1吹き出し（現行仕様そのまま） */
export default function DiaryRoom({ room, onBack, onMeta, initialQuery, showToast }) {
  const [entries, setEntries] = useState({}); // { "2026-07-16": {text, time} }
  const [loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState(todayKey());
  const [draft, setDraft] = useState("");
  const [editing, setEditing] = useState(null);
  const [confirmDel, setConfirmDel] = useState(false);
  const [searchOpen, setSearchOpen] = useState(!!initialQuery);
  const [query, setQuery] = useState(initialQuery || "");
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef(null);
  const taRef = useRef(null);
  const exRef = useRef(null);

  /* load */
  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v) setEntries(typeof v === "string" ? JSON.parse(v) : v);
      } catch (e) {
        /* no data yet */
      } finally {
        setLoaded(true);
      }
    })();
  }, [room.id]);

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
    if (!query && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries, loaded, query]);

  const exportText = () => diaryToText(entries);

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
    const parsed = parseDiaryText(importText);
    const keys = Object.keys(parsed);
    if (keys.length === 0) {
      showToast("読み込める日記が見つかりませんでした 🥺");
      return;
    }
    let added = 0, skipped = 0;
    const next = { ...entries };
    for (const k of keys) {
      if (next[k]) skipped += 1; // 既存の日記は上書きしない（データ保護）
      else { next[k] = parsed[k]; added += 1; }
    }
    persist(next);
    setImportOpen(false);
    setImportText("");
    showToast(
      `${added}件の日記を復元したよ💗` +
        (skipped ? `（${skipped}件はもうあるのでスキップ）` : "")
    );
  };

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    if (editing) {
      persist({ ...entries, [editing]: { ...entries[editing], text } });
      setEditing(null);
      setConfirmDel(false);
    } else {
      const prev = entries[selected];
      persist({
        ...entries,
        [selected]: prev
          ? { ...prev, text: prev.text + "\n\n" + text } // 追記は同じ吹き出しへ
          : { text, time: nowTime() }
      });
    }
    setDraft("");
    if (taRef.current) taRef.current.style.height = "auto";
  };

  const startEdit = (k) => {
    setEditing(k);
    setConfirmDel(false);
    setDraft(entries[k].text);
    setQuery("");
    setSearchOpen(false);
    setTimeout(() => taRef.current && taRef.current.focus(), 50);
  };

  const cancelEdit = () => {
    setEditing(null);
    setConfirmDel(false);
    setDraft("");
  };

  const deleteEntry = () => {
    if (!confirmDel) {
      setConfirmDel(true);
      return;
    }
    const next = { ...entries };
    delete next[editing];
    persist(next);
    cancelEdit();
  };

  const autoGrow = (e) => {
    setDraft(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  };

  const keys = Object.keys(entries).sort();
  const shown = query
    ? keys.filter((k) =>
        (entries[k].text + keyToDisp(k)).toLowerCase().includes(query.toLowerCase())
      )
    : keys;

  const highlight = (text) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
    return parts.map((p, i) =>
      p.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="hl">{p}</mark>
      ) : (
        p
      )
    );
  };

  const chip = (label, key) => (
    <button
      key={label}
      className={"chip" + (selected === key ? " chip-on" : "")}
      onClick={() => setSelected(key)}
      disabled={!!editing}
    >
      {label}
    </button>
  );

  const selDisp = keyToDisp(selected).slice(5);

  return (
    <>
      {/* header */}
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div>
          <div className="hd-title">{room.name}</div>
          <div className="hd-sub">Nachumin Diary</div>
        </div>
        <button
          className="icon-btn" style={{ marginLeft: "auto" }}
          aria-label="テキスト書き出し" onClick={() => setExportOpen(true)}
        >📤</button>
        <button className="icon-btn" aria-label="テキストから復元" onClick={() => setImportOpen(true)}>📥</button>
        <button
          className="icon-btn" aria-label="検索"
          onClick={() => { setSearchOpen(!searchOpen); setQuery(""); }}
        >{searchOpen ? "✕" : "🔍"}</button>
      </div>

      {searchOpen && (
        <div className="search-row">
          <input
            autoFocus
            placeholder="日記を検索（ことば・日付）"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      )}

      {/* chat */}
      <div className="chat" ref={scrollRef}>
        {loaded && shown.length === 0 && (
          <div className="empty">
            {query
              ? "みつかりませんでした 🥺"
              : "まだ日記がありません。\n下から今日のことを送ってみよう💗"}
          </div>
        )}
        {shown.map((k) => (
          <div className="row" key={k}>
            <div className="time">{entries[k].time}</div>
            <div
              className={"bubble" + (editing === k ? " editing-now" : "")}
              onClick={() => startEdit(k)}
              role="button" tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && startEdit(k)}
            >
              <span className="spark">✨</span>
              <div className="d-head">
                🩷<span className="lnk">{keyToDisp(k)}</span>🩷
              </div>
              <div className="body">{highlight(entries[k].text)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* edit banner */}
      {editing && (
        <div className="banner">
          ✏️ <b>{keyToDisp(editing)}</b> の日記を編集中
          <button className="b-cancel" onClick={cancelEdit}>キャンセル</button>
          <button className={"b-del" + (confirmDel ? " arm" : "")} onClick={deleteEntry}>
            {confirmDel ? "ほんとに削除する" : "削除"}
          </button>
        </div>
      )}

      {/* input bar */}
      <div className="bar">
        {!editing && (
          <div className="chips">
            {chip("今日", todayKey())}
            {chip("昨日", yesterdayKey())}
            <button className="chip chip-date">
              📅 {selected === todayKey() || selected === yesterdayKey()
                ? "日付をえらぶ" : selDisp}
              <input
                type="date" value={selected}
                onChange={(e) => e.target.value && setSelected(e.target.value)}
              />
            </button>
            {entries[selected] && (
              <span className="exists-note">この日はもうあるので追記されます</span>
            )}
          </div>
        )}
        <div className="in-row">
          <textarea
            ref={taRef} className="ta" rows={1}
            placeholder={editing ? "内容を書きなおしてね" : "今日あったことを書く…"}
            value={draft} onChange={autoGrow}
          />
          <button
            className="send" aria-label={editing ? "保存" : "送信"}
            disabled={!draft.trim()} onClick={send}
          >{editing ? "✓" : "↑"}</button>
        </div>
      </div>

      {/* export modal */}
      {exportOpen && (
        <div className="overlay" onClick={() => setExportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📤 日記をテキストで書き出し</h3>
            <textarea ref={exRef} readOnly value={exportText()} />
            <div className="panel-btns">
              <button className="p-copy" onClick={doCopy}>
                {copied ? "コピーしたよ💗" : "ぜんぶコピー"}
              </button>
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
