import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey } from "./storage.js";
import { todayKey, uid, keyToDisp, keyToDate, pad, WEEKDAYS, addDays } from "./format.js";

/* 📝 スマートノートルーム（岡田斗司夫のスマートノート ステップ1）
   毎日「やったこと」を一文で5個書いて、それぞれ1〜5点をつける。それだけ。
   見返しはカレンダー／リスト。点数で絞り込める（5点だけ、1点だけ…）。
   データ: room-data-v1:<id> = { items: [{ id, dateKey, text, score(1〜5|null), at }] } */

const SLOTS = 5;
const SCORES = [5, 4, 3, 2, 1];
const LIST_STEP = 30; // リストで一度に出す日数

const monthOf = (k) => k.slice(0, 7);
const shiftMonth = (mk, n) => {
  const [y, m] = mk.split("-").map(Number);
  const d = new Date(y, m - 1 + n, 1);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
};
// 同じ日の中は書いた順
const byAt = (a, b) => (a.at || 0) - (b.at || 0);

function ScoreDots({ value, onPick }) {
  return (
    <div className="sn-scores">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className={"sn-sc sn-s" + n + (value === n ? " on" : "")}
          aria-label={`${n}点`}
          // 押した瞬間に入力欄のフォーカスを外さない（外れると未保存の一文が先に確定して押下が消える）
          onPointerDown={(e) => e.preventDefault()}
          onClick={() => onPick(n)}
        >{n}</button>
      ))}
    </div>
  );
}

/* 1行ぶん。文字は手元で持って、フォーカスが外れたとき／点数を押したときに確定する */
function SlotRow({ index, item, onSave }) {
  const [draft, setDraft] = useState(item ? item.text : "");
  const commit = (score) => {
    const text = draft.trim();
    onSave(item, text, score === undefined ? item?.score ?? null : score);
  };
  return (
    <div className={"sn-slot" + (item?.score ? " sn-has" + item.score : "")}>
      <span className="sn-no">{index + 1}</span>
      <input
        className="sn-in"
        value={draft}
        placeholder={index === 0 ? "今日やったこと" : "やったこと"}
        enterKeyHint="next"
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => { if ((item ? item.text : "") !== draft.trim()) commit(); }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.nativeEvent.isComposing) {
            e.preventDefault();
            const next = e.currentTarget.closest(".sn-slot")?.nextElementSibling?.querySelector(".sn-in");
            if (next) next.focus(); else e.currentTarget.blur();
          }
        }}
      />
      <ScoreDots
        value={item?.score ?? null}
        onPick={(n) => {
          if (!draft.trim()) return;
          commit(item?.score === n ? null : n); // 同じ点をもう一度押したら外す
        }}
      />
    </div>
  );
}

