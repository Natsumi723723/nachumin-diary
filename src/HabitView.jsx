import { useState, useMemo } from "react";
import { todayKey, pad, WEEKDAYS } from "./format.js";

/* 🎯 習慣ビュー: 横=その月の1日〜末日 / 縦=習慣 の月間スタンプ表。
   セルタップでその日の達成をトグル（過去日も修正可・未来日は不可）。
   毎日の習慣グループ → 区切り線 → 毎週の習慣グループ の順に並べる。
   日付キーは29時制(5:00区切り)で作られたものをそのまま使う。 */
export default function HabitView({ habits, habitAch, onToggle, onClose, onManage }) {
  const today = todayKey();
  const [month, setMonth] = useState(today.slice(0, 7)); // 開いたときは今月
  const [y, m] = month.split("-").map(Number);
  const lastDay = new Date(y, m, 0).getDate();
  const thisMonth = today.slice(0, 7);

  const days = useMemo(() => {
    const arr = [];
    for (let d = 1; d <= lastDay; d++) {
      const key = `${y}-${pad(m)}-${pad(d)}`;
      arr.push({
        d,
        key,
        dow: new Date(y, m - 1, d).getDay(),
        isToday: key === today,
        future: key > today
      });
    }
    return arr;
  }, [y, m, lastDay, today]);

  const shiftMonth = (delta) => {
    const nd = new Date(y, m - 1 + delta, 1);
    setMonth(`${nd.getFullYear()}-${pad(nd.getMonth() + 1)}`);
  };

  const isTarget = (h, dow) => (h.freq === "weekly" ? (h.days || []).includes(dow) : true);

  // その月の達成回数 / 対象日のうち今日までに来た日数
  const stat = (h) => {
    let done = 0;
    let total = 0;
    for (const dd of days) {
      if (!isTarget(h, dd.dow)) continue;
      if (!dd.future) total += 1;
      if ((habitAch[dd.key] || []).includes(h.id)) done += 1;
    }
    return { done, total };
  };

  const daily = habits.filter((h) => h.freq !== "weekly");
  const weekly = habits.filter((h) => h.freq === "weekly");

  const row = (h) => {
    const { done, total } = stat(h);
    const ratio = total ? done / total : 0;
    const lv = done === 0 ? 0 : ratio >= 0.8 ? 3 : ratio >= 0.5 ? 2 : ratio >= 0.25 ? 1 : 0;
    return (
      <div className="hv-row" key={h.id}>
        <div className="hv-name">
          <span className="hv-emoji">{h.emoji || "🩷"}</span>
          <span className="hv-nm">{h.name}</span>
        </div>
        <div className="hv-cells">
          {days.map((dd) => {
            const target = isTarget(h, dd.dow);
            const on = (habitAch[dd.key] || []).includes(h.id);
            return (
              <button
                key={dd.key}
                className={
                  "hv-cell" + (on ? " on" : "") + (target ? "" : " off") +
                  (dd.isToday ? " today" : "") + (dd.future ? " future" : "")
                }
                disabled={!target || dd.future}
                aria-label={`${m}月${dd.d}日 ${h.name}${on ? " 達成ずみ" : ""}`}
                aria-pressed={on}
                onClick={() => onToggle(dd.key, h.id)}
              >{on ? "♥" : ""}</button>
            );
          })}
        </div>
        <div className={"hv-count lv" + lv}>
          <span className="hv-n">{done}</span>
          <span className="hv-d">/{total}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="hv-screen">
      <div className="hd">
        <button className="back-btn" aria-label="とじる" onClick={onClose}>‹</button>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title">🎯 習慣ビュー</div>
          <div className="hd-sub">スタンプで振り返る</div>
        </div>
        <button
          className="icon-btn" style={{ marginLeft: "auto" }}
          aria-label="習慣を編集" onClick={onManage}
        >⚙︎</button>
      </div>

      <div className="hv-monthbar">
        <button className="hv-mbtn" aria-label="前の月" onClick={() => shiftMonth(-1)}>‹</button>
        <div className="hv-month">{y}年{m}月</div>
        <button className="hv-mbtn" aria-label="次の月" onClick={() => shiftMonth(1)}>›</button>
        {month !== thisMonth && (
          <button className="hv-now" onClick={() => setMonth(thisMonth)}>今月</button>
        )}
      </div>

      {habits.length === 0 ? (
        <div className="empty">
          まだ習慣がありません。{"\n"}右上の⚙︎から追加してね💗
        </div>
      ) : (
        <div className="hv-scroll">
          <div className="hv-table">
            <div className="hv-row hv-head">
              <div className="hv-name hv-corner">習慣</div>
              <div className="hv-cells">
                {days.map((dd) => (
                  <div
                    key={dd.key}
                    className={
                      "hv-dcell" + (dd.isToday ? " today" : "") +
                      (dd.dow === 0 ? " sun" : dd.dow === 6 ? " sat" : "")
                    }
                  >
                    <span className="hv-dnum">{dd.d}</span>
                    <span className="hv-dow">{WEEKDAYS[dd.dow]}</span>
                  </div>
                ))}
              </div>
              <div className="hv-count hv-corner">今月</div>
            </div>

            {daily.map(row)}

            {weekly.length > 0 && (
              <div className="hv-seprow">
                <span className="hv-seplabel">毎週の習慣</span>
              </div>
            )}
            {weekly.map(row)}
          </div>
        </div>
      )}
    </div>
  );
}
