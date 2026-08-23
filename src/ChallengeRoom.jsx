import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey } from "./storage.js";
import { keyToDisp, todayKey, nowTime, uid, addDays, diffDays } from "./format.js";
import ConfirmDialog from "./ConfirmDialog.jsx";
import { ROOM_THEMES, DEFAULT_THEME } from "./theme.js";

/* チャレンジ型ルーム: 「note100記事」のように目標数を決めて、進捗をぱっと見で確認する。
   1件記録するたびに +1。マスが埋まっていくのが見えるほど続く、を狙った作り。 */

const MAX_CELLS = 200; // マス表示の上限（これを超える目標はゲージのみ）

// 節目（お祝いを出す数）: 1/4, 1/2, 3/4, 達成 ＋ 10の倍数
const milestoneOf = (n, target) => {
  if (n === target) return "complete";
  if (n === Math.floor(target * 0.75)) return "75";
  if (n === Math.floor(target * 0.5)) return "50";
  if (n === Math.floor(target * 0.25)) return "25";
  if (n > 0 && n % 10 === 0) return "10";
  return null;
};

export default function ChallengeRoom({ room, onBack, onMeta, showToast, pinned }) {
  const [challenges, setChallenges] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [editor, setEditor] = useState(null);   // {mode:'new'|'edit', ...}
  const [detail, setDetail] = useState(null);   // 記録一覧を見るチャレンジのid
  const [memoEdit, setMemoEdit] = useState(null); // メモをあとから書く {cid, rid, text}
  const [undo, setUndo] = useState(null);          // 押し間違い用の取り消し {cid, rid, name}
  const undoTimer = useRef(null);
  const [confirm, setConfirm] = useState(null);
  const [celebrate, setCelebrate] = useState(null); // お祝い演出中のチャレンジid
  const celebTimer = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && Array.isArray(v.challenges)) setChallenges(v.challenges);
      } catch (e) { /* no data */ } finally { setLoaded(true); }
    })();
  }, [room.id]);

  const persist = async (next) => {
    setChallenges(next);
    try {
      await set(roomDataKey(room.id), { challenges: next });
      // 一覧のプレビューは「いちばん進んでいるチャレンジ」を出す
      const top = [...next].sort((a, b) => (b.records?.length || 0) - (a.records?.length || 0))[0];
      onMeta({
        preview: top ? `${top.emoji || "🏁"} ${top.name} ${top.records?.length || 0}/${top.target}` : "",
        lastAt: Date.now()
      });
    } catch (e) { showToast("保存に失敗しました。ストレージを確認してね"); }
  };

  const countOf = (c) => (c.records || []).length;

  /* +1 する。タップ＝その場で加算（メモはあとから書ける）。
     節目に届いたらお祝い、直後は取り消しバーを出す */
  const addOne = (c) => {
    const rec = { id: uid(), dateKey: todayKey(), time: nowTime(), memo: "" };
    const next = challenges.map((x) => (x.id === c.id ? { ...x, records: [...(x.records || []), rec] } : x));
    persist(next);
    setUndo({ cid: c.id, rid: rec.id, name: c.name });
    clearTimeout(undoTimer.current);
    undoTimer.current = setTimeout(() => setUndo(null), 6000);
    const n = countOf(c) + 1;
    const ms = milestoneOf(n, c.target);
    if (ms) {
      setCelebrate(c.id);
      clearTimeout(celebTimer.current);
      celebTimer.current = setTimeout(() => setCelebrate(null), 1600);
      const msg = ms === "complete" ? `🎉 ${c.name} 達成！！ ${n}/${c.target} やりきった🩷`
        : ms === "75" ? `✨ ${n}個！ 残り${c.target - n}個だよ、あと少し🩷`
        : ms === "50" ? `🎊 半分きた！ ${n}/${c.target} 🩷`
        : ms === "25" ? `💗 ${n}個！ 4分の1いったよ`
        : `🩷 ${n}個 達成！`;
      showToast(msg, 4000);
    }
  };

  const removeRecord = (cid, rid) => {
    persist(challenges.map((x) => (x.id === cid ? { ...x, records: (x.records || []).filter((r) => r.id !== rid) } : x)));
    if (undo && undo.rid === rid) { clearTimeout(undoTimer.current); setUndo(null); }
  };
  // 押し間違いの取り消し（直前の+1を取り消す）
  const undoAdd = () => {
    if (!undo) return;
    removeRecord(undo.cid, undo.rid);
    setCelebrate(null);
    clearTimeout(undoTimer.current);
    setUndo(null);
  };
  // メモをあとから書く／書き直す
  const saveMemo = () => {
    const { cid, rid, text } = memoEdit;
    persist(challenges.map((x) => (x.id === cid
      ? { ...x, records: (x.records || []).map((r) => (r.id === rid ? { ...r, memo: text.trim() } : r)) }
      : x)));
    setMemoEdit(null);
  };

  /* チャレンジの追加・編集 */
  const openNew = () => setEditor({
    mode: "new", name: "", emoji: "🏁", target: "100", color: DEFAULT_THEME
  });
  const openEdit = (c) => setEditor({
    mode: "edit", id: c.id, name: c.name, emoji: c.emoji || "🏁",
    target: String(c.target), color: c.color || DEFAULT_THEME
  });
  const saveEditor = () => {
    const name = editor.name.trim();
    const target = parseInt(editor.target, 10);
    if (!name) { showToast("チャレンジの名前を入れてね"); return; }
    if (!target || target < 1) { showToast("目標の数を入れてね"); return; }
    if (editor.mode === "new") {
      persist([...challenges, {
        id: uid(), name, emoji: editor.emoji.trim() || "🏁",
        target, color: editor.color, createdAt: Date.now(), records: []
      }]);
    } else {
      persist(challenges.map((x) => (x.id === editor.id
        ? { ...x, name, emoji: editor.emoji.trim() || "🏁", target, color: editor.color } : x)));
    }
    setEditor(null);
  };
  const removeChallenge = (c) => {
    setConfirm({
      message: `チャレンジ「${c.name}」を削除しますか？`
        + (countOf(c) ? `\nこれまでの記録 ${countOf(c)}件 も消えます。` : ""),
      onConfirm: () => {
        persist(challenges.filter((x) => x.id !== c.id));
        setConfirm(null); setEditor(null); setDetail(null);
      }
    });
  };

  /* 完走予定日。記録のある期間からペースを出して、残り個数を割る。
     データが少ないと数字が暴れるので、3件以上＆3日以上たまってから出す */
  const forecastOf = (c) => {
    const recs = c.records || [];
    const n = recs.length;
    if (n >= c.target || n < 3) return null;
    const days = recs.map((r) => r.dateKey).sort();
    const span = diffDays(days[0], days[days.length - 1]) + 1;
    if (span < 3) return null;
    const perDay = n / span;
    if (perDay <= 0) return null;
    const daysLeft = Math.ceil((c.target - n) / perDay);
    return { date: addDays(todayKey(), daysLeft), daysLeft, perDay };
  };

  // 直近7日の記録数（ペースの目安）
  const recentCount = (c) => {
    const from = todayKey();
    const d = new Date(from.slice(0, 4), Number(from.slice(5, 7)) - 1, Number(from.slice(8, 10)) - 6);
    const fromKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return (c.records || []).filter((r) => r.dateKey >= fromKey).length;
  };

  const detailC = challenges.find((c) => c.id === detail);

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{room.name}</div>
          <div className="hd-sub">Nachumin Lifelog</div>
        </div>
        <button className="icon-btn" style={{ marginLeft: "auto" }} aria-label="チャレンジを追加" onClick={openNew}>➕</button>
      </div>

      {pinned}

      <div className="ch-scroll">
        {loaded && challenges.length === 0 && (
          <div className="empty">{"まだチャレンジがありません。\n右上の➕から作ってね💗\n（例: note100記事 / ピンク100）"}</div>
        )}

        {challenges.map((c) => {
          const n = countOf(c);
          const pct = Math.min(100, Math.round((n / c.target) * 100));
          const done = n >= c.target;
          const cells = Math.min(c.target, MAX_CELLS);
          const cols = c.target <= 25 ? 5 : 10;
          const week = recentCount(c);
          return (
            <div
              className={"ch-card" + (celebrate === c.id ? " celebrate" : "") + (done ? " done" : "")}
              key={c.id}
              style={{ "--ch": c.color || DEFAULT_THEME }}
            >
              <div className="ch-head">
                <span className="ch-emoji">{c.emoji || "🏁"}</span>
                <span className="ch-name">{c.name}</span>
                <button className="ch-gear" aria-label="履歴とメモ" onClick={() => setDetail(c.id)}>📋</button>
                <button className="ch-gear" aria-label="設定" onClick={() => openEdit(c)}>⚙︎</button>
              </div>

              <div className="ch-numrow">
                <span className="ch-num">{n}</span>
                <span className="ch-of">/ {c.target}</span>
                <span className="ch-pct">{pct}%</span>
              </div>

              <div className="ch-bar"><span className="ch-bar-in" style={{ width: pct + "%" }} /></div>

              <div className="ch-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                {Array.from({ length: cells }, (_, i) => (
                  <span
                    key={i}
                    className={"ch-cell" + (i < n ? " on" : "") + (i === n - 1 ? " latest" : "")}
                  >{i < n ? "" : i + 1}</span>
                ))}
              </div>
              {c.target > MAX_CELLS && (
                <p className="ch-note-s">※ マス表示は {MAX_CELLS} までです</p>
              )}

              {(() => {
                const fc = forecastOf(c);
                if (!fc) return null;
                return (
                  <div className="ch-forecast">
                    🔮 このペースなら <b>{keyToDisp(fc.date).slice(5)}</b> ごろ達成
                    <span className="ch-fc-sub">
                      （あと{fc.daysLeft > 999 ? "999+" : fc.daysLeft}日 ・ 1日 {fc.perDay >= 1 ? Math.round(fc.perDay * 10) / 10 : Math.round(fc.perDay * 100) / 100}個ペース）
                    </span>
                  </div>
                );
              })()}
              <div className="ch-foot">
                <span className="ch-left">
                  {done ? "🎉 達成しました！" : `あと ${c.target - n}個`}
                  {week > 0 && !done ? <span className="ch-pace">・今週 {week}個</span> : null}
                </span>
                <button className="ch-plus" onClick={() => addOne(c)}>＋1</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 押し間違い用の取り消し（数秒だけ出す） */}
      {undo && (
        <div className="undo-bar">
          <span className="undo-msg">🩷 ＋1したよ</span>
          <button className="undo-btn" onClick={undoAdd}>↩︎ 取り消す</button>
        </div>
      )}

      {/* 記録の一覧 */}
      {detailC && (
        <div className="overlay" onClick={() => setDetail(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>{detailC.emoji} {detailC.name}</h3>
            <p className="panel-note">{countOf(detailC)} / {detailC.target} ・ 新しい順</p>
            {countOf(detailC) === 0 && <p className="panel-note">まだ記録がありません。＋1 から記録してね💗</p>}
            <p className="panel-note">タップするとメモを書けます（あとからでOK）</p>
            <div className="ch-reclist">
              {[...(detailC.records || [])].reverse().map((r, i) => (
                <div className="ch-rec" key={r.id}>
                  <span className="ch-rec-n">{countOf(detailC) - i}</span>
                  <button
                    className="ch-rec-main"
                    onClick={() => setMemoEdit({ cid: detailC.id, rid: r.id, text: r.memo || "" })}
                  >
                    <span className="ch-rec-d">{keyToDisp(r.dateKey).slice(5)} {r.time || ""}</span>
                    <span className={"ch-rec-m" + (r.memo ? "" : " nomemo")}>
                      {r.memo || "＋ メモを書く"}
                    </span>
                  </button>
                  <button
                    className="mem-btn" aria-label="削除"
                    onClick={() => setConfirm({
                      message: `この記録を削除しますか？${r.memo ? `\n「${r.memo}」` : ""}`,
                      onConfirm: () => { removeRecord(detailC.id, r.id); setConfirm(null); }
                    })}
                  >🗑</button>
                </div>
              ))}
            </div>
            <div className="panel-btns">
              <button className="p-close" onClick={() => setDetail(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* チャレンジの作成・編集 */}
      {editor && (
        <div className="overlay" onClick={() => setEditor(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>{editor.mode === "new" ? "➕ 新しいチャレンジ" : "⚙︎ チャレンジの設定"}</h3>
            <div className="f-label">なにを何個？</div>
            <input
              className="f-input" autoFocus={editor.mode === "new"}
              placeholder="note記事を書く" value={editor.name}
              onChange={(e) => setEditor((o) => ({ ...o, name: e.target.value }))}
            />
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6 }}>
              <input
                className="f-input" style={{ width: 62, textAlign: "center", flex: "0 0 auto" }}
                maxLength={4} placeholder="🏁" value={editor.emoji}
                onChange={(e) => setEditor((o) => ({ ...o, emoji: e.target.value }))}
              />
              <span className="ch-tg-l">目標</span>
              <input
                className="f-input" style={{ width: 84 }} inputMode="numeric"
                value={editor.target}
                onChange={(e) => setEditor((o) => ({ ...o, target: e.target.value.replace(/[^0-9]/g, "") }))}
              />
              <span className="ch-tg-l">個</span>
            </div>
            <div className="f-label">色</div>
            <div className="theme-swatches">
              {ROOM_THEMES.map((col) => (
                <button
                  key={col}
                  className={"theme-sw" + (editor.color === col ? " on" : "")}
                  style={{ background: col }}
                  aria-label={col}
                  onClick={() => setEditor((o) => ({ ...o, color: col }))}
                />
              ))}
            </div>
            <div className="panel-btns">
              <button className="p-copy" onClick={saveEditor}>{editor.mode === "new" ? "つくる" : "保存"}</button>
              {editor.mode === "edit" && (
                <button className="p-del" onClick={() => removeChallenge(challenges.find((x) => x.id === editor.id))}>削除</button>
              )}
              <button className="p-close" onClick={() => setEditor(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* メモをあとから書く */}
      {memoEdit && (
        <div className="overlay ch-memo-over" onClick={() => setMemoEdit(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📝 メモ</h3>
            <p className="panel-note">この1件に残しておきたいこと（タイトルなど）</p>
            <input
              className="f-input" autoFocus placeholder="タイトルなど"
              value={memoEdit.text}
              onChange={(e) => setMemoEdit((o) => ({ ...o, text: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && saveMemo()}
            />
            <div className="panel-btns">
              <button className="p-copy" onClick={saveMemo}>保存</button>
              <button className="p-close" onClick={() => setMemoEdit(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {confirm && (
        <ConfirmDialog message={confirm.message} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />
      )}
    </>
  );
}