export default function SmartRoom({ room, onBack, onMeta, showToast, pinned }) {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [day, setDay] = useState(todayKey());
  const [mode, setMode] = useState("cal"); // 'cal' | 'list'
  const [month, setMonth] = useState(monthOf(todayKey()));
  const [filter, setFilter] = useState([]); // 絞り込む点数（空=ぜんぶ）
  const [listDays, setListDays] = useState(LIST_STEP);
  const itemsRef = useRef([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && Array.isArray(v.items)) { itemsRef.current = v.items; setItems(v.items); }
      } catch (e) { /* no data */ } finally { setLoaded(true); }
    })();
  }, [room.id]);

  const persist = async (next) => {
    itemsRef.current = next;
    setItems(next);
    try {
      await set(roomDataKey(room.id), { items: next });
      const last = [...next].sort(byAt).pop();
      onMeta({
        preview: last ? `${last.score ? last.score + "点 " : ""}${last.text}`.slice(0, 40) : "",
        lastAt: Date.now()
      });
    } catch (e) { showToast("保存に失敗しました。ストレージを確認してね"); }
  };

  const saveSlot = (item, text, score) => {
    const cur = itemsRef.current;
    if (item) {
      // 文字を消したら、その行ごと消す
      if (!text) return persist(cur.filter((x) => x.id !== item.id));
      return persist(cur.map((x) => (x.id === item.id ? { ...x, text, score } : x)));
    }
    if (!text) return;
    persist([...cur, { id: uid(), dateKey: day, text, score, at: Date.now() }]);
  };

  const dayItems = items.filter((x) => x.dateKey === day).sort(byAt);
  const slotCount = Math.max(SLOTS, dayItems.length + (dayItems.length >= SLOTS ? 1 : 0));

  const hit = (x) => filter.length === 0 || filter.includes(x.score);
  const toggleFilter = (n) => setFilter((f) => (f.includes(n) ? f.filter((v) => v !== n) : [...f, n]));
  const countBy = (n) => items.filter((x) => x.score === n).length;

  const byDay = {};
  for (const x of items) (byDay[x.dateKey] ||= []).push(x);

  const openDay = (k) => {
    setDay(k);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  /* ---------- カレンダー ---------- */
  const first = keyToDate(`${month}-01`);
  const lead = first.getDay();
  const daysIn = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(`${month}-${pad(d)}`);
  const today = todayKey();
  const monthHits = filter.length
    ? items.filter((x) => monthOf(x.dateKey) === month && hit(x))
        .sort((a, b) => (a.dateKey < b.dateKey ? 1 : a.dateKey > b.dateKey ? -1 : byAt(a, b)))
    : [];

  /* ---------- リスト ---------- */
  const listKeys = Object.keys(byDay).filter((k) => byDay[k].some(hit)).sort().reverse();
  const shownKeys = listKeys.slice(0, listDays);

  const [my, mm] = month.split("-");

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title">{room.name}</div>
          <div className="hd-sub">{loaded ? `${Object.keys(byDay).length}日・${items.length}個` : "Nachumin Lifelog"}</div>
        </div>
      </div>

      {pinned}

      <div className="sn-scroll" ref={scrollRef}>
        {/* 書く */}
        <div className="sn-card">
          <div className="sn-dayrow">
            <button className="sn-arrow" aria-label="前の日" onClick={() => setDay(addDays(day, -1))}>‹</button>
            <label className="sn-day">
              {day === today ? "TODAY " : ""}{keyToDisp(day)} {WEEKDAYS[keyToDate(day).getDay()]}
              <input type="date" value={day} onChange={(e) => e.target.value && setDay(e.target.value)} />
            </label>
            <button className="sn-arrow" aria-label="次の日" disabled={day >= today} onClick={() => setDay(addDays(day, 1))}>›</button>
            {day !== today && <button className="sn-back-today" onClick={() => setDay(today)}>今日</button>}
          </div>
          {loaded && Array.from({ length: slotCount }, (_, i) => {
            const it = dayItems[i];
            return <SlotRow key={it ? it.id : `${day}-e${i}`} index={i} item={it} onSave={saveSlot} />;
          })}
        </div>

        {/* 見る */}
        <div className="sn-tabs">
          <button className={"sn-tab" + (mode === "cal" ? " on" : "")} onClick={() => setMode("cal")}>📅 カレンダー</button>
          <button className={"sn-tab" + (mode === "list" ? " on" : "")} onClick={() => setMode("list")}>📜 リスト</button>
        </div>
        <div className="sn-filters">
          {SCORES.map((n) => (
            <button
              key={n}
              className={"sn-f sn-s" + n + (filter.includes(n) ? " on" : "")}
              onClick={() => toggleFilter(n)}
            >{n}点<small>{countBy(n)}</small></button>
          ))}
          {filter.length > 0 && <button className="sn-fclear" onClick={() => setFilter([])}>ぜんぶ</button>}
        </div>

        {mode === "cal" && (
          <>
            <div className="sn-mhead">
              <button className="sn-arrow" aria-label="前の月" onClick={() => setMonth(shiftMonth(month, -1))}>‹</button>
              <span className="sn-mlabel">{my}.{mm}</span>
              <button className="sn-arrow" aria-label="次の月" onClick={() => setMonth(shiftMonth(month, 1))}>›</button>
            </div>
            <div className="sn-cal">
              {WEEKDAYS.map((w) => <div key={w} className="sn-dow">{w[0]}</div>)}
              {cells.map((k, i) => {
                if (!k) return <div key={"b" + i} />;
                const its = (byDay[k] || []).slice().sort((a, b) => (b.score || 0) - (a.score || 0) || byAt(a, b));
                const hits = its.filter(hit);
                const dim = filter.length > 0 && hits.length === 0;
                return (
                  <button
                    key={k}
                    className={"sn-cell" + (k === day ? " sel" : "") + (k === today ? " today" : "") + (dim ? " dim" : "") + (its.length ? " has" : "")}
                    onClick={() => openDay(k)}
                  >
                    <span className="sn-dn">{Number(k.slice(8))}</span>
                    {/* ぱっと見で「この日これしてた」が分かるよう、いちばん点の高いことを文字で出す */}
                    {(filter.length ? hits : its)[0] && (
                      <span className={"sn-ct sn-s" + ((filter.length ? hits : its)[0].score || 0)}>
                        {(filter.length ? hits : its)[0].text}
                      </span>
                    )}
                    <span className="sn-pips">
                      {(filter.length ? hits : its).slice(0, 6).map((x) => (
                        <i key={x.id} className={"sn-pip sn-s" + (x.score || 0)} />
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>
            {filter.length > 0 && (
              <div className="sn-list">
                {monthHits.length === 0 && <div className="sn-none">この月には無いよ</div>}
                {monthHits.map((x) => (
                  <button key={x.id} className="sn-li" onClick={() => openDay(x.dateKey)}>
                    <span className={"sn-badge sn-s" + x.score}>{x.score}</span>
                    <span className="sn-lt">{x.text}</span>
                    <span className="sn-ld">{x.dateKey.slice(5).replace("-", "/")}</span>
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {mode === "list" && (
          <div className="sn-list">
            {loaded && shownKeys.length === 0 && <div className="sn-none">{filter.length ? "この点数のものはまだ無いよ" : "まだ何も書いてないよ📝"}</div>}
            {shownKeys.map((k) => (
              <div key={k} className="sn-group">
                <button className="sn-gday" onClick={() => openDay(k)}>
                  {keyToDisp(k)} {WEEKDAYS[keyToDate(k).getDay()]}
                </button>
                {byDay[k].filter(hit).sort(byAt).map((x) => (
                  <button key={x.id} className="sn-li" onClick={() => openDay(k)}>
                    <span className={"sn-badge sn-s" + (x.score || 0)}>{x.score || "–"}</span>
                    <span className="sn-lt">{x.text}</span>
                  </button>
                ))}
              </div>
            ))}
            {listKeys.length > shownKeys.length && (
              <button className="sn-more" onClick={() => setListDays((n) => n + LIST_STEP)}>
                ↓ もっと前を見る（あと{listKeys.length - shownKeys.length}日）
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
