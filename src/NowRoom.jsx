import { useState, useEffect, useRef, Fragment } from "react";
import { get, set, roomDataKey } from "./storage.js";
import {
  todayKey, yesterdayKey, nowTime, uid, keyToDisp, keyToDate, WEEKDAYS, dowClass,
  timeSortKey, addDays, copyText
} from "./format.js";
import Pressable from "./Pressable.jsx";
import ContextMenu from "./ContextMenu.jsx";
import ConfirmDialog from "./ConfirmDialog.jsx";
import useKbGap from "./useKbGap.js";
import linkify from "./linkify.jsx";
import PassDialog from "./PassDialog.jsx";
import { callAiWithPass } from "./ai.js";

/* 🕐 なうルーム: ひとりツイッター。「いま何してる」を時刻つきでつぶやき続ける。
   - 起動したら最初に開くルーム。開いたらすぐ書けることを最優先にする
   - 投稿は日記ルームの各日に「🕐 なう」として自動で並ぶ（日記本文には書き込まない）
   - 起動を軽くするため、最初は今日と昨日だけ描画する。過去は「前の日を見る」で足す */

const PAGE_DAYS = 7;       // 「前の日を見る」1回で足す日数
const REFLECT_DAYS = 7;    // 💗 ふりかえりの対象（今日を含む直近7日）
const GALLERY_STEP = 150;  // ギャラリーで一度に出すカード数

// その日の投稿を時刻順（29時制）に並べる。同時刻は投稿順
const byTime = (a, b) => timeSortKey(a.time) - timeSortKey(b.time) || (a.at || 0) - (b.at || 0);

// input[type=time] の "09:05" ⇄ 表示用の "9:05"
const toInputTime = (t) => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(t || "");
  return m ? `${m[1].padStart(2, "0")}:${m[2]}` : "";
};
const fromInputTime = (v) => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(v || "");
  return m ? `${Number(m[1])}:${m[2]}` : "";
};

/* ふりかえり本文を見出しごとに分ける。見出しは絵文字で始まる行（AIが付ける # や ** は外す） */
const HEAD_RE = /^(💗|🕐|🔁|✨|🌙|🚀)\s*(.+)$/u;
function reportSections(text) {
  const secs = [];
  let cur = null;
  for (const raw of String(text || "").split("\n")) {
    const line = raw.replace(/^#+\s*/, "").replace(/\*\*/g, "").trim();
    if (!line) continue;
    const m = HEAD_RE.exec(line);
    if (m && line.length <= 24) {
      cur = { head: line, lines: [] };
      secs.push(cur);
      continue;
    }
    if (!cur) { cur = { head: "", lines: [] }; secs.push(cur); }
    const b = /^([-・•]|\d+[.)])\s*/.exec(line);
    cur.lines.push(b ? { bullet: true, text: line.slice(b[0].length) } : { text: line });
  }
  return secs;
}
const rangeLabel = (r) => `${keyToDisp(r.from).slice(5)}〜${keyToDisp(r.to).slice(5)}`;

