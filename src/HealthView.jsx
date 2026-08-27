import { useState, useMemo } from "react";
import { keyToDisp, addDays, diffDays, buildCycles, predictNextPeriod, todayKey } from "./format.js";

/* 🌡️ 体調ビュー: 生理周期ごとに過去分を縦に並べて、体調の出かたのクセを見る。
   - 「生理開始から」= 各行の左端が生理1日目（周期のどのへんか）
   - 「次の生理まで」= 各行の右端が次の生理の前日（＝生理の何日前かが縦に揃う）
   進行中の周期は予測日を使って右揃えする。 */
const MAXCOL = 40; // 表示する最大日数（極端に長い周期は切る）

export default function HealthView({
  periodDays, symptoms, symptomLog, onTogglePeriod, onToggleSymptom, onClose, onManage
}) {
  const today = todayKey();
  const [align, setAlign] = useState("before"); // "start" | "before"
  const cycles = useMemo(() => buildCycles(periodDays), [periodDays]);
  const pred = useMemo(() => predictNextPeriod(cycles, today), [cycles, today]);
  const symOf = (id) => symptoms.find((s) => s.id === id);
  const todaySyms = symptomLog[today] || [];
  const isPeriod = (k) => periodDays.includes(k);

  /* 各周期を「日付の配列」にする。進行中の周期は今日まで（右揃え時は予測日まで） */
  const rows = useMemo(() => cycles.map((c) => {
    let len;
    /* 進行中は「今日」と「最後の生理日」の遅い方まで。
       さらに数日ぶん余白を出して、伸びたぶんを足せるようにしておく */
    const baseLen = Math.max(diffDays(c.start, today) + 1, diffDays(c.start, c.end) + 1) + 3;
    if (c.cycle != null) len = c.cycle;                       // 確定した周期
    else if (align === "before" && pred) len = Math.max(diffDays(c.start, pred.next), baseLen);
    else len = baseLen;                                        // 進行中
    len = Math.min(Math.max(len, 1), MAXCOL);
    const days = [];
    for (let i = 0; i < len; i++) days.push(addDays(c.start, i));
    return { ...c, days };
  }), [cycles, align, pred, today]);

  const width = Math.min(MAXCOL, Math.max(1, ...rows.map((r) => r.days.length)));

  // 列見出し: 左揃え=1,2,3… / 右揃え=…-3,-2,-1（生理の何日前か）
  const headLabels = [];
  for (let i = 0; i < width; i++) {
    headLabels.push(align === "start" ? String(i + 1) : String(-(width - i)));
  }

  // その行のセルを、指定の揃え方で width 列に配置する（無い所は null）
  const laidOut = (r) => {
    const cells = new Array(width).fill(null);
    if (align === "start") {
      r.days.slice(0, width).forEach((d, i) => { cells[i] = d; });
    } else {
      const src = r.days.slice(-width);
      src.forEach((d, i) => { cells[width - src.length + i] = d; });
    }
    return cells;
  };

  return (
    <div className="hl-screen">
      <div className="hd">
        <button className="back-btn" aria-label="とじる" onClick={onClose}>‹</button>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title">🌡️ 体調</div>
          <div className="hd-sub">生理周期と体調のクセを見る</div>
        </div>
        <button className="icon-btn" style={{ marginLeft: "auto" }} aria-label="項目の設定" onClick={onManage}>⚙︎</button>
      </div>

      <div className="hl-scroll">
        {/* 次回予測 */}
        <div className={"hl-pred" + (pred && pred.daysLeft <= 3 ? " soon" : "")}>
          {pred ? (
            <>
              <div className="hl-pred-l">次の生理（予測）</div>
              <div className="hl-pred-d">
                {keyToDisp(pred.next).slice(5)}
                <span className="hl-pred-in">
                  {pred.daysLeft > 0 ? `あと${pred.daysLeft}日` : pred.daysLeft === 0 ? "今日かも" : `${-pred.daysLeft}日すぎ`}
                </span>
              </div>
              <div className="hl-pred-sub">
                平均 {pred.avg}日周期
                {pred.count > 1 ? `（${pred.min}〜${pred.max}日 / ${pred.count}回分）` : `（${pred.count}回分）`}
              </div>
            </>
          ) : (
            <>
              <div className="hl-pred-l">次の生理（予測）</div>
              <div className="hl-pred-d">まだ出せません</div>
              <div className="hl-pred-sub">生理を2回ぶん記録すると予測できます🩷</div>
            </>
          )}
        </div>

        {/* 今日の記録 */}
        <div className="f-label">今日の記録</div>
        <div className="hl-today">
          <button
            className={"hl-chip hl-period" + (isPeriod(today) ? " on" : "")}
            onClick={() => onTogglePeriod(today)}
          >🩸 生理{isPeriod(today) ? " ✓" : ""}</button>
          {symptoms.map((s) => {
            const on = todaySyms.includes(s.id);
            return (
              <button
                key={s.id}
                className={"hl-chip" + (on ? " on" : "")}
                style={on ? { background: s.color, borderColor: s.color, color: "#fff" } : { borderColor: s.color, color: s.color }}
                onClick={() => onToggleSymptom(today, s.id)}
              >{s.emoji ? s.emoji + " " : ""}{s.name}{on ? " ✓" : ""}</button>
            );
          })}
          {symptoms.length === 0 && (
            <button className="hl-chip hl-add" onClick={onManage}>＋ 体調の項目を作る</button>
          )}
        </div>

        {/* 周期チャート */}
        <div className="f-label" style={{ marginTop: 10 }}>周期ごとの記録</div>
        <div className="seg hl-seg">
          <button className={align === "start" ? "on" : ""} onClick={() => setAlign("start")}>生理開始から</button>
          <button className={align === "before" ? "on" : ""} onClick={() => setAlign("before")}>次の生理まで</button>
        </div>
        <p className="panel-note">
          マスをタップすると生理のオン/オフを切り替えられます。{" "}
          {align === "before"
            ? "右端が「次の生理の前日」。縦に見ると、生理の何日前に出やすいかが分かります。"
            : "左端が「生理1日目」。縦に見ると、周期のどのあたりで出やすいかが分かります。"}
        </p>

        {rows.length === 0 ? (
          <div className="empty">まだ生理の記録がありません。{"\n"}上の「🩸 生理」から記録してね💗</div>
        ) : (
          <div className="hl-chartwrap">
            <div className="hl-chart">
              <div className="hl-row hl-head">
                <div className="hl-rowlabel">周期</div>
                <div className="hl-cells">
                  {headLabels.map((t, i) => (
                    <div key={i} className="hl-dcell">{t}</div>
                  ))}
                </div>
              </div>
              {rows.map((r) => (
                <div className="hl-row" key={r.start}>
                  <div className="hl-rowlabel">
                    <span className="hl-rl-date">{keyToDisp(r.start).slice(5)}</span>
                    <span className="hl-rl-len">{r.cycle != null ? `${r.cycle}日` : "進行中"}</span>
                  </div>
                  <div className="hl-cells">
                    {laidOut(r).map((d, i) => {
                      if (!d) return <div key={i} className="hl-cell blank" />;
                      const per = isPeriod(d);
                      const syms = (symptomLog[d] || []).map(symOf).filter(Boolean);
                      const future = d > today;
                      return (
                        <button
                          key={i}
                          className={"hl-cell" + (per ? " period" : "") + (d === today ? " today" : "") + (future ? " future" : "")}
                          title={`${keyToDisp(d)}${per ? " 生理" : ""}${syms.length ? " " + syms.map((s) => s.name).join("・") : ""}`}
                          aria-label={`${keyToDisp(d)} の生理を切り替え`}
                          onClick={() => onTogglePeriod(d)}
                        >
                          {syms.slice(0, 3).map((s) => (
                            <span key={s.id} className="hl-dot" style={{ background: s.color }} />
                          ))}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 凡例 */}
        {(symptoms.length > 0 || rows.length > 0) && (
          <div className="hl-legend">
            <span className="hl-lg"><span className="hl-lg-box period" />生理</span>
            {symptoms.map((s) => (
              <span className="hl-lg" key={s.id}>
                <span className="hl-dot" style={{ background: s.color }} />{s.name}
              </span>
            ))}
          </div>
        )}

        {/* 履歴 */}
        {rows.length > 0 && (
          <>
            <div className="f-label" style={{ marginTop: 12 }}>これまでの記録</div>
            <div className="sum-list">
              {rows.map((r) => (
                <div className="sum-row" key={r.start}>
                  <span>
                    {keyToDisp(r.start).slice(5)}
                    {r.length > 1 ? `〜${keyToDisp(r.end).slice(5)}` : ""}
                    <span className="hl-hist-len">（{r.length}日間）</span>
                  </span>
                  <span className="sum-amt">{r.cycle != null ? `周期 ${r.cycle}日` : "進行中"}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
