import { useState, useEffect, useRef, useCallback } from "react";
import { get, set, del, roomDataKey, albumFullKey, albumThumbKey, storageEstimate } from "./storage.js";
import { todayKey, keyToDisp, keyToDate, WEEKDAYS, dowClass, uid, monthOf, monthLabel } from "./format.js";
import { makePhoto, sizeLabel } from "./imageUtil.js";
import Pressable from "./Pressable.jsx";
import ContextMenu from "./ContextMenu.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";

/* 📔 絵日記ルーム: 書いた日記画像を貼って、過去ぶんをざっと見返す。

   ■ 置き方
   - 本文データには「どの日の何枚目か」だけを持つ（軽いのでバックアップに入る）
   - 画像は別キーにBlobで持つ。一覧ではマス用だけ読むので、何百枚あっても重くならない
   - 原本は写真アプリにある前提なので、アプリ側は閲覧用のコピー（長辺1080px）

   ■ 見返し方
   - 月ごとのマス並び、新しい月が上。最初は3ヶ月ぶんだけ描画して、下へ足していく
   - マスをタップで全画面。左右スワイプで前後の日へ */

const MONTH_STEP = 3;   // 「もっと前を見る」で足す月数
const COLS = 3;

export default function AlbumRoom({ room, onBack, onMeta, showToast, pinned }) {
  const [pages, setPages] = useState([]);      // [{id, dateKey, w, h, at}]
  const [loaded, setLoaded] = useState(false);
  const [months, setMonths] = useState(MONTH_STEP);
  const [viewer, setViewer] = useState(null);  // 全画面で見ているページのindex
  const [menu, setMenu] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [busy, setBusy] = useState(0);         // 取り込み中の残り枚数
  const [addDate, setAddDate] = useState(() => todayKey());
  const [est, setEst] = useState(null);
  const fileRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && Array.isArray(v.pages)) setPages(v.pages);
      } catch (e) { /* 初回 */ } finally { setLoaded(true); }
      setEst(await storageEstimate());
    })();
  }, [room.id]);

  const persist = async (next) => {
    setPages(next);
    try {
      await set(roomDataKey(room.id), { pages: next });
      const last = [...next].sort((a, b) => (a.at || 0) - (b.at || 0)).pop();
      onMeta({
        preview: next.length ? `${next.length}枚` : "",
        lastAt: last ? Date.now() : 0
      });
    } catch (e) {
      showToast("保存に失敗しました。端末の空き容量を確認してね");
    }
  };

  /* 取り込み: 写真を選ぶ → 長辺1080pxのJPEGにして入れる。
     1枚ずつ保存するので、途中で容量が尽きても入ったぶんは残る */
  const onFiles = async (e) => {
    const files = [...(e.target.files || [])];
    e.target.value = "";
    if (!files.length) return;
    setBusy(files.length);
    const added = [];
    let failed = 0;
    for (const f of files) {
      try {
        const { fullBlob, thumbBlob, w, h } = await makePhoto(f);
        const id = uid();
        await set(albumFullKey(room.id, id), fullBlob);
        await set(albumThumbKey(room.id, id), thumbBlob);
        added.push({ id, dateKey: addDate, w, h, at: Date.now() + added.length });
      } catch (err) {
        failed += 1;
      }
      setBusy((n) => n - 1);
    }
    setBusy(0);
    if (added.length) await persist([...pages, ...added]);
    setEst(await storageEstimate());
    if (failed) showToast(`${failed}枚は読み込めませんでした 🥺`);
    else if (added.length) showToast(`${added.length}枚いれたよ📔`);
  };

  const askDelete = (page) => {
    setConfirm({
      message: `${keyToDisp(page.dateKey)} の1枚を削除しますか？\n写真アプリの元画像は消えません。`,
      onConfirm: async () => {
        setConfirm(null);
        setViewer(null);
        await persist(pages.filter((p) => p.id !== page.id));
        try {
          await del(albumFullKey(room.id, page.id));
          await del(albumThumbKey(room.id, page.id));
        } catch (e) { /* 画像が消せなくても一覧からは消える */ }
        setEst(await storageEstimate());
      }
    });
  };

  const changeDate = async (page, dateKey) => {
    if (!dateKey) return;
    await persist(pages.map((p) => (p.id === page.id ? { ...p, dateKey } : p)));
  };

  /* 日は新しい順（見返すときは最近から）。
     ただし同じ日の中は入れた順＝1枚目から並べる（日記のページ順なので逆にしない） */
  const sorted = [...pages].sort((a, b) =>
    (a.dateKey < b.dateKey ? 1 : a.dateKey > b.dateKey ? -1 : (a.at || 0) - (b.at || 0)));

  // 月ごとにまとめる
  const byMonth = [];
  for (const p of sorted) {
    const mk = monthOf(p.dateKey);
    const last = byMonth[byMonth.length - 1];
    if (last && last.mk === mk) last.items.push(p);
    else byMonth.push({ mk, items: [p] });
  }
  const shownMonths = byMonth.slice(0, months);
  const restMonths = byMonth.length - shownMonths.length;
  const shownIds = new Set(shownMonths.flatMap((m) => m.items.map((p) => p.id)));
  const curYear = keyToDate(todayKey()).getFullYear();

  const viewerPage = viewer != null ? sorted[viewer] : null;

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title">{room.name}</div>
          <div className="hd-sub">
            {loaded ? `${pages.length}枚${est && est.usage ? ` ・ ${sizeLabel(est.usage)}つかってる` : ""}` : "Nachumin Lifelog"}
          </div>
        </div>
        <label className="icon-btn ab-add" aria-label="画像を追加">
          ＋
          <input ref={fileRef} type="file" accept="image/*" multiple onChange={onFiles} />
        </label>
      </div>

      {pinned}

      <div className="ab-scroll">
        {/* 取り込み先の日付。あとからまとめて入れることがあるので選べるようにする */}
        <div className="ab-datebar">
          <span className="ab-datebar-l">入れる日</span>
          <button className="chip chip-date ab-datechip">
            📅 {addDate === todayKey() ? `今日 ${keyToDisp(addDate).slice(5)}` : keyToDisp(addDate)}
            <input type="date" value={addDate} onChange={(e) => e.target.value && setAddDate(e.target.value)} />
          </button>
          {addDate !== todayKey() && (
            <button className="ab-today" onClick={() => setAddDate(todayKey())}>今日にもどす</button>
          )}
        </div>

        {busy > 0 && <div className="ab-busy">読み込み中… のこり{busy}枚</div>}

        {loaded && pages.length === 0 && (
          <div className="empty">{"まだ1枚もありません。\n右上の＋から、書いた日記をいれてね📔"}</div>
        )}

        {shownMonths.map((m) => (
          <div className="ab-month" key={m.mk}>
            <div className="ab-month-head">
              <span className="ab-month-l">{monthLabel(m.mk, curYear)}</span>
              <span className="ab-month-n">{m.items.length}枚</span>
            </div>
            <div className="ab-grid">
              {m.items.map((p) => (
                <Thumb
                  key={p.id}
                  roomId={room.id}
                  page={p}
                  active={shownIds.has(p.id)}
                  onOpen={() => setViewer(sorted.findIndex((x) => x.id === p.id))}
                  onLongPress={(pt) => setMenu({ id: p.id, x: pt.x, y: pt.y })}
                />
              ))}
            </div>
          </div>
        ))}

        {restMonths > 0 && (
          <button className="ab-more" onClick={() => setMonths((n) => n + MONTH_STEP)}>
            ↓ もっと前を見る（あと{restMonths}ヶ月ぶん）
          </button>
        )}

        {pages.length > 0 && (
          <p className="panel-note ab-note">
            画像はこの端末の中だけにあります。まるごとバックアップには入らないので、
            元の画像は写真アプリに残しておいてね📷
          </p>
        )}
      </div>

      {viewerPage && (
        <Viewer
          roomId={room.id}
          pages={sorted}
          index={viewer}
          onIndex={setViewer}
          onClose={() => setViewer(null)}
          onDelete={() => askDelete(viewerPage)}
          onDate={(d) => changeDate(viewerPage, d)}
        />
      )}

      {menu && (() => {
        const p = pages.find((x) => x.id === menu.id);
        if (!p) return null;
        return (
          <ContextMenu
            x={menu.x} y={menu.y}
            onClose={() => setMenu(null)}
            onEdit={() => { setMenu(null); setViewer(sorted.findIndex((x) => x.id === p.id)); }}
            onDelete={() => { setMenu(null); askDelete(p); }}
          />
        );
      })()}

      {confirm && (
        <ConfirmDialog message={confirm.message} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />
      )}
    </>
  );
}

