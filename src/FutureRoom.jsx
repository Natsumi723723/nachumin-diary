import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey } from "./storage.js";
import { todayKey, nowTime, uid, keyToDisp, addMonths, aheadLabel, dowClass, WEEKDAYS, keyToDate } from "./format.js";
import { FUTURE_ENTRIES, IS_DRAFT } from "./futureDiary.js";
import ConfirmDialog from "./ConfirmDialog.jsx";

/* 🔮 未来日記ルーム: 全部叶っている前提の未来の日記が、1日1篇ずつ届く。
   原稿は futureDiary.js に同梱（サーバー無しで動くため）。

   ■ 配信のしかた
   - 初回に一度だけ順番をシャッフルして room データに固定する
     （毎回シャッフルすると、原稿を足したときに既読の並びが崩れるため）
   - 「日付で決め打ち」ではなく「未読の先頭」を配る。
     開かない日があっても取りこぼさず、1日1篇のペースは守られる
   - 開いた本文はその場でスナップショットする。あとで原稿を直しても
     受け取り済みの日記は変わらない（＝その日に届いた手紙として残る） */

export default function FutureRoom({ room, onBack, onMeta, showToast, pinned }) {
  const [order, setOrder] = useState([]);
  const [opened, setOpened] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [justOpened, setJustOpened] = useState(null); // 開封演出中のid
  const scrollRef = useRef(null);
  const bottomRef = useRef(null);

  const today = todayKey();
  const byId = (id) => FUTURE_ENTRIES.find((e) => e.id === id);

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        const op = Array.isArray(v?.opened) ? v.opened : [];
        setOpened(op);
        setOrder(buildOrder(Array.isArray(v?.order) ? v.order : null));
      } catch (e) { /* 初回 */ } finally { setLoaded(true); }
    })();
  }, [room.id]);

  /* 配信順を作る。保存済みの順番は必ず尊重し、
     原稿に増えたぶんだけを後ろに足す（既存の順番は動かさない） */
  const buildOrder = (saved) => {
    const all = FUTURE_ENTRIES.map((e) => e.id);
    if (!saved) return shuffle(all);
    const known = new Set(saved);
    const added = all.filter((id) => !known.has(id));
    return [...saved, ...shuffle(added)];
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

  const toggleFave = (id) => {
    persist(order, opened.map((o) => (o.id === id ? { ...o, fave: !o.fave } : o)));
  };

  // 原稿を入れ替えたときに、また最初から届くようにする
  const askReset = () => {
    setConfirm({
      message: `受け取った${opened.length}篇をぜんぶ未読に戻しますか？\n原稿を入れ替えたときに使ってね。\n（日記ルームの記録は消えません）`,
      onConfirm: () => {
        persist(shuffle(FUTURE_ENTRIES.map((e) => e.id)), []);
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
      </div>

      {pinned}

      <div className="fut-scroll" ref={scrollRef}>
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
              <div className="fut-got">うけとった日 {keyToDisp(o.dateKey)} {o.time}</div>
            </div>
          );
        })}

        {loaded && (
          <div className="fut-foot">
            {remaining.length === 0 ? (
              <div className="fut-msg">
                {"未来日記はここまで🔮\n原稿を足すと、また続きが届きます"}
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
            {opened.length > 0 && (
              <button className="fut-reset" onClick={askReset}>配信をリセット</button>
            )}
            {IS_DRAFT && (
              <div className="fut-draft">※ いまの原稿は仮です</div>
            )}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

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
