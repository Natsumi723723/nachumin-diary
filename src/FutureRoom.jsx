import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey, futureScriptKey } from "./storage.js";
import { todayKey, nowTime, uid, keyToDisp, addDays, addMonths, aheadLabel, dowClass, WEEKDAYS, keyToDate } from "./format.js";
import { SAMPLE_ENTRIES, parseScript } from "./futureDiary.js";
import ConfirmDialog from "./ConfirmDialog.jsx";

/* 🔮 未来日記ルーム: 全部叶っている前提の未来の日記が、1日1篇ずつ届く。

   ■ 原稿の置き場所
   アプリに同梱すると公開リポジトリに載ってしまうので、原稿は端末の
   IndexedDB にだけ持つ（futureScriptKey）。取り込むまではサンプルが動く。

   ■ 配信のしかた
   - 初回に一度だけ順番をシャッフルして固定する
     （毎回シャッフルすると、原稿を足したときに既読の並びが崩れるため）
   - 「日付で決め打ち」ではなく「未読の先頭」を配る。
     開かない日があっても取りこぼさず、1日1篇のペースは守られる
   - 開いた本文はその場でスナップショットする。あとで原稿を直しても
     受け取り済みの日記は変わらない（＝その日に届いた手紙として残る） */

export default function FutureRoom({ room, onBack, onMeta, showToast, pinned }) {
  const [script, setScript] = useState(null);   // 取り込んだ原稿（null = 未取り込み）
  const [order, setOrder] = useState([]);
  const [opened, setOpened] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [justOpened, setJustOpened] = useState(null);
  const [importOpen, setImportOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [importErr, setImportErr] = useState([]);
  const [backfillOpen, setBackfillOpen] = useState(false);
  const [backfillN, setBackfillN] = useState(7);
  const bottomRef = useRef(null);

  const today = todayKey();
  const entries = script && script.length ? script : SAMPLE_ENTRIES;
  const isSample = !(script && script.length);
  const byId = (id) => entries.find((e) => e.id === id);

  useEffect(() => {
    (async () => {
      try {
        const sc = await get(futureScriptKey(room.id));
        const list = Array.isArray(sc) ? sc : null;
        setScript(list);
        const v = await get(roomDataKey(room.id));
        setOpened(Array.isArray(v?.opened) ? v.opened : []);
        setOrder(buildOrder(Array.isArray(v?.order) ? v.order : null,
          (list && list.length ? list : SAMPLE_ENTRIES).map((e) => e.id)));
      } catch (e) { /* 初回 */ } finally { setLoaded(true); }
    })();
  }, [room.id]);

  /* 配信順を作る。保存済みの順番は必ず尊重し、
     原稿に増えたぶんだけを後ろに足す（既存の順番は動かさない） */
  const buildOrder = (saved, allIds) => {
    if (!saved) return shuffle(allIds);
    const known = new Set(saved);
    return [...saved, ...shuffle(allIds.filter((id) => !known.has(id)))];
  };

  const persist = async (nextOrder, nextOpened) => {
    setOrder(nextOrder);
    setOpened(nextOpened);
    const last = nextOpened[nextOpened.length - 1];
    try {
      await set(roomDataKey(room.id), { order: nextOrder, opened: nextOpened });
      onMeta({
        preview: last ? last.text.split("\n")[0].slice(0, 40) : "",
        lastAt: Date.now()
      });
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね");
    }
  };

  const openedIds = new Set(opened.map((o) => o.entryId));
  const remaining = order.filter((id) => !openedIds.has(id) && byId(id));
  const todayDone = opened.some((o) => o.dateKey === today);

  // 今日のぶんを1篇ひらく
  const openToday = () => {
    if (todayDone || remaining.length === 0) return;
    const e = byId(remaining[0]);
    if (!e) return;
    const rec = {
      id: uid(),
      entryId: e.id,
      ahead: e.ahead,
      futureKey: addMonths(today, e.ahead), // 受け取った日から数えた未来の日付
      text: e.text,
      dateKey: today,
      time: nowTime(),
      fave: false
    };
    persist(order, [...opened, rec]);
    setJustOpened(rec.id);
    setTimeout(() => setJustOpened(null), 1400);
  };

  /* さかのぼって受け取る。1日1篇のルールは崩さず、昨日から順に過去の日へ割り当てる。
     すでに受け取っている日は飛ばすので、二重に配られない。 */
  const doBackfill = () => {
    const n = Math.max(1, Math.min(60, Number(backfillN) || 0));
    const have = new Set(opened.map((o) => o.dateKey));
    const days = [];
    for (let i = 1; days.length < n && i <= 120; i++) {
      const d = addDays(today, -i);
      if (!have.has(d)) days.push(d);
    }
    days.reverse(); // 古い日から順に並べる
    /* 原稿が日数より少ないときは、いちばん古い日ではなく
       今日に近い日から埋める（昨日・一昨日…と続いて見えるように） */
    const use = days.slice(-Math.min(days.length, remaining.length));
    const add = [];
    for (let i = 0; i < use.length; i++) {
      const e = byId(remaining[i]);
      if (!e) break;
      add.push({
        id: uid(), entryId: e.id, ahead: e.ahead,
        futureKey: addMonths(use[i], e.ahead), // その日に受け取ったものとして未来日を出す
        text: e.text, dateKey: use[i], time: "", fave: false, back: true
      });
    }
    if (!add.length) { showToast("配れる原稿がもうありません"); return; }
    const merged = [...opened, ...add].sort((a, b) => (a.dateKey < b.dateKey ? -1 : a.dateKey > b.dateKey ? 1 : 0));
    persist(order, merged);
    setBackfillOpen(false);
    showToast(`${add.length}篇をさかのぼって受け取ったよ🔮`);
  };

  const toggleFave = (id) => {
    persist(order, opened.map((o) => (o.id === id ? { ...o, fave: !o.fave } : o)));
  };

  // 貼り付けた原稿を取り込む。受け取り済みの日記はそのまま残す
  const doImport = async () => {
    const { entries: parsed, errors } = parseScript(draft);
    if (!parsed.length) { setImportErr(errors); return; }
    setImportErr([]);
    try {
      await set(futureScriptKey(room.id), parsed);
    } catch (e) {
      showToast("原稿の保存に失敗しました");
      return;
    }
    setScript(parsed);
    // サンプルから乗り換えるときは配信順も作り直す
    const nextOrder = buildOrder(isSample ? null : order, parsed.map((e) => e.id));
    await persist(nextOrder, opened);
    setImportOpen(false);
    setDraft("");
    showToast(`${parsed.length}篇を取り込んだよ🔮`);
  };

  // 原稿を入れ替えたときに、また最初から届くようにする
  const askReset = () => {
    setConfirm({
      message: `受け取った${opened.length}篇をぜんぶ未読に戻しますか？\n原稿を入れ替えたときに使ってね。\n（日記ルームの記録は消えません）`,
      onConfirm: () => {
        persist(shuffle(entries.map((e) => e.id)), []);
        setConfirm(null);
        showToast("未来日記をリセットしたよ🔮");
      }
    });
  };

  // 開いた直後といちばん下は、いつも見えているようにする
  useEffect(() => {
    if (!loaded) return;
    bottomRef.current?.scrollIntoView({ behavior: opened.length ? "smooth" : "auto", block: "end" });
  }, [loaded, opened.length]);

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{room.name}</div>
          <div className="hd-sub">
            {loaded ? `${opened.length}篇うけとった / のこり${remaining.length}篇` : "Nachumin Lifelog"}
          </div>
        </div>
        <button
          className="icon-btn" style={{ marginLeft: "auto" }}
          aria-label="原稿を取り込む"
          onClick={() => { setImportErr([]); setImportOpen(true); }}
        >📥</button>
      </div>

      {pinned}

      <div className="fut-scroll">
        {loaded && opened.length === 0 && (
          <div className="fut-intro">
            {"未来のなちゅみんから、\n1日1篇ずつ日記が届きます🔮\n\n下のボタンで今日のぶんをひらいてね"}
          </div>
        )}

        {opened.map((o) => {
          const fd = o.futureKey;
          const dow = WEEKDAYS[keyToDate(fd).getDay()];
          return (
            <div className={"fut-card" + (justOpened === o.id ? " opening" : "") + (o.fave ? " fave" : "")} key={o.id}>
              <div className="fut-top">
                <span className={"fut-date " + dowClass(fd)}>{keyToDisp(fd)} {dow}</span>
                <span className="fut-ahead">{aheadLabel(o.ahead)}</span>
                <button
                  className={"fut-heart" + (o.fave ? " on" : "")}
                  aria-label={o.fave ? "お気に入りを外す" : "お気に入りにする"}
                  onClick={() => toggleFave(o.id)}
                >{o.fave ? "🩷" : "♡"}</button>
              </div>
              <div className="fut-text">{o.text}</div>
              <div className="fut-got">うけとった日 {keyToDisp(o.dateKey)}{o.time ? " " + o.time : ""}</div>
            </div>
          );
        })}

        {loaded && (
          <div className="fut-foot">
            {remaining.length === 0 ? (
              <div className="fut-msg">
                {"未来日記はここまで🔮\n右上の📥から原稿を足すと、また続きが届きます"}
              </div>
            ) : todayDone ? (
              <div className="fut-msg">
                {`今日のぶんは受け取ったよ💗\nまた明日ね（のこり${remaining.length}篇）`}
              </div>
            ) : (
              <button className="fut-open" onClick={openToday}>
                <span className="fut-open-ic">📮</span>
                今日の未来日記をひらく
              </button>
            )}
            <div className="fut-subs">
              {remaining.length > 0 && (
                <button className="fut-reset" onClick={() => setBackfillOpen(true)}>⏪ さかのぼって受け取る</button>
              )}
              {opened.length > 0 && (
                <button className="fut-reset" onClick={askReset}>配信をリセット</button>
              )}
            </div>
            {isSample && (
              <div className="fut-draft">※ いまはサンプル。右上の📥から原稿を入れてね</div>
            )}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {importOpen && (
        <div className="overlay" onClick={() => setImportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📥 原稿を取り込む</h3>
            <p className="panel-note">
              原稿はこの端末の中だけに保存されます（アプリには入っていません）。
              まるごとバックアップにも含まれます。
            </p>
            <div className="f-label">この形で貼り付けてね</div>
            <pre className="fut-fmt">{"=== 1年後 ===\n本文。何行でもOK。\n\n=== 3年後 ===\n本文。"}</pre>
            <textarea
              autoFocus
              placeholder="ここに原稿をペースト"
              value={draft}
              onChange={(e) => { setDraft(e.target.value); setImportErr([]); }}
              style={{ minHeight: 180 }}
            />
            {importErr.length > 0 && (
              <div className="fut-err">
                {importErr.map((m, i) => <div key={i}>⚠️ {m}</div>)}
              </div>
            )}
            <p className="panel-note">
              取り込むと原稿は入れ替わりますが、<b>受け取り済みの日記はそのまま残ります</b>。
              同じ原稿をもう一度読みたいときは「配信をリセット」を使ってね。
            </p>
            <div className="panel-btns">
              <button className="p-copy" disabled={!draft.trim()} onClick={doImport}>取り込む</button>
              <button className="p-close" onClick={() => setImportOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {backfillOpen && (
        <div className="overlay" onClick={() => setBackfillOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>⏪ さかのぼって受け取る</h3>
            <p className="panel-note">
              昨日から順に、過去の日へ1日1篇ずつ配ります。すでに受け取っている日は飛ばします。
            </p>
            <div className="f-label">何日ぶん</div>
            <input
              className="f-input" type="number" inputMode="numeric"
              min={1} max={60} value={backfillN}
              onChange={(e) => setBackfillN(e.target.value)}
              style={{ width: 110 }}
            />
            <p className="panel-note">
              いまの原稿で配れるのは<b>{remaining.length}篇</b>まで。
              足りないときは、今日に近い日から埋めます。
            </p>
            <div className="panel-btns">
              <button className="p-copy" onClick={doBackfill}>受け取る</button>
              <button className="p-close" onClick={() => setBackfillOpen(false)}>やめる</button>
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

// Fisher-Yates（元の配列は壊さない）
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
