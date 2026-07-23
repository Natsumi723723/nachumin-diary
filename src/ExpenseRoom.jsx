import { useState, useEffect, useRef, useMemo } from "react";
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
  const [transit, setTransit] = useState(null);      // 🚃 旅費交通費の入力パネル
  const [stationModal, setStationModal] = useState(false);
  const [stDel, setStDel] = useState(null);
  const [fareDel, setFareDel] = useState(null);
  const [addSt, setAddSt] = useState(null);          // "from" | "to"（新しい駅を入力中）
  const [addStName, setAddStName] = useState("");
  const scrollRef = useRef(null);
  const exRef = useRef(null);

  const categories = room.categories || [];
  const subscriptions = room.subscriptions || [];
  const subsPosted = room.subsPosted || {};
  const catOf = (id) => categories.find((c) => c.id === id);
  const catName = (id) => catOf(id)?.name || "未分類";

  /* ---------- 🚃 旅費交通費（駅・区間マスタ） ---------- */
  const stations = room.stations || [];
  const fares = room.fares || [];
  const transitCat = categories.find((c) => c.transit);
  const stName = (id) => stations.find((s) => s.id === id)?.name || "";
  // 逆方向（B→A）も同じ運賃として扱う
  const findFare = (a, b) =>
    (a && b) ? fares.find((f) => (f.fromId === a && f.toId === b) || (f.fromId === b && f.toId === a)) : null;

  // 既存の経費ルームにも「旅費交通費」を一度だけ用意する（消したら戻さない）
  useEffect(() => {
    if (room.transitSeeded) return;
    if (categories.some((c) => c.transit)) { onRoomChange({ transitSeeded: true }); return; }
    onRoomChange({
      categories: [...categories, { id: uid(), name: "旅費交通費", emoji: "🚃", color: "#00A5B5", transit: true }],
      transitSeeded: true
    });
  }, [room.id]); // eslint-disable-line react-hooks/exhaustive-deps
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
  const openEntry = (categoryId) => {
    if (catOf(categoryId)?.transit) { openTransit(); return; }
    setEntry({ mode: "new", categoryId, amount: "", memo: "", date: todayKey(), armDel: false });
  };
  const editRow = (e) => {
    if (e.fromId && e.toId) { // 🚃 の行は専用パネルで編集
      setTransit({
        mode: "edit", id: e.id,
        fromId: e.fromId, fromName: e.fromName || stName(e.fromId),
        toId: e.toId, toName: e.toName || stName(e.toId),
        amount: String(e.amount), round: !!e.round,
        memo: e.memo || "", date: e.dateKey, saveFare: false
      });
      return;
    }
    setEntry({ mode: "edit", id: e.id, categoryId: e.categoryId, amount: String(e.amount), memo: e.memo || "", date: e.dateKey, armDel: false });
  };

  /* 🚃 入力フロー */
  const openTransit = () => {
    const def = room.defaultFromId && stations.some((s) => s.id === room.defaultFromId)
      ? room.defaultFromId : (stations[0]?.id || null);
    setTransit({
      mode: "new", fromId: def, fromName: stName(def), toId: null, toName: "",
      amount: "", round: !!room.roundTripDefault, memo: "", date: todayKey(), saveFare: true
    });
    setAddSt(null); setAddStName("");
  };
  // 出発/到着が決まったら登録済み運賃を自動入力（往復ならその2倍）
  const setRoute = (fromId, fromName, toId, toName) => setTransit((o) => {
    const next = { ...o, fromId, fromName, toId, toName };
    const f = findFare(fromId, toId);
    if (f) next.amount = String(f.fare * (next.round ? 2 : 1));
    return next;
  });
  const pickFrom = (id) => setRoute(id, stName(id), transit.toId, transit.toName);
  const pickTo = (id) => setRoute(transit.fromId, transit.fromName, id, stName(id));
  const pickRoute = (r) => setRoute(r.fromId, r.fromName, r.toId, r.toName);
  const toggleRound = () => setTransit((o) => {
    const on = !o.round;
    const cur = parseInt(o.amount, 10) || 0;
    return { ...o, round: on, amount: cur ? String(on ? cur * 2 : Math.round(cur / 2)) : o.amount };
  });
  // 一覧にない駅をその場で追加（そのまま駅マスタに登録される）
  const commitAddStation = (which) => {
    const nm = addStName.trim();
    if (!nm) { setAddSt(null); setAddStName(""); return; }
    const found = stations.find((s) => s.name === nm);
    const id = found ? found.id : uid();
    if (!found) onRoomChange({ stations: [...stations, { id, name: nm }] });
    if (which === "from") setRoute(id, nm, transit.toId, transit.toName);
    else setRoute(transit.fromId, transit.fromName, id, nm);
    setAddSt(null); setAddStName("");
  };

  const submitTransit = () => {
    const amount = parseInt(transit.amount, 10);
    if (!transit.fromId || !transit.toId) { showToast("出発駅と到着駅を選んでね"); return; }
    if (transit.fromId === transit.toId) { showToast("出発駅と到着駅が同じです 🥺"); return; }
    if (!amount || amount <= 0) { showToast("金額を入れてね"); return; }
    // 未登録の区間なら、希望されていれば区間マスタへ登録（片道運賃で保存）
    if (!findFare(transit.fromId, transit.toId) && transit.saveFare) {
      const oneWay = transit.round ? Math.round(amount / 2) : amount;
      onRoomChange({ fares: [...fares, { id: uid(), fromId: transit.fromId, toId: transit.toId, fare: oneWay, memo: "" }] });
    }
    // 駅名も一緒に保存（あとで駅マスタを変えても履歴の表示が崩れない）
    const row = {
      dateKey: transit.date, categoryId: transitCat?.id || transit.categoryId,
      amount, memo: transit.memo.trim(),
      fromId: transit.fromId, fromName: transit.fromName,
      toId: transit.toId, toName: transit.toName,
      round: transit.round
    };
    if (transit.mode === "new") { persist([...expenses, { id: uid(), ...row }]); scrollBottom(); }
    else persist(expenses.map((x) => (x.id === transit.id ? { ...x, ...row } : x)));
    setTransit(null);
  };
  const deleteTransit = () => {
    const id = transit.id;
    setConfirm({
      message: `${yen(parseInt(transit.amount, 10) || 0)}（${transit.fromName}→${transit.toName}）を削除しますか？`,
      onConfirm: () => { persist(expenses.filter((x) => x.id !== id)); setTransit(null); setConfirm(null); }
    });
  };

  /* ---------- 駅・区間マスタの編集 ---------- */
  const saveStations = (next) => onRoomChange({ stations: next });
  const addStation = () => saveStations([...stations, { id: uid(), name: "" }]);
  const updateStation = (id, patch) => saveStations(stations.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  const moveStation = (i, dir) => {
    const j = i + dir; if (j < 0 || j >= stations.length) return;
    const next = [...stations]; [next[i], next[j]] = [next[j], next[i]]; saveStations(next);
  };
  const removeStation = (id) => {
    if (stDel !== id) { setStDel(id); return; }
    // 記録済みの経費は駅名を持っているので消えない。区間マスタのみ整理する
    onRoomChange({
      stations: stations.filter((s) => s.id !== id),
      fares: fares.filter((f) => f.fromId !== id && f.toId !== id),
      ...(room.defaultFromId === id ? { defaultFromId: null } : {})
    });
    setStDel(null);
  };
  const saveFares = (next) => onRoomChange({ fares: next });
  const addFare = () => saveFares([...fares, { id: uid(), fromId: stations[0]?.id || "", toId: stations[1]?.id || "", fare: 0, memo: "" }]);
  const updateFare = (id, patch) => saveFares(fares.map((f) => (f.id === id ? { ...f, ...patch } : f)));
  const removeFare = (id) => {
    if (fareDel !== id) { setFareDel(id); return; }
    saveFares(fares.filter((f) => f.id !== id)); setFareDel(null);
  };
  const closeStationModal = () => {
    const cleaned = stations.filter((s) => s.name.trim());
    if (cleaned.length !== stations.length) saveStations(cleaned);
    setStationModal(false); setStDel(null); setFareDel(null);
  };

  // よく使う区間（過去の記録から回数順・上位6件）
  const routeHistory = useMemo(() => {
    const m = {};
    for (const e of expenses) {
      if (!e.fromId || !e.toId) continue;
      if (!stations.some((s) => s.id === e.fromId) || !stations.some((s) => s.id === e.toId)) continue;
      const k = e.fromId + ">" + e.toId;
      if (!m[k]) m[k] = { fromId: e.fromId, toId: e.toId, fromName: stName(e.fromId), toName: stName(e.toId), n: 0 };
      m[k].n += 1;
    }
    return Object.values(m).sort((a, b) => b.n - a.n).slice(0, 6);
  }, [expenses, stations]); // eslint-disable-line react-hooks/exhaustive-deps

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
  // 区間ごとの合計（A→B と B→A はまとめて集計）
  const routeTotals = useMemo(() => {
    const m = {};
    for (const e of expenses) {
      if (!e.fromName || !e.toName) continue;
      const pair = [e.fromName, e.toName].sort().join(" ⇄ ");
      if (!m[pair]) m[pair] = { pair, total: 0, n: 0 };
      m[pair].total += e.amount; m[pair].n += 1;
    }
    return Object.values(m).sort((a, b) => b.total - a.total);
  }, [expenses]);

  /* ---------- エクスポート ---------- */
  const routeLabel = (e) => (e.fromName && e.toName ? `${e.fromName}→${e.toName}${e.round ? " 往復" : ""}` : "");
  const buildTxt = () =>
    sorted.map((e) => {
      const r = routeLabel(e);
      return `${keyToDisp(e.dateKey)}  ${catName(e.categoryId)}  ${yen(e.amount)}${r ? "  " + r : ""}${e.memo ? "  " + e.memo : ""}`;
    }).join("\n");
  const csvEsc = (s) => (/[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s);
  const buildCsv = () =>
    ["日付,カテゴリ,金額,メモ,出発駅,到着駅,往復", ...sorted.map((e) =>
      [keyToDisp(e.dateKey), catName(e.categoryId), e.amount, e.memo || "",
        e.fromName || "", e.toName || "", e.fromName ? (e.round ? "往復" : "片道") : ""
      ].map((x) => csvEsc(String(x))).join(","))].join("\n");
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
        {e.fromName && e.toName && (
          <div className="exp-route">
            <span className="exp-rt">{e.fromName}<span className="exp-rt-arw">→</span>{e.toName}</span>
            {e.round && <span className="exp-rt-badge">往復</span>}
          </div>
        )}
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
        <button className="icon-btn" aria-label="駅・区間" onClick={() => setStationModal(true)}>🚃</button>
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

      {/* 🚃 旅費交通費の入力パネル */}
      {transit && (() => {
        const fare = findFare(transit.fromId, transit.toId);
        const known = !!fare;
        const stChips = (which) => {
          const selId = which === "from" ? transit.fromId : transit.toId;
          return (
            <div className="tr-chips">
              {stations.map((s) => (
                <button
                  key={s.id}
                  className={"tr-chip" + (selId === s.id ? " on" : "")}
                  onClick={() => (which === "from" ? pickFrom(s.id) : pickTo(s.id))}
                >{s.name}</button>
              ))}
              {addSt === which ? (
                <input
                  className="f-input tr-newst" autoFocus placeholder="駅名"
                  value={addStName}
                  onChange={(e) => setAddStName(e.target.value)}
                  onBlur={() => commitAddStation(which)}
                  onKeyDown={(e) => e.key === "Enter" && commitAddStation(which)}
                />
              ) : (
                <button className="tr-chip tr-chip-add" onClick={() => { setAddSt(which); setAddStName(""); }}>＋駅</button>
              )}
            </div>
          );
        };
        return (
          <div className="overlay" onClick={() => setTransit(null)}>
            <div className="panel" onClick={(e) => e.stopPropagation()}>
              <h3>
                🚃 {transitCat?.name || "旅費交通費"}
                <button className="tr-gear" aria-label="駅・区間の設定" onClick={() => setStationModal(true)}>⚙︎</button>
              </h3>

              {stations.length === 0 && (
                <p className="panel-note">
                  まだ駅がありません。下の「＋駅」から追加するか、⚙︎で駅と区間をまとめて登録できます💗
                </p>
              )}

              {routeHistory.length > 0 && (
                <>
                  <div className="f-label">よく使う区間</div>
                  <div className="tr-chips">
                    {routeHistory.map((r) => {
                      const on = transit.fromId === r.fromId && transit.toId === r.toId;
                      return (
                        <button
                          key={r.fromId + ">" + r.toId}
                          className={"tr-hist" + (on ? " on" : "")}
                          onClick={() => pickRoute(r)}
                        >{r.fromName}<span className="exp-rt-arw">→</span>{r.toName}</button>
                      );
                    })}
                  </div>
                </>
              )}

              <div className="f-label">出発駅</div>
              {stChips("from")}
              <div className="f-label">到着駅</div>
              {stChips("to")}

              <div className="tr-row">
                <button
                  className={"tr-round" + (transit.round ? " on" : "")}
                  aria-pressed={transit.round}
                  onClick={toggleRound}
                >{transit.round ? "🔁 往復" : "→ 片道"}</button>
                <span className="tr-fare-hint">
                  {known
                    ? `登録運賃 ${yen(fare.fare)}${transit.round ? " ×2" : ""}`
                    : (transit.fromId && transit.toId ? "未登録の区間" : "駅をえらんでね")}
                </span>
              </div>

              <div className="f-label">金額</div>
              <div className="exp-amt-field">
                <span className="exp-yen-big">¥</span>
                <input
                  className="exp-amt-input" inputMode="numeric" pattern="[0-9]*"
                  placeholder="0" value={transit.amount ? Number(transit.amount).toLocaleString("ja-JP") : ""}
                  onChange={(e) => setTransit((o) => ({ ...o, amount: e.target.value.replace(/[^0-9]/g, "") }))}
                />
              </div>

              {!known && transit.fromId && transit.toId && (
                <button
                  className={"tr-savefare" + (transit.saveFare ? " on" : "")}
                  onClick={() => setTransit((o) => ({ ...o, saveFare: !o.saveFare }))}
                >
                  <span className="tr-savebox">{transit.saveFare ? "✓" : ""}</span>
                  この区間を登録する（片道 {yen(transit.round
                    ? Math.round((parseInt(transit.amount, 10) || 0) / 2)
                    : (parseInt(transit.amount, 10) || 0))}）
                </button>
              )}

              <div className="f-label">メモ（任意）</div>
              <input
                className="f-input" placeholder="用件など"
                value={transit.memo} onChange={(e) => setTransit((o) => ({ ...o, memo: e.target.value }))}
              />
              <div className="f-label">日付</div>
              {dateChips(transit.date, (d) => setTransit((o) => ({ ...o, date: d })))}

              <div className="panel-btns">
                <button className="p-copy" onClick={submitTransit}>{transit.mode === "new" ? "記録する" : "保存"}</button>
                {transit.mode === "edit" && <button className="p-del" onClick={deleteTransit}>削除</button>}
                <button className="p-close" onClick={() => setTransit(null)}>閉じる</button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* 🚃 駅・区間マスタ */}
      {stationModal && (
        <div className="overlay station-over" onClick={closeStationModal}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>🚃 駅と区間</h3>
            <p className="panel-note">登録した運賃から自動入力します（通信なし・オフラインでも動きます）。</p>

            <div className="f-label">駅</div>
            {stations.map((s, i) => (
              <div className="mem-row" key={s.id}>
                <button
                  className={"tr-def" + (room.defaultFromId === s.id ? " on" : "")}
                  aria-label="既定の出発駅にする"
                  onClick={() => onRoomChange({ defaultFromId: room.defaultFromId === s.id ? null : s.id })}
                >{room.defaultFromId === s.id ? "★" : "☆"}</button>
                <input className="f-input" style={{ flex: 1, minWidth: 0 }} placeholder="駅名（例: 武蔵小杉）"
                  value={s.name} onChange={(e) => updateStation(s.id, { name: e.target.value })} />
                <button className="mem-btn" disabled={i === 0} onClick={() => moveStation(i, -1)} aria-label="上へ">↑</button>
                <button className="mem-btn" disabled={i === stations.length - 1} onClick={() => moveStation(i, 1)} aria-label="下へ">↓</button>
                <button className="mem-btn" style={stDel === s.id ? { background: "#e23d7c", color: "#fff" } : undefined}
                  onClick={() => removeStation(s.id)} aria-label="削除">{stDel === s.id ? "!" : "🗑"}</button>
              </div>
            ))}
            {stations.length === 0 && <p className="panel-note">駅を追加してね💗</p>}
            <p className="panel-note">★ = 既定の出発駅（最初に選ばれるだけで、その場で変更できます）</p>

            <div className="f-label">区間（片道運賃）</div>
            {fares.map((f) => (
              <div className="mem-row" key={f.id} style={{ flexWrap: "wrap" }}>
                <select className="f-input tr-sel" value={f.fromId} onChange={(e) => updateFare(f.id, { fromId: e.target.value })}>
                  <option value="">出発</option>
                  {stations.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
                <span className="exp-rt-arw">→</span>
                <select className="f-input tr-sel" value={f.toId} onChange={(e) => updateFare(f.id, { toId: e.target.value })}>
                  <option value="">到着</option>
                  {stations.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
                <button className="mem-btn" style={fareDel === f.id ? { background: "#e23d7c", color: "#fff" } : undefined}
                  onClick={() => removeFare(f.id)} aria-label="削除">{fareDel === f.id ? "!" : "🗑"}</button>
                <div style={{ display: "flex", gap: 6, flexBasis: "100%", marginTop: 4, alignItems: "center" }}>
                  <span className="exp-yen">¥</span>
                  <input className="f-input" style={{ width: 92 }} inputMode="numeric" value={f.fare || ""}
                    onChange={(e) => updateFare(f.id, { fare: parseInt(e.target.value.replace(/[^0-9]/g, ""), 10) || 0 })} />
                  <input className="f-input" style={{ flex: 1, minWidth: 0 }} placeholder="メモ（任意）"
                    value={f.memo || ""} onChange={(e) => updateFare(f.id, { memo: e.target.value })} />
                </div>
              </div>
            ))}
            {fares.length === 0 && <p className="panel-note">区間を追加してね（逆方向も同じ運賃で使えます）💗</p>}

            <div className="f-label">往復トグルの初期状態</div>
            <div className="seg">
              <button className={!room.roundTripDefault ? "on" : ""} onClick={() => onRoomChange({ roundTripDefault: false })}>片道</button>
              <button className={room.roundTripDefault ? "on" : ""} onClick={() => onRoomChange({ roundTripDefault: true })}>往復</button>
            </div>

            <div className="panel-btns">
              <button className="p-copy" onClick={addStation}>＋ 駅</button>
              <button className="p-copy" disabled={stations.length < 2} onClick={addFare}>＋ 区間</button>
              <button className="p-close" onClick={closeStationModal}>閉じる</button>
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
            {routeTotals.length > 0 && (
              <>
                <div className="f-label">🚃 区間ごとの合計（全期間）</div>
                <div className="sum-list">
                  {routeTotals.map((r) => (
                    <div className="sum-row" key={r.pair}>
                      <span className="sum-route">{r.pair}<span className="sum-n">{r.n}回</span></span>
                      <span className="sum-amt">{yen(r.total)}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
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
