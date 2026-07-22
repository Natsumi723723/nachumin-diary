import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey } from "./storage.js";
import {
  keyToDisp, keyToDate, todayKey, yesterdayKey, uid,
  yen, monthOf, monthLabel, safeFileName
} from "./format.js";
import { MEMBER_COLORS, textOn } from "./theme.js";
import ConfirmDialog from "./ConfirmDialog.jsx";

/* 経費型ルーム: 表がメイン画面。カテゴリチップで最速記録、月合計・集計・サブスク計上。 */
export default function ExpenseRoom({ room, onBack, onMeta, showToast, pinned, onRoomChange }) {
  const [expenses, setExpenses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [entry, setEntry] = useState(null);   // 金額入力/編集モーダル
  const [catModal, setCatModal] = useState(false);
  const [catDel, setCatDel] = useState(null);
  const [subModal, setSubModal] = useState(false);
  const [subDel, setSubDel] = useState(null);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [subChecks, setSubChecks] = useState({});   // subId -> bool
  const [subAmts, setSubAmts] = useState({});        // subId -> string
  const [copied, setCopied] = useState(false);
  const [confirm, setConfirm] = useState(null); // 削除確認
  const scrollRef = useRef(null);
  const exRef = useRef(null);

  const categories = room.categories || [];
  const subscriptions = room.subscriptions || [];
  const subsPosted = room.subsPosted || {};
  const catOf = (id) => categories.find((c) => c.id === id);
  const catName = (id) => catOf(id)?.name || "未分類";
  const curMonth = monthOf(todayKey());
  const curYear = keyToDate(todayKey()).getFullYear();

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && Array.isArray(v.expenses)) setExpenses(v.expenses);
      } catch (e) { /* no data */ } finally { setLoaded(true); }
    })();
  }, [room.id]);

  useEffect(() => {
    if (loaded && scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [loaded]);

  const persist = async (next) => {
    setExpenses(next);
    try {
      await set(roomDataKey(room.id), { expenses: next });
      const thisMonth = next.filter((e) => monthOf(e.dateKey) === curMonth).reduce((s, e) => s + e.amount, 0);
      onMeta({ preview: `今月 ${yen(thisMonth)}`, lastAt: Date.now() });
    } catch (e) { showToast("保存に失敗しました。ストレージを確認してね"); }
  };

  const scrollBottom = () => setTimeout(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, 50);

  /* ---------- 記録・編集 ---------- */
  const openEntry = (categoryId) =>
    setEntry({ mode: "new", categoryId, amount: "", memo: "", date: todayKey(), armDel: false });
  const editRow = (e) =>
    setEntry({ mode: "edit", id: e.id, categoryId: e.categoryId, amount: String(e.amount), memo: e.memo || "", date: e.dateKey, armDel: false });

  const submitEntry = () => {
    const amount = parseInt(entry.amount, 10);
    if (!amount || amount <= 0) { showToast("金額を入れてね"); return; }
    if (entry.mode === "new") {
      persist([...expenses, { id: uid(), dateKey: entry.date, categoryId: entry.categoryId, amount, memo: entry.memo.trim() }]);
      scrollBottom();
    } else {
      persist(expenses.map((x) => (x.id === entry.id ? { ...x, categoryId: entry.categoryId, amount, memo: entry.memo.trim(), dateKey: entry.date } : x)));
    }
    setEntry(null);
  };
  const deleteRow = () => {
    const id = entry.id;
    setConfirm({ message: `${yen(entry.amount)}（${catName(entry.categoryId)}）を削除しますか？`, onConfirm: () => {
      persist(expenses.filter((x) => x.id !== id));
      setEntry(null);
      setConfirm(null);
    } });
  };

  /* ---------- カテゴリ管理 ---------- */
  const saveCats = (next) => onRoomChange({ categories: next });
  const addCat = () => saveCats([...categories, { id: uid(), name: "", emoji: "🏷️", color: MEMBER_COLORS[categories.length % MEMBER_COLORS.length] }]);
  const updateCat = (id, patch) => saveCats(categories.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  const moveCat = (i, dir) => {
    const j = i + dir; if (j < 0 || j >= categories.length) return;
    const next = [...categories]; [next[i], next[j]] = [next[j], next[i]]; saveCats(next);
  };
  const removeCat = (id) => {
    if (catDel !== id) { setCatDel(id); return; }
    saveCats(categories.filter((c) => c.id !== id)); setCatDel(null);
  };
  const closeCatModal = () => {
    const cleaned = categories.filter((c) => c.name.trim());
    if (cleaned.length !== categories.length) saveCats(cleaned);
    setCatModal(false); setCatDel(null);
  };

  /* ---------- サブスク管理 ---------- */
  const saveSubs = (next) => onRoomChange({ subscriptions: next });
  const addSub = () => saveSubs([...subscriptions, { id: uid(), name: "", amount: 0, categoryId: categories[0]?.id || "" }]);
  const updateSub = (id, patch) => saveSubs(subscriptions.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  const removeSub = (id) => {
    if (subDel !== id) { setSubDel(id); return; }
    saveSubs(subscriptions.filter((s) => s.id !== id)); setSubDel(null);
  };
  const closeSubModal = () => {
    const cleaned = subscriptions.filter((s) => s.name.trim());
    if (cleaned.length !== subscriptions.length) saveSubs(cleaned);
    setSubModal(false); setSubDel(null);
  };

  /* ---------- サブスク計上バナー ---------- */
  const showBanner = subscriptions.length > 0 && !subsPosted[curMonth] && !bannerDismissed;
  useEffect(() => {
    // バナー表示のたびに初期値を用意
    const c = {}; const a = {};
    for (const s of subscriptions) { c[s.id] = true; a[s.id] = String(s.amount); }
    setSubChecks(c); setSubAmts(a);
  }, [subModal, room.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const postSubs = () => {
    const dk = todayKey();
    const add = [];
    for (const s of subscriptions) {
      if (subChecks[s.id] === false) continue; // 明示的にオフのものだけ除外
      const raw = subAmts[s.id] != null && subAmts[s.id] !== "" ? subAmts[s.id] : s.amount;
      const amt = parseInt(raw, 10);
      if (!amt || amt <= 0) continue;
      add.push({ id: uid(), dateKey: dk, categoryId: s.categoryId, amount: amt, memo: s.name });
    }
    if (add.length) { persist([...expenses, ...add]); scrollBottom(); }
    onRoomChange({ subsPosted: { ...subsPosted, [curMonth]: true } });
    setBannerDismissed(true);
    showToast(add.length ? `${add.length}件のサブスクを計上したよ💗` : "計上をスキップしました");
  };
  const skipSubs = () => {
    onRoomChange({ subsPosted: { ...subsPosted, [curMonth]: true } });
    setBannerDismissed(true);
  };

  /* ---------- 集計 ---------- */
  const sorted = [...expenses].sort((a, b) =>
    a.dateKey < b.dateKey ? -1 : a.dateKey > b.dateKey ? 1 : (a.id < b.id ? -1 : 1));
  const monthTotals = {};
  for (const e of sorted) monthTotals[monthOf(e.dateKey)] = (monthTotals[monthOf(e.dateKey)] || 0) + e.amount;
  const thisMonthTotal = monthTotals[curMonth] || 0;
  const grandTotal = expenses.reduce((s, e) => s + e.amount, 0);
  const catTotals = (filterFn) => {
    const m = {};
    for (const e of expenses) if (!filterFn || filterFn(e)) m[e.categoryId] = (m[e.categoryId] || 0) + e.amount;
    return m;
  };
  const catThisMonth = catTotals((e) => monthOf(e.dateKey) === curMonth);
  const catAll = catTotals();
  const months = Object.keys(monthTotals).sort();

  /* ---------- エクスポート ---------- */
  const buildTxt = () =>
    sorted.map((e) => `${keyToDisp(e.dateKey)}  ${catName(e.categoryId)}  ${yen(e.amount)}${e.memo ? "  " + e.memo : ""}`).join("\n");
  const csvEsc = (s) => (/[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s);
  const buildCsv = () =>
    ["日付,カテゴリ,金額,メモ", ...sorted.map((e) =>
      [keyToDisp(e.dateKey), catName(e.categoryId), e.amount, e.memo || ""].map((x) => csvEsc(String(x))).join(","))].join("\n");
  const download = (content, ext, mime) => {
    try {
      const blob = new Blob([content], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `nachumin-diary-${safeFileName(room.name)}.${ext}`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 3000);
    } catch (e) { showToast("ダウンロードできない環境みたい。コピーを使ってね"); }
  };
  const doCopy = async () => {
    try { await navigator.clipboard.writeText(buildTxt()); setCopied(true); }
    catch (e) {
      try { exRef.current.focus(); exRef.current.select(); document.execCommand("copy"); setCopied(true); }
      catch (e2) { showToast("コピーできませんでした"); }
    }
    setTimeout(() => setCopied(false), 2000);
  };

  /* ---------- 表の行を組み立て ---------- */
  const tableRows = [];
  let cm = "";
  for (const e of sorted) {
    const mk = monthOf(e.dateKey);
    if (mk !== cm) {
      cm = mk;
      tableRows.push(
        <div className="exp-divider" key={"d-" + mk}>
          <span>── {monthLabel(mk, curYear)} 合計 {yen(monthTotals[mk])} ──</span>
        </div>
      );
    }
    const c = catOf(e.categoryId);
    const d = keyToDate(e.dateKey);
    tableRows.push(
      <div className="exp-row" key={e.id} onClick={() => editRow(e)} role="button" tabIndex={0}>
        <div className="exp-main">
          <span className="exp-date">{d.getMonth() + 1}/{d.getDate()}</span>
          <span className="exp-cat" style={{ background: c?.color || "#eee", color: textOn(c?.color) }}>
            {c?.emoji ? c.emoji + " " : ""}{catName(e.categoryId)}
          </span>
          <span className="exp-amt">{yen(e.amount)}</span>
        </div>
        {e.memo ? <div className="exp-memo">{e.memo}</div> : null}
      </div>
    );
  }

  const dateChips = (value, onPick) => (
    <div className="chips">
      <button className={"chip" + (value === todayKey() ? " chip-on" : "")} onClick={() => onPick(todayKey())}>今日</button>
      <button className={"chip" + (value === yesterdayKey() ? " chip-on" : "")} onClick={() => onPick(yesterdayKey())}>昨日</button>
      <button className="chip chip-date">
        📅 {value === todayKey() || value === yesterdayKey() ? "日付" : keyToDisp(value).slice(5)}
        <input type="date" value={value} onChange={(e) => e.target.value && onPick(e.target.value)} />
      </button>
    </div>
  );

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{room.name}</div>
          <div className="hd-sub">Nachumin Lifelog</div>
        </div>
        <button className="icon-btn" style={{ marginLeft: "auto" }} aria-label="カテゴリ" onClick={() => setCatModal(true)}>🏷️</button>
        <button className="icon-btn" aria-label="サブスク" onClick={() => setSubModal(true)}>🔁</button>
        <button className="icon-btn" aria-label="書き出し" onClick={() => setExportOpen(true)}>📤</button>
      </div>

      {pinned}

      {/* サマリーバー */}
      <button className="exp-summary" onClick={() => setSummaryOpen(true)}>
        <span className="exp-summary-label">今月</span>
        <span className="exp-summary-amt">{yen(thisMonthTotal)}</span>
        <span className="exp-summary-arrow">集計 ›</span>
      </button>

      {/* サブスク計上バナー */}
      {showBanner && (
        <div className="exp-banner">
          <div className="exp-banner-head">🔁 今月のサブスクを計上する？</div>
          {subscriptions.map((s) => (
            <div className="exp-banner-row" key={s.id}>
              <button
                className={"exp-check" + (subChecks[s.id] ? " on" : "")}
                onClick={() => setSubChecks((o) => ({ ...o, [s.id]: !o[s.id] }))}
                aria-label={s.name}
              />
              <span className="exp-banner-name">{s.name}</span>
              <span className="exp-banner-cat">{catOf(s.categoryId)?.emoji || ""}</span>
              <span className="exp-yen">¥</span>
              <input
                className="f-input exp-banner-amt" inputMode="numeric"
                value={subAmts[s.id] || ""}
                onChange={(e) => setSubAmts((o) => ({ ...o, [s.id]: e.target.value.replace(/[^0-9]/g, "") }))}
              />
            </div>
          ))}
          <div className="exp-banner-btns">
            <button className="p-copy" onClick={postSubs}>まとめて計上</button>
            <button className="p-close" onClick={skipSubs}>今月はスキップ</button>
          </div>
        </div>
      )}

      {/* 表 */}
      <div className="exp-table" ref={scrollRef}>
        {loaded && sorted.length === 0 && (
          <div className="empty">まだ支出がありません。\n下のカテゴリをタップして記録しよう💗</div>
        )}
        {tableRows}
      </div>

      {/* 下部カテゴリチップ */}
      <div className="bar">
        <div className="chips exp-cat-chips">
          {categories.map((c) => (
            <button
              key={c.id} className="exp-chip"
              style={{ background: c.color, color: textOn(c.color) }}
              onClick={() => openEntry(c.id)}
            >{c.emoji ? c.emoji + " " : ""}{c.name}</button>
          ))}
          <button className="exp-chip exp-chip-add" onClick={() => setCatModal(true)} aria-label="カテゴリ編集">＋</button>
        </div>
      </div>

      {/* 金額入力/編集モーダル */}
      {entry && (
        <div className="overlay" onClick={() => setEntry(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>{entry.mode === "new" ? "支出を記録" : "支出を編集"}</h3>
            <div className="f-label">カテゴリ</div>
            <div className="chips exp-cat-chips">
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={"exp-chip" + (entry.categoryId === c.id ? " sel" : "")}
                  style={{ background: c.color, color: textOn(c.color), opacity: entry.categoryId === c.id ? 1 : 0.5 }}
                  onClick={() => setEntry((o) => ({ ...o, categoryId: c.id }))}
                >{c.emoji ? c.emoji + " " : ""}{c.name}</button>
              ))}
            </div>
            <div className="f-label">金額</div>
            <div className="exp-amt-field">
              <span className="exp-yen-big">¥</span>
              <input
                className="exp-amt-input" inputMode="numeric" pattern="[0-9]*" autoFocus
                placeholder="0" value={entry.amount ? Number(entry.amount).toLocaleString("ja-JP") : ""}
                onChange={(e) => setEntry((o) => ({ ...o, amount: e.target.value.replace(/[^0-9]/g, "") }))}
              />
            </div>
            <div className="f-label">メモ（任意）</div>
            <input
              className="f-input" placeholder="なにに使った？"
              value={entry.memo} onChange={(e) => setEntry((o) => ({ ...o, memo: e.target.value }))}
            />
            <div className="f-label">日付</div>
            {dateChips(entry.date, (d) => setEntry((o) => ({ ...o, date: d })))}
            <div className="panel-btns">
              <button className="p-copy" onClick={submitEntry}>{entry.mode === "new" ? "記録する" : "保存"}</button>
              {entry.mode === "edit" && (
                <button className="p-del" onClick={deleteRow}>
                  {"削除"}
                </button>
              )}
              <button className="p-close" onClick={() => setEntry(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {confirm && (
        <ConfirmDialog message={confirm.message} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />
      )}

      {/* カテゴリ管理 */}
      {catModal && (
        <div className="overlay" onClick={closeCatModal}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>🏷️ カテゴリ</h3>
            {categories.map((c, i) => (
              <div className="mem-row" key={c.id} style={{ flexWrap: "wrap" }}>
                <input className="f-input" style={{ width: 54, textAlign: "center", flex: "0 0 auto" }} maxLength={4}
                  placeholder="🏷️" value={c.emoji || ""} onChange={(e) => updateCat(c.id, { emoji: e.target.value })} />
                <input className="f-input" style={{ flex: 1, minWidth: 0 }} placeholder="カテゴリ名"
                  value={c.name} onChange={(e) => updateCat(c.id, { name: e.target.value })} />
                <button className="mem-btn" disabled={i === 0} onClick={() => moveCat(i, -1)} aria-label="上へ">↑</button>
                <button className="mem-btn" disabled={i === categories.length - 1} onClick={() => moveCat(i, 1)} aria-label="下へ">↓</button>
                <button className="mem-btn" style={catDel === c.id ? { background: "#e23d7c", color: "#fff" } : undefined}
                  onClick={() => removeCat(c.id)} aria-label="削除">{catDel === c.id ? "!" : "🗑"}</button>
                <div className="swatches" style={{ flexBasis: "100%", marginTop: 4 }}>
                  {MEMBER_COLORS.map((col) => (
                    <button key={col} className={"swatch" + (c.color === col ? " on" : "")}
                      style={{ background: col }} onClick={() => updateCat(c.id, { color: col })} aria-label={col} />
                  ))}
                </div>
              </div>
            ))}
            {categories.length === 0 && <p className="panel-note">カテゴリを追加してね💗</p>}
            <div className="panel-btns">
              <button className="p-copy" onClick={addCat}>＋ カテゴリ追加</button>
              <button className="p-close" onClick={closeCatModal}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* サブスク管理 */}
      {subModal && (
        <div className="overlay" onClick={closeSubModal}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>🔁 サブスク（定期支出）</h3>
            <p className="panel-note">月が変わって最初に開いたとき、まとめて計上できます。</p>
            {subscriptions.map((s) => (
              <div className="mem-row" key={s.id} style={{ flexWrap: "wrap" }}>
                <input className="f-input" style={{ flex: 1, minWidth: 0 }} placeholder="名前（例: Claude Code）"
                  value={s.name} onChange={(e) => updateSub(s.id, { name: e.target.value })} />
                <button className="mem-btn" style={subDel === s.id ? { background: "#e23d7c", color: "#fff" } : undefined}
                  onClick={() => removeSub(s.id)} aria-label="削除">{subDel === s.id ? "!" : "🗑"}</button>
                <div style={{ display: "flex", gap: 6, flexBasis: "100%", marginTop: 4, alignItems: "center" }}>
                  <span className="exp-yen">¥</span>
                  <input className="f-input" style={{ width: 100 }} inputMode="numeric"
                    value={s.amount || ""} onChange={(e) => updateSub(s.id, { amount: parseInt(e.target.value.replace(/[^0-9]/g, ""), 10) || 0 })} />
                  <select className="f-input" style={{ flex: 1, minWidth: 0 }}
                    value={s.categoryId} onChange={(e) => updateSub(s.id, { categoryId: e.target.value })}>
                    {categories.map((c) => <option key={c.id} value={c.id}>{c.emoji} {c.name}</option>)}
                  </select>
                </div>
              </div>
            ))}
            {subscriptions.length === 0 && <p className="panel-note">サブスクを追加してね💗</p>}
            <div className="panel-btns">
              <button className="p-copy" onClick={addSub}>＋ サブスク追加</button>
              <button className="p-close" onClick={closeSubModal}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* 集計ビュー */}
      {summaryOpen && (
        <div className="overlay" onClick={() => setSummaryOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📊 集計</h3>
            <div className="f-label">月ごとの合計</div>
            <div className="sum-list">
              {months.length === 0 && <p className="panel-note">まだ記録がありません</p>}
              {months.map((mk) => (
                <div className="sum-row" key={mk}>
                  <span>{monthLabel(mk, curYear)}</span>
                  <span className="sum-amt">{yen(monthTotals[mk])}</span>
                </div>
              ))}
            </div>
            <div className="f-label">カテゴリ別（今月 / 全期間）</div>
            <div className="sum-list">
              {categories.map((c) => (
                <div className="sum-row" key={c.id}>
                  <span><span className="exp-cat" style={{ background: c.color, color: textOn(c.color) }}>{c.emoji} {c.name}</span></span>
                  <span className="sum-amt">{yen(catThisMonth[c.id] || 0)} / {yen(catAll[c.id] || 0)}</span>
                </div>
              ))}
            </div>
            <div className="sum-row sum-grand">
              <span>全期間の累計</span>
              <span className="sum-amt">{yen(grandTotal)}</span>
            </div>
            <div className="panel-btns">
              <button className="p-close" onClick={() => setSummaryOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* エクスポート */}
      {exportOpen && (
        <div className="overlay" onClick={() => setExportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📤 経費を書き出し</h3>
            <textarea ref={exRef} readOnly value={buildTxt()} />
            <div className="panel-btns">
              <button className="p-copy" onClick={() => download(buildCsv(), "csv", "text/csv;charset=utf-8")}>CSVでDL</button>
              <button className="p-dl" onClick={() => download(buildTxt(), "txt", "text/plain;charset=utf-8")}>.txtでDL</button>
              <button className="p-dl" onClick={doCopy}>{copied ? "コピー💗" : "コピー"}</button>
              <button className="p-close" onClick={() => setExportOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
