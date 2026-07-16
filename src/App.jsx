import { useState, useEffect, useRef } from "react";
import { STORAGE_KEY, get as dbGet, set as dbSet } from "./storage.js";

/* ---------- date helpers ---------- */
const pad = (n) => String(n).padStart(2, "0");
const toKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const keyToDisp = (k) => k.split("-").join("/");
const todayKey = () => toKey(new Date());
const yesterdayKey = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return toKey(d);
};
const nowTime = () => {
  const d = new Date();
  return `${d.getHours()}:${pad(d.getMinutes())}`;
};
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* ---------- export / import text format ---------- */
const SEPARATOR = "\n\n──────────\n\n";

const entriesToText = (entries) =>
  Object.keys(entries)
    .sort()
    .map((k) => `🩷${keyToDisp(k)}🩷 ${entries[k].time}\n${entries[k].text}`)
    .join(SEPARATOR);

// エクスポート形式のテキストを { "YYYY-MM-DD": {text, time} } に戻す
const parseImportText = (raw) => {
  const out = {};
  const blocks = raw.split(/\n*─{3,}\n*/);
  for (const block of blocks) {
    const b = block.trim();
    if (!b) continue;
    const m = b.match(
      /^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u
    );
    if (!m) continue;
    const key = `${m[1]}-${pad(Number(m[2]))}-${pad(Number(m[3]))}`;
    const text = m[5].trim();
    if (!text) continue;
    out[key] = { text, time: m[4] || "0:00" };
  }
  return out;
};

/* ---------- background pattern (original hearts + spots) ---------- */
const heart =
  "M12 20.5s-7.5-5-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5-7.5 10-7.5 10z";
const bgSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
<rect width='240' height='240' fill='#f6bedd'/>
<g fill='#f0a3cd'>
<ellipse cx='30' cy='40' rx='26' ry='16' transform='rotate(-18 30 40)'/>
<ellipse cx='160' cy='20' rx='30' ry='17' transform='rotate(12 160 20)'/>
<ellipse cx='210' cy='120' rx='24' ry='15' transform='rotate(-25 210 120)'/>
<ellipse cx='70' cy='170' rx='28' ry='16' transform='rotate(20 70 170)'/>
<ellipse cx='180' cy='210' rx='26' ry='15' transform='rotate(-10 180 210)'/>
</g>
<g fill='none' stroke='#e989bf' stroke-width='4' stroke-linecap='round'>
<path d='M14 36 a18 11 -18 0 1 32 -6'/>
<path d='M148 14 a20 12 12 0 1 34 8'/>
<path d='M60 162 a19 11 20 0 1 33 5'/>
</g>
<g fill='#fde6f3'>
<path d='${heart}' transform='translate(96 60) scale(1.6)'/>
<path d='${heart}' transform='translate(24 96) scale(0.9) rotate(-12 12 12)'/>
<path d='${heart}' transform='translate(190 60) scale(0.8) rotate(14 12 12)'/>
<path d='${heart}' transform='translate(130 150) scale(1.1) rotate(-8 12 12)'/>
<path d='${heart}' transform='translate(30 208) scale(0.8) rotate(10 12 12)'/>
</g>
<g fill='#f8b1d6'>
<path d='${heart}' transform='translate(100 64) scale(1.1) '/>
<path d='${heart}' transform='translate(133 153) scale(0.7)'/>
</g>
</svg>`;
const bgUrl = `url("data:image/svg+xml,${encodeURIComponent(bgSvg)}")`;

/* ---------- component ---------- */
export default function PinkDiary() {
  const [entries, setEntries] = useState({}); // { "2026-07-16": {text, time} }
  const [loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState(todayKey());
  const [draft, setDraft] = useState("");
  const [editing, setEditing] = useState(null); // dateKey being edited
  const [confirmDel, setConfirmDel] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef(null);
  const taRef = useRef(null);
  const exRef = useRef(null);
  const toastTimer = useRef(null);

  const showToast = (msg, ms = 3000) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), ms);
  };

  const exportText = () => entriesToText(entries);

  const doCopy = async () => {
    const t = exportText();
    try {
      await navigator.clipboard.writeText(t);
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
      const blob = new Blob([exportText()], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `nachumin-diary-${todayKey()}.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 3000);
    } catch (e) {
      showToast("ダウンロードできない環境みたい。コピーを使ってね");
    }
  };

  const doImport = () => {
    const parsed = parseImportText(importText);
    const keys = Object.keys(parsed);
    if (keys.length === 0) {
      showToast("読み込める日記が見つかりませんでした 🥺");
      return;
    }
    let added = 0;
    let skipped = 0;
    const next = { ...entries };
    for (const k of keys) {
      if (next[k]) {
        skipped += 1; // 既存の日記は上書きしない（データ保護）
      } else {
        next[k] = parsed[k];
        added += 1;
      }
    }
    persist(next);
    setImportOpen(false);
    setImportText("");
    showToast(
      `${added}件の日記を復元したよ💗` +
        (skipped ? `（${skipped}件はもうあるのでスキップ）` : "")
    );
  };

  /* load from IndexedDB */
  useEffect(() => {
    (async () => {
      try {
        const v = await dbGet(STORAGE_KEY);
        if (v) {
          // 旧形式（JSON文字列）にも対応
          setEntries(typeof v === "string" ? JSON.parse(v) : v);
        }
      } catch (e) {
        /* first launch: no data yet */
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  const persist = async (next) => {
    setEntries(next);
    try {
      await dbSet(STORAGE_KEY, next);
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね", 2500);
    }
  };

  /* scroll to bottom when entries change (not while searching) */
  useEffect(() => {
    if (!query && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries, loaded, query]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    if (editing) {
      const next = { ...entries, [editing]: { ...entries[editing], text } };
      persist(next);
      setEditing(null);
      setConfirmDel(false);
    } else {
      const k = selected;
      const prev = entries[k];
      const next = {
        ...entries,
        [k]: prev
          ? { ...prev, text: prev.text + "\n\n" + text } // 追記は同じ吹き出しへ
          : { text, time: nowTime() },
      };
      persist(next);
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

  const onDateInput = (e) => {
    if (e.target.value) setSelected(e.target.value);
  };

  const autoGrow = (e) => {
    setDraft(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  };

  /* render helpers */
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
        <mark key={i} className="hl">
          {p}
        </mark>
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

  const selDisp = keyToDisp(selected).slice(5); // MM/DD

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        .app {
          height: 100vh; height: 100dvh;
          display: flex; flex-direction: column;
          font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN",
            "Yu Gothic", sans-serif;
          background: ${bgUrl} #f6bedd; background-size: 240px 240px;
          color: #4a3140;
        }
        /* header */
        .hd {
          display: flex; align-items: center; gap: 8px;
          padding: calc(10px + env(safe-area-inset-top)) 14px 10px;
          background: rgba(255, 240, 249, 0.92);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid #f3b9d9;
          flex-shrink: 0;
        }
        .hd-title { font-weight: 700; font-size: 16px; letter-spacing: .04em; }
        .hd-sub { font-size: 11px; color: #b06992; margin-left: 2px; }
        .icon-btn {
          border: none; background: #ffd9ec; color: #c2478f;
          width: 34px; height: 34px; border-radius: 50%; font-size: 16px;
          cursor: pointer; flex-shrink: 0;
        }
        .overlay {
          position: fixed; inset: 0; background: rgba(74,49,64,.45);
          display: flex; align-items: center; justify-content: center;
          z-index: 20; padding: 18px;
        }
        .panel {
          background: #fff5fa; border-radius: 18px; width: 100%; max-width: 520px;
          max-height: 80vh; display: flex; flex-direction: column;
          padding: 16px; gap: 10px;
        }
        .panel h3 { margin: 0; font-size: 15px; color: #a4356f; }
        .panel textarea {
          flex: 1; min-height: 240px; border: 1.5px solid #f0a6cf;
          border-radius: 12px; padding: 10px; font-size: 12.5px; line-height: 1.6;
          background: #fff; color: #4a3140; resize: none; outline: none;
          font-family: inherit;
        }
        .panel-note { font-size: 11px; color: #b06992; margin: 0; }
        .panel-btns { display: flex; gap: 8px; }
        .panel-btns button {
          flex: 1; border: none; border-radius: 999px; padding: 10px 0;
          font-size: 13px; font-weight: 700; cursor: pointer;
        }
        .p-copy { background: #e0629f; color: #fff; }
        .p-copy:disabled { background: #f0b3d2; cursor: default; }
        .p-dl { background: #ffd9ec; color: #a4356f; }
        .p-close { background: #fff; color: #a4356f; border: 1.5px solid #f0a6cf !important; }
        .icon-btn:active { transform: scale(.94); }
        .search-row {
          padding: 8px 12px; background: rgba(255,240,249,.92);
          border-bottom: 1px solid #f3b9d9; flex-shrink: 0;
        }
        .search-row input {
          width: 100%; border: 1.5px solid #f0a6cf; border-radius: 999px;
          padding: 8px 14px; font-size: 14px; outline: none; background: #fff;
          color: #4a3140;
        }
        .search-row input:focus { border-color: #e0629f; }
        /* chat area */
        .chat { flex: 1; overflow-y: auto; padding: 16px 12px 20px; }
        .row { display: flex; justify-content: flex-end; align-items: flex-end;
          gap: 6px; margin-bottom: 16px; }
        .time { font-size: 10px; color: #7d5570; margin-bottom: 4px; flex-shrink: 0; }
        .bubble {
          position: relative; flex: 1;
          background: #fff5fa; border-radius: 18px; padding: 12px 14px;
          box-shadow: 0 1px 2px rgba(180, 90, 140, .18);
          cursor: pointer; -webkit-tap-highlight-color: transparent;
        }
        .bubble::after {
          content: ""; position: absolute; top: 10px; right: -6px;
          width: 14px; height: 14px; background: #fff5fa;
          clip-path: polygon(0 0, 100% 30%, 20% 100%);
        }
        .bubble .spark {
          position: absolute; top: -9px; right: -4px; font-size: 14px;
          pointer-events: none;
        }
        .bubble.editing-now { outline: 2px solid #e0629f; }
        .d-head {
          font-weight: 700; margin-bottom: 8px; font-size: 15px;
        }
        .d-head .lnk { color: #2f6fd6; text-decoration: underline; }
        .body { white-space: pre-wrap; font-size: 14.5px; line-height: 1.75; }
        .hl { background: #ffe27a; border-radius: 3px; padding: 0 1px; }
        .empty {
          text-align: center; color: #a4517f; font-size: 13px;
          background: rgba(255,245,250,.85); border-radius: 14px;
          padding: 14px; margin: 40px 24px; white-space: pre-wrap;
        }
        /* edit banner */
        .banner {
          display: flex; align-items: center; gap: 8px;
          background: #ffe4f1; border-top: 1px solid #f3b9d9;
          padding: 7px 12px; font-size: 12.5px; color: #a4356f; flex-shrink: 0;
        }
        .banner b { font-weight: 700; }
        .banner button {
          border: none; border-radius: 999px; padding: 5px 12px;
          font-size: 12px; cursor: pointer; font-weight: 600;
        }
        .b-cancel { background: #fff; color: #a4356f; margin-left: auto; }
        .b-del { background: #ff7ab1; color: #fff; }
        .b-del.arm { background: #e23d7c; }
        /* input bar */
        .bar {
          background: rgba(255,240,249,.96); border-top: 1px solid #f3b9d9;
          padding: 8px 10px calc(10px + env(safe-area-inset-bottom));
          flex-shrink: 0;
        }
        .chips { display: flex; gap: 6px; margin-bottom: 7px; align-items: center; }
        .chip {
          border: 1.5px solid #f0a6cf; background: #fff; color: #b04a86;
          border-radius: 999px; padding: 5px 13px; font-size: 12.5px;
          font-weight: 600; cursor: pointer;
        }
        .chip-on { background: #e0629f; border-color: #e0629f; color: #fff; }
        .chip:disabled { opacity: .45; cursor: default; }
        .chip-date { position: relative; overflow: hidden; }
        .chip-date input {
          position: absolute; inset: 0; opacity: 0; width: 100%; cursor: pointer;
        }
        .exists-note { font-size: 10.5px; color: #b06992; margin-left: 2px; }
        .in-row { display: flex; gap: 8px; align-items: flex-end; }
        .ta {
          flex: 1; border: 1.5px solid #f0a6cf; border-radius: 18px;
          padding: 9px 14px; font-size: 15px; line-height: 1.5;
          resize: none; outline: none; background: #fff; color: #4a3140;
          font-family: inherit; max-height: 140px;
        }
        .ta:focus { border-color: #e0629f; }
        .send {
          width: 42px; height: 42px; border-radius: 50%; border: none;
          background: #e0629f; color: #fff; font-size: 18px; cursor: pointer;
          flex-shrink: 0; box-shadow: 0 2px 5px rgba(200,60,130,.35);
        }
        .send:disabled { background: #f0b3d2; box-shadow: none; }
        .send:active:not(:disabled) { transform: scale(.93); }
        .toast {
          position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
          background: #4a3140; color: #fff; font-size: 12.5px;
          padding: 8px 16px; border-radius: 999px; z-index: 30;
          max-width: 88vw;
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>

      {/* header */}
      <div className="hd">
        <span style={{ fontSize: 20 }}>💗</span>
        <div>
          <div className="hd-title">Nachumin Diary</div>
          <div className="hd-sub">自分だけのトークルーム</div>
        </div>
        <button
          className="icon-btn"
          style={{ marginLeft: "auto" }}
          aria-label="テキスト書き出し"
          onClick={() => setExportOpen(true)}
        >
          📤
        </button>
        <button
          className="icon-btn"
          aria-label="テキストから復元"
          onClick={() => setImportOpen(true)}
        >
          📥
        </button>
        <button
          className="icon-btn"
          aria-label="検索"
          onClick={() => {
            setSearchOpen(!searchOpen);
            setQuery("");
          }}
        >
          {searchOpen ? "✕" : "🔍"}
        </button>
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
              role="button"
              tabIndex={0}
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
          <button className="b-cancel" onClick={cancelEdit}>
            キャンセル
          </button>
          <button
            className={"b-del" + (confirmDel ? " arm" : "")}
            onClick={deleteEntry}
          >
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
                ? "日付をえらぶ"
                : selDisp}
              <input type="date" value={selected} onChange={onDateInput} />
            </button>
            {entries[selected] && (
              <span className="exists-note">この日はもうあるので追記されます</span>
            )}
          </div>
        )}
        <div className="in-row">
          <textarea
            ref={taRef}
            className="ta"
            rows={1}
            placeholder={
              editing ? "内容を書きなおしてね" : "今日あったことを書く…"
            }
            value={draft}
            onChange={autoGrow}
          />
          <button
            className="send"
            aria-label={editing ? "保存" : "送信"}
            disabled={!draft.trim()}
            onClick={send}
          >
            {editing ? "✓" : "↑"}
          </button>
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
              <button className="p-dl" onClick={doDownload}>
                .txtでDL
              </button>
              <button className="p-close" onClick={() => setExportOpen(false)}>
                閉じる
              </button>
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
              placeholder={
                "エクスポートした .txt の内容をここに貼り付けてね\n\n🩷2026/07/17🩷 9:30\n今日あったこと…"
              }
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
            />
            <p className="panel-note">
              ※ すでにある日付の日記は上書きせずスキップされます
            </p>
            <div className="panel-btns">
              <button
                className="p-copy"
                disabled={!importText.trim()}
                onClick={doImport}
              >
                読み込む
              </button>
              <button
                className="p-close"
                onClick={() => {
                  setImportOpen(false);
                  setImportText("");
                }}
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