export default function NowRoom({ room, onBack, onMeta, showToast, pinned, onOpenDiary }) {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [draft, setDraft] = useState("");
  const [showFrom, setShowFrom] = useState(() => yesterdayKey()); // ここより前の日は畳む
  const [menu, setMenu] = useState(null);       // 長押しメニュー {id, x, y}
  const [editing, setEditing] = useState(null); // {id, text, time}
  const [confirm, setConfirm] = useState(null);
  const [justPosted, setJustPosted] = useState(null);
  const [barH, setBarH] = useState(76);
  const [view, setView] = useState(room.nowView === "gallery" ? "gallery" : "time");
  const [cols, setCols] = useState(Number(room.nowCols) === 3 ? 3 : 2);
  const [galLimit, setGalLimit] = useState(GALLERY_STEP);
  const [reports, setReports] = useState([]);   // 💗 ふりかえり [{id, from, to, count, text, at}]
  const [reflect, setReflect] = useState(null); // ふりかえり画面 {busy}
  const [passAsk, setPassAsk] = useState(null);
  const scrollRef = useRef(null);
  const barRef = useRef(null);
  const taRef = useRef(null);
  // posts 以外のキー（ふりかえり等）。保存のたびに一緒に書き戻して消さない
  const restRef = useRef({});
  const postsRef = useRef([]);
  const kbGap = useKbGap(!editing && !reflect);
  const today = todayKey();

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && typeof v === "object") {
          const { posts: ps, ...rest } = v;
          restRef.current = rest;
          if (Array.isArray(rest.reports)) setReports(rest.reports);
          if (Array.isArray(ps)) { postsRef.current = ps; setPosts(ps); }
        }
      } catch (e) { /* 初回 */ } finally { setLoaded(true); }
    })();
  }, [room.id]);

  // 入力欄の高さぶん、タイムラインの下に余白をとる
  useEffect(() => {
    if (!barRef.current || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => barRef.current && setBarH(barRef.current.offsetHeight));
    ro.observe(barRef.current);
    return () => ro.disconnect();
  }, [editing]);

  // 開いたとき・投稿したときは、いちばん下（いま）を見せる
  const scrollToEnd = (smooth) => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  };
  useEffect(() => { if (loaded && view === "time") scrollToEnd(false); }, [loaded, view]);

  const persist = async (next) => {
    postsRef.current = next;
    setPosts(next);
    try {
      await set(roomDataKey(room.id), { ...restRef.current, posts: next });
      const last = [...next].sort((a, b) => (a.at || 0) - (b.at || 0)).pop();
      onMeta({
        preview: last ? `${last.time} ${last.text.split("\n")[0]}`.slice(0, 40) : "",
        lastAt: Date.now()
      });
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね");
    }
  };

  /* 💗 ふりかえり。保存先はなうと同じルーム本文（まるごとバックアップにも入る） */
  const saveReports = async (list) => {
    restRef.current = { ...restRef.current, reports: list };
    setReports(list);
    try {
      await set(roomDataKey(room.id), { ...restRef.current, posts: postsRef.current });
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね");
    }
  };

  const reflectFrom = addDays(todayKey(), -(REFLECT_DAYS - 1));
  const reflectPosts = posts
    .filter((p) => p.dateKey >= reflectFrom && p.dateKey <= todayKey())
    .sort((a, b) => (a.dateKey < b.dateKey ? -1 : a.dateKey > b.dateKey ? 1 : byTime(a, b)));

  const askPass = (wrong) => new Promise((resolve) => setPassAsk({ wrong, resolve }));
  const openReport = reflect?.openId ? reports.find((r) => r.id === reflect.openId) : null;

  const makeReport = async () => {
    if (!reflectPosts.length) { showToast("この7日のなうがまだないよ"); return; }
    setReflect({ busy: true });
    const to = todayKey();
    try {
      const j = await callAiWithPass("reflect", {
        from: reflectFrom, to,
        posts: reflectPosts.map((p) => ({ dateKey: p.dateKey, time: p.time, text: p.text }))
      }, askPass);
      if (!j.text) throw new Error("ai");
      const id = uid();
      await saveReports([{ id, from: reflectFrom, to, count: reflectPosts.length, text: j.text, at: Date.now() }, ...reports]);
      setReflect({ busy: false, openId: id });
      return;
    } catch (e) {
      if (e.message !== "cancel") {
        showToast({
          limit: "今日のふりかえりは上限に達しました",
          net: "つながりませんでした。電波を確認してね",
          pass: "合言葉が合いませんでした"
        }[e.message] || "ふりかえりを作れませんでした");
      }
    }
    setReflect({ busy: false });
  };

  const askDeleteReport = (r) => {
    setConfirm({
      message: `${rangeLabel(r)} のふりかえりを削除しますか？`,
      onConfirm: () => { saveReports(reports.filter((x) => x.id !== r.id)); setConfirm(null); setReflect({ busy: false }); }
    });
  };

  const post = () => {
    const text = draft.trim();
    if (!text) return;
    const p = { id: uid(), dateKey: todayKey(), time: nowTime(), text, at: Date.now() };
    persist([...posts, p]);
    setDraft("");
    if (taRef.current) taRef.current.style.height = "auto";
    setJustPosted(p.id);
    setTimeout(() => setJustPosted(null), 900);
    if (view === "time") requestAnimationFrame(() => scrollToEnd(true));
  };

  const onKeyDown = (e) => {
    // 日本語変換の確定Enterでは送らない
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault();
      post();
    }
  };

  const autoGrow = (e) => {
    setDraft(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const saveEdit = () => {
    const text = editing.text.trim();
    const time = fromInputTime(editing.time);
    if (!text) { showToast("なにしてたか書いてね"); return; }
    if (!time) { showToast("時刻を入れてね"); return; }
    persist(posts.map((p) => (p.id === editing.id ? { ...p, text, time } : p)));
    setEditing(null);
  };

  const askDelete = (id) => {
    const p = posts.find((x) => x.id === id);
    if (!p) return;
    const label = p.text.length > 20 ? p.text.slice(0, 20) + "…" : p.text;
    setConfirm({
      message: `${p.time}「${label}」を削除しますか？`,
      onConfirm: () => {
        persist(posts.filter((x) => x.id !== id));
        setConfirm(null);
        setEditing(null);
      }
    });
  };

  // 日付ごとにまとめる（表示範囲より前は数だけ数えておく）
  const days = {};
  for (const p of posts) (days[p.dateKey] = days[p.dateKey] || []).push(p);
  const allKeys = Object.keys(days).sort();
  const shownKeys = allKeys.filter((k) => k >= showFrom);
  if (!shownKeys.includes(today)) shownKeys.push(today); // 今日は投稿0件でも見出しを出す
  const hiddenDays = allKeys.filter((k) => k < showFrom).length;
  const todayCount = (days[today] || []).length;

  const dayLabel = (k) => {
    const d = `${keyToDisp(k).slice(5)} ${WEEKDAYS[keyToDate(k).getDay()]}`;
    return k === today ? `今日 ${d}` : k === yesterdayKey() ? `昨日 ${d}` : d;
  };

  const setViewMode = (v) => { setView(v); onMeta({ nowView: v }); };
  const setColCount = (n) => { setCols(n); onMeta({ nowCols: n }); };

  /* ギャラリー: 日付も時刻も出さず、書いた文字だけをカードで敷き詰める。
     CSSの段組みで上から詰まるので、文字数がばらついても隙間ができにくい。
     省略（…）はしない＝全文を出す */
  const galleryAll = [...posts].sort((a, b) =>
    (a.dateKey < b.dateKey ? 1 : a.dateKey > b.dateKey ? -1 : (b.at || 0) - (a.at || 0)));
  const gallery = galleryAll.slice(0, galLimit);

  const menuPost = menu && posts.find((p) => p.id === menu.id);

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title">{room.name}</div>
          <div className="hd-sub">{loaded ? `今日 ${todayCount}件` : "Nachumin Lifelog"}</div>
        </div>
        <button
          className="now-view" aria-label="ふりかえり"
          onClick={() => setReflect({ busy: false })}
          style={{ marginLeft: "auto" }}
        >✨</button>
        {/* 時系列 ⇄ ギャラリー */}
        <button
          className={"now-view" + (view === "gallery" ? " on" : "")}
          aria-label={view === "gallery" ? "時系列で見る" : "ギャラリーで見る"}
          onClick={() => setViewMode(view === "gallery" ? "time" : "gallery")}
        >{view === "gallery" ? "🕐" : "▦"}</button>
        {/* 日記へ1タップ（今日のなうがどう並んだかをすぐ見られるように） */}
        {onOpenDiary && (
          <button className="now-to-diary" onClick={onOpenDiary} aria-label="日記をひらく" style={{ marginLeft: 0 }}>
            <span className="now-to-diary-ic">💗</span>日記<span className="now-to-diary-arw">›</span>
          </button>
        )}
      </div>

      {pinned}

      {view === "gallery" ? (
        <div className="now-gal-scroll" style={{ paddingBottom: barH + 12 }}>
          <div className="now-gal-bar">
            <span className="now-gal-n">{galleryAll.length}件</span>
            <div className="now-gal-cols">
              {[2, 3].map((n) => (
                <button
                  key={n}
                  className={"now-gal-col" + (cols === n ? " on" : "")}
                  aria-label={`${n}列にする`}
                  onClick={() => setColCount(n)}
                >{n}列</button>
              ))}
            </div>
          </div>
          {loaded && galleryAll.length === 0 && (
            <div className="now-empty">下からつぶやいてね🕐</div>
          )}
          <div className={"now-gal cols-" + cols}>
            {gallery.map((p) => (
              <Pressable
                key={p.id}
                className={"now-card" + (justPosted === p.id ? " pop" : "")}
                onLongPress={(pt) => setMenu({ id: p.id, x: pt.x, y: pt.y })}
              >
                {linkify(p.text)}
              </Pressable>
            ))}
          </div>
          {galleryAll.length > gallery.length && (
            <button className="now-more" onClick={() => setGalLimit((n) => n + GALLERY_STEP)}>
              ↓ もっと見る（あと{galleryAll.length - gallery.length}件）
            </button>
          )}
        </div>
      ) : (
      <div className="chat now-scroll" ref={scrollRef} style={{ paddingBottom: barH + 12 }}>
        {hiddenDays > 0 && (
          <button className="now-more" onClick={() => setShowFrom((f) => addDays(f, -PAGE_DAYS))}>
            ↑ 前の日を見る（あと{hiddenDays}日ぶん）
          </button>
        )}

        {shownKeys.map((k) => {
          const list = (days[k] || []).slice().sort(byTime);
          return (
            <Fragment key={k}>
              <div className={"now-day" + (k === today ? " today" : "")}>
                <span className={"now-day-l " + dowClass(k)}>{dayLabel(k)}</span>
                {list.length > 0 && <span className="now-day-n">{list.length}</span>}
              </div>
              {list.length === 0 && k === today && (
                <div className="now-empty">下からつぶやいてね🕐 時刻は自動でつくよ</div>
              )}
              <div className="now-tl">
                {list.map((p) => (
                  <Pressable
                    key={p.id}
                    className={"now-post" + (justPosted === p.id ? " pop" : "")}
                    onLongPress={(pt) => setMenu({ id: p.id, x: pt.x, y: pt.y })}
                  >
                    <span className="now-time">{p.time}</span>
                    <span className="now-dot" aria-hidden="true" />
                    <span className="now-text">{linkify(p.text)}</span>
                  </Pressable>
                ))}
              </div>
            </Fragment>
          );
        })}
      </div>
      )}

      {/* 入力欄。開いたらすぐ書けるように、ほかの操作は置かない */}
      {!editing && !reflect && (
        <div className="bar bar-fixed now-bar" ref={barRef} style={{ bottom: kbGap }}>
          <div className="in-row">
            <textarea
              ref={taRef} className="ta" rows={1}
              placeholder="いまなにしてる？"
              enterKeyHint="send"
              value={draft} onChange={autoGrow} onKeyDown={onKeyDown}
            />
            <button className="send" aria-label="つぶやく" disabled={!draft.trim()} onClick={post}>↑</button>
          </div>
        </div>
      )}

      {menu && menuPost && (
        <ContextMenu
          x={menu.x} y={menu.y}
          onClose={() => setMenu(null)}
          onCopy={async () => {
            const ok = await copyText(`${menuPost.time} ${menuPost.text}`);
            showToast(ok ? "コピーしました🩷" : "コピーできませんでした");
            setMenu(null);
          }}
          onEdit={() => {
            setEditing({ id: menuPost.id, text: menuPost.text, time: toInputTime(menuPost.time) });
            setMenu(null);
          }}
          onDelete={() => { const id = menuPost.id; setMenu(null); askDelete(id); }}
        />
      )}

      {editing && (
        <div className="overlay" onClick={() => setEditing(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>🕐 なうを直す</h3>
            <div className="f-label">時刻（あとから書いたときは直してね）</div>
            <input
              className="f-input" type="time" style={{ width: 140 }}
              value={editing.time}
              onChange={(e) => setEditing((o) => ({ ...o, time: e.target.value }))}
            />
            <div className="f-label">なにしてた</div>
            <textarea
              autoFocus style={{ minHeight: 80 }}
              value={editing.text}
              onChange={(e) => setEditing((o) => ({ ...o, text: e.target.value }))}
            />
            <div className="panel-btns">
              <button className="p-copy" onClick={saveEdit}>保存</button>
              <button className="p-del" onClick={() => askDelete(editing.id)}>削除</button>
              <button className="p-close" onClick={() => setEditing(null)}>もどる</button>
            </div>
          </div>
        </div>
      )}

      {reflect && (
        <div className="rf-screen">
          <div className="hd">
            <button
              className="back-btn" aria-label="もどる" disabled={reflect.busy}
              onClick={() => (reflect.openId ? setReflect({ busy: false }) : setReflect(null))}
            >‹</button>
            <span style={{ fontSize: 20 }}>✨</span>
            <div style={{ minWidth: 0 }}>
              <div className="hd-title">なうのふりかえり</div>
              <div className="hd-sub">{openReport ? rangeLabel(openReport) : `${reports.length}件たまってる`}</div>
            </div>
          </div>

          {openReport ? (
            <div className="rf-scroll">
              {reportSections(openReport.text).map((sec, i) => (
                <section key={i} className={"rf-sec" + (i === 0 ? " lead" : "")}>
                  {sec.head && <h4 className="rf-head">{sec.head}</h4>}
                  {sec.lines.map((l, j) => (
                    l.bullet
                      ? <div key={j} className="rf-li">{l.text}</div>
                      : <p key={j} className="rf-p">{l.text}</p>
                  ))}
                </section>
              ))}
              <div className="rf-acts">
                <button onClick={async () => {
                  const ok = await copyText(openReport.text);
                  showToast(ok ? "コピーしました🩷" : "コピーできませんでした");
                }}>コピー</button>
                <button onClick={() => askDeleteReport(openReport)}>削除</button>
              </div>
            </div>
          ) : (
            <div className="rf-scroll">
              <button className="rf-make" disabled={reflect.busy} onClick={makeReport}>
                {reflect.busy
                  ? <><span className="wd-cam-spin" /> ふりかえり中…（30秒くらい）</>
                  : <>💗 この7日をふりかえる<small>{keyToDisp(reflectFrom).slice(5)}〜今日・{reflectPosts.length}件</small></>}
              </button>
              <div className="rf-note">できたふりかえりはこのスマホに保存されて、下からいつでも見返せます</div>
              {reports.length === 0 && <div className="now-empty">まだふりかえりはありません</div>}
              {reports.map((r) => (
                <button key={r.id} className="rf-tile" onClick={() => setReflect({ busy: false, openId: r.id })}>
                  <span className="rf-range">{rangeLabel(r)}<small>{r.count}件</small></span>
                  <span className="rf-tile-lead">{reportSections(r.text)[0]?.lines[0]?.text || ""}</span>
                  <span className="rf-tile-arw">›</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {passAsk && (
        <PassDialog
          wrong={passAsk.wrong}
          onSubmit={(v) => { passAsk.resolve(v); setPassAsk(null); }}
          onCancel={() => { passAsk.resolve(null); setPassAsk(null); }}
        />
      )}

      {confirm && (
        <ConfirmDialog message={confirm.message} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />
      )}
    </>
  );
}