/* 一覧のマス1つ。画面に入ってから画像を読む（最初から全部読むと重い） */
function Thumb({ roomId, page, active, onOpen, onLongPress }) {
  const [url, setUrl] = useState(null);
  const [missing, setMissing] = useState(false);
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setNear(true); return; }
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { setNear(true); io.disconnect(); }
    }, { rootMargin: "400px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!near || !active) return;
    let dead = false;
    let made = null;
    (async () => {
      try {
        const b = await get(albumThumbKey(roomId, page.id));
        if (dead) return;
        if (!b) { setMissing(true); return; }
        made = URL.createObjectURL(b);
        setUrl(made);
      } catch (e) { setMissing(true); }
    })();
    return () => { dead = true; if (made) URL.revokeObjectURL(made); };
  }, [near, active, roomId, page.id]);

  const d = keyToDate(page.dateKey);
  return (
    <Pressable
      className="ab-cell"
      onClick={missing ? undefined : onOpen}
      onLongPress={onLongPress}
      role="button" tabIndex={0}
    >
      <span ref={ref} className="ab-cell-in">
        {url ? <img src={url} alt={`${keyToDisp(page.dateKey)} の日記`} loading="lazy" />
          : missing ? <span className="ab-missing">📷<br />画像なし</span>
            : <span className="ab-ph" />}
        <span className={"ab-cell-d " + dowClass(page.dateKey)}>{d.getDate()}</span>
      </span>
    </Pressable>
  );
}

