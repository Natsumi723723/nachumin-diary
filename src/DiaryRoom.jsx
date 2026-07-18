import { useState, useEffect, useRef, Fragment } from "react";
import { get, set, roomDataKey, doneLogKey } from "./storage.js";
import {
  keyToDisp, todayKey, yesterdayKey, nowTime, escapeRegExp,
  diaryToText, parseDiaryText, extractDoneSection, DONE_HEADER, safeFileName
} from "./format.js";
import InlineEdit from "./InlineEdit.jsx";

/* 日記型ルーム: 1日=1吹き出し。
   常時入力欄は持たず、＋から日付を選んで吹き出しを作り、吹き出しの中で書く。 */
export default function DiaryRoom({ room, onBack, onMeta, initialQuery, showToast, pinned, syncSignal, marks, onEditMarks }) {
  const [entries, setEntries] = useState({}); // { "2026-07-16": {text, time} }
  const [doneLog, setDoneLog] = useState({}); // { "2026-07-16": [{text, time}] }
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(null);     // 既存の吹き出しを編集中の日付
  const [composing, setComposing] = useState(null); // 新規作成中の日付（まだ未保存）
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(!!initialQuery);
  const [query, setQuery] = useState(initialQuery || "");
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef(null);
  const exRef = useRef(null);

  /* load（+ 旧「できたこと」セクションの安全な移行） */
  useEffect(() => {
    (async () => {
      try {
        let raw = await get(roomDataKey(room.id));
        raw = typeof raw === "string" ? JSON.parse(raw) : (raw || {});
        const log = (await get(doneLogKey(room.id))) || {};
        // 旧仕様: 日記本文内の「🩷 できたこと」を専用ログへ移行
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
          setEntries(nextEntries);
          setDoneLog(nextLog);
        } else {
          setEntries(raw);
          setDoneLog(log);
        }
      } catch (e) {
        /* no data yet */
      } finally {
        setLoaded(true);
      }
    })();
  }, [room.id]);

  // 宣言バー・TODO完了などで外部更新されたら読み直す
  useEffect(() => {
    if (!syncSignal) return;
    (async () => {
      const v = await get(roomDataKey(room.id));
      if (v) setEntries(typeof v === "string" ? JSON.parse(v) : v);
      setDoneLog((await get(doneLogKey(room.id))) || {});
    })();
  }, [syncSignal]); // eslint-disable-line react-hooks/exhaustive-deps

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

  // 通常は最下部へ（検索・編集・作成中はしない）
  useEffect(() => {
    if (!query && !editing && !composing && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries, loaded, query, editing, composing]);

  // 編集/作成を始めたら、その吹き出しを上部へ寄せる（下のツールバー・キーボードに隠れないよう）
  useEffect(() => {
    if (!editing && !composing) return;
    const el = scrollRef.current?.querySelector(".editing-now");
    if (el) setTimeout(() => el.scrollIntoView({ block: "start", behavior: "smooth" }), 60);
  }, [editing, composing]);

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

  /* ＋ → 日付を選ぶ。既にある日は編集(追記)、無い日は新規作成 */
  const pickDate = (d) => {
    setDatePickerOpen(false);
    setSearchOpen(false);
    setQuery("");
    if (entries[d]) {
      setComposing(null);
      setEditing(d);
    } else {
      setEditing(null);
      setComposing(d);
    }
  };

  const startEdit = (k) => {
    setComposing(null);
    setEditing(k);
    setQuery("");
    setSearchOpen(false);
  };

  const saveEdit = (k, raw) => {
    const text = raw.trim();
    if (!text) { setEditing(null); return; } // 空なら変更しない
    persist({ ...entries, [k]: { ...entries[k], text } });
    setEditing(null);
  };
  const deleteEntry = (k) => {
    const next = { ...entries };
    delete next[k];
    persist(next);
    setEditing(null);
  };
  const saveNew = (d, raw) => {
    const text = raw.trim();
    if (!text) { setComposing(null); return; }
    persist({ ...entries, [d]: { text, time: nowTime() } });
    setComposing(null);
  };

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

  // 表示する日付 = 日記本文 + できたことログ + 作成中（重複なし・古い順）
  const q = query.toLowerCase();
  const allDates = new Set([...Object.keys(entries), ...Object.keys(doneLog)]);
  if (composing && !entries[composing]) allDates.add(composing);
  let displayKeys = [...allDates].sort();
  if (query) {
    displayKeys = displayKeys.filter((k) => {
      const inDiary = entries[k] && (entries[k].text + keyToDisp(k)).toLowerCase().includes(q);
      const inDone = (doneLog[k] || []).some((it) => it.text.toLowerCase().includes(q));
      return inDiary || inDone;
    });
  }

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

      {pinned}

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
      <div className="chat" ref={scrollRef} style={{ paddingBottom: editing || composing ? 200 : 88 }}>
        {loaded && displayKeys.length === 0 && (
          <div className="empty">
            {query
              ? "みつかりませんでした 🥺"
              : "まだ日記がありません。\n右下の ＋ から書いてみよう💗"}
          </div>
        )}
        {displayKeys.map((k) => {
          const isComposing = composing === k && !entries[k];
          const isEditing = editing === k;
          const active = isComposing || isEditing;
          const hasDiary = !!entries[k] || isComposing;
          const done = doneLog[k] || [];
          return (
            <Fragment key={k}>
              {hasDiary && (
                <div className="row">
                  <div className="time">{entries[k]?.time || nowTime()}</div>
                  <div
                    className={"bubble" + (active ? " editing-now" : "")}
                    onClick={active ? undefined : () => startEdit(k)}
                    role="button" tabIndex={0}
                    onKeyDown={(e) => !active && e.key === "Enter" && startEdit(k)}
                  >
                    <span className="spark">✨</span>
                    <div className="d-head">
                      🩷<span className="lnk">{keyToDisp(k)}</span>🩷
                    </div>
                    {isComposing ? (
                      <InlineEdit
                        initial=""
                        marks={marks}
                        onEditMarks={onEditMarks}
                        bottomToolbar
                        onSave={(t) => saveNew(k, t)}
                        onCancel={() => setComposing(null)}
                        placeholder="今日あったことを書く…"
                      />
                    ) : isEditing ? (
                      <InlineEdit
                        initial={entries[k].text}
                        appendNewline
                        marks={marks}
                        onEditMarks={onEditMarks}
                        bottomToolbar
                        onSave={(t) => saveEdit(k, t)}
                        onCancel={() => setEditing(null)}
                        onDelete={() => deleteEntry(k)}
                        placeholder="内容を書きなおしてね"
                      />
                    ) : (
                      <div className="body">{highlight(entries[k].text)}</div>
                    )}
                  </div>
                </div>
              )}
              {done.length > 0 && (
                <div className="done-row" style={hasDiary ? undefined : { marginTop: 0 }}>
                  <div className="done-bubble">
                    <div className="done-head">🩷 できたこと</div>
                    {done.map((it, i) => (
                      <div className="done-line" key={i}>
                        ☑ {highlight(it.text)}
                        {it.time ? <span className="done-time"> ({it.time})</span> : null}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* ＋ 日記を書く（編集・作成・検索中は隠す） */}
      {!editing && !composing && !searchOpen && (
        <button className="fab" aria-label="日記を書く" onClick={() => setDatePickerOpen(true)}>＋</button>
      )}

      {/* 日付ピッカー */}
      {datePickerOpen && (
        <div className="overlay" onClick={() => setDatePickerOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>いつの日記？</h3>
            <div className="date-opts">
              <button className="date-opt" onClick={() => pickDate(todayKey())}>
                今日{entries[todayKey()] ? " ✎ 追記" : ""}
              </button>
              <button className="date-opt" onClick={() => pickDate(yesterdayKey())}>
                昨日{entries[yesterdayKey()] ? " ✎ 追記" : ""}
              </button>
              <button className="date-opt date-cal">
                📅 カレンダーで選ぶ
                <input
                  type="date" defaultValue={todayKey()}
                  onChange={(e) => e.target.value && pickDate(e.target.value)}
                />
              </button>
            </div>
            <div className="panel-btns">
              <button className="p-close" onClick={() => setDatePickerOpen(false)}>閉じる</button>
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