/* 全画面ビュー。左右スワイプ（とボタン）で前後の日へ */
function Viewer({ roomId, pages, index, onIndex, onClose, onDelete, onDate }) {
  const [url, setUrl] = useState(null);
  const [missing, setMissing] = useState(false);
  const page = pages[index];
  const touch = useRef(null);

  useEffect(() => {
    let dead = false;
    let made = null;
    setUrl(null);
    setMissing(false);
    (async () => {
      try {
        const b = await get(albumFullKey(roomId, page.id));
        if (dead) return;
        if (!b) { setMissing(true); return; }
        made = URL.createObjectURL(b);
        setUrl(made);
      } catch (e) { setMissing(true); }
    })();
    return () => { dead = true; if (made) URL.revokeObjectURL(made); };
  }, [roomId, page.id]);

  const go = useCallback((d) => {
    const n = index + d;
    if (n >= 0 && n < pages.length) onIndex(n);
  }, [index, pages.length, onIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const s = touch.current;
    if (!s) return;
    touch.current = null;
    const t = e.changedTouches[0];
    const dx = t.clientX - s.x;
    const dy = t.clientY - s.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1); // 左スワイプ=次（古い方）
  };

  const dow = WEEKDAYS[keyToDate(page.dateKey).getDay()];
  return (
    <div className="ab-viewer" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="ab-v-bar">
        <button className="ab-v-x" aria-label="とじる" onClick={onClose}>✕</button>
        <span className={"ab-v-date " + dowClass(page.dateKey)}>{keyToDisp(page.dateKey)} {dow}</span>
        <span className="ab-v-n">{index + 1}/{pages.length}</span>
        <label className="ab-v-cal" aria-label="日付を変える">
          📅
          <input type="date" value={page.dateKey} onChange={(e) => onDate(e.target.value)} />
        </label>
        <button className="ab-v-del" aria-label="削除" onClick={onDelete}>🗑</button>
      </div>

      <div className="ab-v-main">
        {index > 0 && <button className="ab-v-nav prev" aria-label="前（新しい）" onClick={() => go(-1)}>‹</button>}
        {url ? <img className="ab-v-img" src={url} alt={`${keyToDisp(page.dateKey)} の日記`} />
          : missing ? <div className="ab-v-missing">{"画像が見つかりません📷\n写真アプリから入れ直してね"}</div>
            : <div className="ab-v-load">よみこみ中…</div>}
        {index < pages.length - 1 && <button className="ab-v-nav next" aria-label="次（古い）" onClick={() => go(1)}>›</button>}
      </div>
    </div>
  );
}
