import { useState, useEffect, useRef } from "react";
import { get, set, roomDataKey } from "./storage.js";
import {
  keyToDisp, keyToDate, todayKey, uid, WEEKDAYS,
  SLOTS, slotOfNow, groupDarelog, darelogDateRows,
  darelogToText, parseDarelogText, safeFileName
} from "./format.js";
import { MIcon } from "./TalkRoom.jsx";
import MemberEditor from "./MemberEditor.jsx";
import { PALETTE, memberText } from "./theme.js";

/* だれログ型: 表そのものが記録画面。縦=日付(下が今日) 横=朝昼夜 */
export default function DarelogRoom({ room, onBack, onMeta, onRoomChange, showToast, pinned }) {
  const [records, setRecords] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [picker, setPicker] = useState(null); // { dateKey, slot }
  const [menu, setMenu] = useState(null);      // 記録メニュー: record
  const [memoDraft, setMemoDraft] = useState("");
  const [recDel, setRecDel] = useState(false);
  const [memOpen, setMemOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef(null);
  const exRef = useRef(null);

  const members = room.members || [];
  const memberOf = (id) => members.find((m) => m.id === id);
  const today = todayKey();
  const curSlot = slotOfNow();

  useEffect(() => {
    (async () => {
      try {
        const v = await get(roomDataKey(room.id));
        if (v && Array.isArray(v.records)) setRecords(v.records);
      } catch (e) {
        /* no data yet */
      } finally {
        setLoaded(true);
      }
    })();
  }, [room.id]);

  // 開いたら一番下（今日）へスクロール
  useEffect(() => {
    if (loaded && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [loaded]);

  const persist = async (next) => {
    setRecords(next);
    try {
      await set(roomDataKey(room.id), { records: next });
      const last = next[next.length - 1];
      const nameOf = (id) => memberOf(id)?.name || "";
      const slotEmoji = (s) => SLOTS.find((x) => x.key === s)?.emoji || "";
      onMeta({
        preview: last ? `${slotEmoji(last.slot)} ${nameOf(last.memberId)}`.trim() : "",
        lastAt: Date.now()
      });
    } catch (e) {
      showToast("保存に失敗しました。ストレージを確認してね");
    }
  };

  const grouped = groupDarelog(records);
  const cellRecs = (dk, slot) => (grouped[dk]?.[slot]) || [];

  // ピッカーでメンバーをトグル（居なければ追加・居れば削除）
  const toggleMember = (memberId) => {
    const { dateKey, slot } = picker;
    const existing = records.find((r) => r.dateKey === dateKey && r.slot === slot && r.memberId === memberId);
    if (existing) {
      persist(records.filter((r) => r.id !== existing.id));
    } else {
      persist([...records, { id: uid(), dateKey, slot, memberId, memo: "" }]);
    }
  };

  const openMenu = (rec) => {
    setMenu(rec);
    setMemoDraft(rec.memo || "");
    setRecDel(false);
  };

  const saveMemo = () => {
    persist(records.map((r) => (r.id === menu.id ? { ...r, memo: memoDraft.trim() } : r)));
    setMenu(null);
  };

  const deleteRec = () => {
    if (!recDel) {
      setRecDel(true);
      return;
    }
    persist(records.filter((r) => r.id !== menu.id));
    setMenu(null);
  };

  /* export / import */
  const exportText = () => darelogToText(records, members);

  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(exportText());
      setCopied(true);
    } catch (e) {
      try {
        exRef.current.focus();
        exRef.current.select();
        document.execCommand("copy");
        setCopied(true);
      } catch (e2) {
        showToast("コピーできませんでした。全選択して手動でコピーしてね");
      }
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const doDownload = () => {
    try {
      const blob = new Blob([exportText()], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `nachumin-diary-${safeFileName(room.name)}.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 3000);
    } catch (e) {
      showToast("ダウンロードできない環境みたい。コピーを使ってね");
    }
  };

  const doImport = () => {
    const parsed = parseDarelogText(importText);
    if (parsed.length === 0) {
      showToast("読み込める記録が見つかりませんでした 🥺");
      return;
    }
    const nextMembers = [...members];
    const byName = new Map(nextMembers.map((m) => [m.name, m]));
    for (const p of parsed) {
      if (!byName.has(p.name)) {
        const nm = {
          id: uid(), name: p.name,
          color: PALETTE[nextMembers.length % PALETTE.length],
          icon: { type: "emoji", value: "💗" },
          side: nextMembers.length % 2 === 0 ? "left" : "right"
        };
        nextMembers.push(nm);
        byName.set(p.name, nm);
      }
    }
    const seen = new Set(records.map((r) => `${r.dateKey} ${r.slot} ${r.memberId}`));
    let added = 0, skipped = 0;
    const next = [...records];
    for (const p of parsed) {
      const mid = byName.get(p.name).id;
      const sig = `${p.dateKey} ${p.slot} ${mid}`;
      if (seen.has(sig)) { skipped += 1; continue; }
      seen.add(sig);
      next.push({ id: uid(), dateKey: p.dateKey, slot: p.slot, memberId: mid, memo: p.memo || "" });
      added += 1;
    }
    if (nextMembers.length !== members.length) onRoomChange({ members: nextMembers });
    persist(next);
    setImportOpen(false);
    setImportText("");
    showToast(`${added}件の記録を復元したよ💗` + (skipped ? `（${skipped}件は重複スキップ）` : ""));
  };

  const rows = darelogDateRows(records, today);

  return (
    <>
      <div className="hd">
        <button className="back-btn" aria-label="もどる" onClick={onBack}>‹</button>
        <span style={{ fontSize: 20 }}>{room.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <div className="hd-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{room.name}</div>
          <div className="hd-sub">Nachumin Diary</div>
        </div>
        <button className="icon-btn" style={{ marginLeft: "auto" }} aria-label="メンバー" onClick={() => setMemOpen(true)}>👥</button>
        <button className="icon-btn" aria-label="テキスト書き出し" onClick={() => setExportOpen(true)}>📤</button>
        <button className="icon-btn" aria-label="テキストから復元" onClick={() => setImportOpen(true)}>📥</button>
      </div>

      {pinned}

      <div className="dl-scroll" ref={scrollRef}>
        <table className="dl-table">
          <thead>
            <tr>
              <th className="dl-datecol"> </th>
              {SLOTS.map((s) => (
                <th key={s.key} className="dl-slothead">{s.emoji}<br />{s.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((dk) => {
              const d = keyToDate(dk);
              const isToday = dk === today;
              return (
                <tr key={dk} className={isToday ? "dl-todayrow" : ""}>
                  <th className="dl-datecol">
                    <span className="dl-md">{d.getMonth() + 1}/{d.getDate()}</span>
                    <span className="dl-wd">{WEEKDAYS[d.getDay()]}</span>
                  </th>
                  {SLOTS.map((s) => {
                    const recs = cellRecs(dk, s.key);
                    const isCurrent = isToday && s.key === curSlot;
                    const cls = "dl-cell"
                      + (isToday ? " today" : "")
                      + (isCurrent ? " current" : "")
                      + (recs.length ? "" : " empty");
                    return (
                      <td
                        key={s.key}
                        className={cls}
                        onClick={() => setPicker({ dateKey: dk, slot: s.key })}
                      >
                        {recs.length > 0 && (
                          <div className="dl-recs">
                            {recs.map((r) => {
                              const mb = memberOf(r.memberId);
                              const color = mb?.color || "#f0f0f0";
                              const memo = r.memo && r.memo.trim();
                              return (
                                <button
                                  key={r.id}
                                  className="dl-rec"
                                  onClick={(e) => { e.stopPropagation(); openMenu(r); }}
                                  aria-label={mb?.name || "記録"}
                                >
                                  <span className="dl-name" style={{ background: color, color: memberText(mb) }}>
                                    {mb?.name || "？"}
                                  </span>
                                  {memo ? <span className="dl-memo">{r.memo}</span> : null}
                                </button>
                              );
                            })}
                          </div>
                        )}
                        {/* 余白タップで同じ枠に追加（＋は置かない） */}
                        {recs.length > 0 && <div className="dl-addspace" />}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {members.length === 0 && (
          <div className="empty">👥からメンバー（人格）を登録してね💗</div>
        )}
      </div>

      {/* ピッカー */}
      {picker && (
        <div className="overlay" onClick={() => setPicker(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>
              {SLOTS.find((s) => s.key === picker.slot)?.emoji}
              {SLOTS.find((s) => s.key === picker.slot)?.label}・{keyToDisp(picker.dateKey)}
            </h3>
            <p className="panel-note">タップで記録／もう一度タップで取り消し</p>
            {members.length === 0 ? (
              <p className="panel-note">先に👥でメンバーを登録してね</p>
            ) : (
              <div className="dl-picker">
                {members.map((m) => {
                  const on = records.some((r) => r.dateKey === picker.dateKey && r.slot === picker.slot && r.memberId === m.id);
                  return (
                    <button
                      key={m.id}
                      className={"dl-pick" + (on ? " on" : "")}
                      style={{ borderColor: on ? "#e0629f" : m.color }}
                      onClick={() => toggleMember(m.id)}
                    >
                      <MIcon icon={m.icon} size={30} color={m.color} />
                      <span className="dl-pick-name">{m.name}</span>
                      {on && <span className="dl-pick-check">✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
            <div className="panel-btns">
              <button className="p-close" onClick={() => setPicker(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* 記録メニュー（メモ・削除） */}
      {menu && (
        <div className="overlay" onClick={() => setMenu(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              <span
                className="dl-name"
                style={{
                  background: memberOf(menu.memberId)?.color || "#f0f0f0",
                  color: memberText(memberOf(menu.memberId)),
                  fontSize: 13, padding: "3px 10px"
                }}
              >{memberOf(menu.memberId)?.name || "？"}</span>
              <span style={{ fontSize: 12, color: "#b06992" }}>
                {SLOTS.find((s) => s.key === menu.slot)?.emoji}{keyToDisp(menu.dateKey)}
              </span>
            </h3>
            <div className="f-label">メモ（話した内容など・任意）</div>
            <textarea
              style={{ minHeight: 90 }}
              placeholder="このとき話したこと、様子など…"
              value={memoDraft}
              onChange={(e) => setMemoDraft(e.target.value)}
            />
            <div className="panel-btns">
              <button className="p-copy" onClick={saveMemo}>保存</button>
              <button className={"p-del" + (recDel ? " arm" : "")} onClick={deleteRec}>
                {recDel ? "ほんとに削除" : "この記録を削除"}
              </button>
              <button className="p-close" onClick={() => setMenu(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {memOpen && (
        <MemberEditor
          members={members}
          onChange={(next) => onRoomChange({ members: next })}
          onClose={() => setMemOpen(false)}
          showToast={showToast}
        />
      )}

      {exportOpen && (
        <div className="overlay" onClick={() => setExportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📤 だれログを書き出し</h3>
            <textarea ref={exRef} readOnly value={exportText()} />
            <div className="panel-btns">
              <button className="p-copy" onClick={doCopy}>{copied ? "コピーしたよ💗" : "ぜんぶコピー"}</button>
              <button className="p-dl" onClick={doDownload}>.txtでDL</button>
              <button className="p-close" onClick={() => setExportOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {importOpen && (
        <div className="overlay" onClick={() => setImportOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h3>📥 テキストから復元</h3>
            <textarea
              placeholder={"エクスポートした .txt を貼り付けてね\n\n🩷2026/07/17🩷 🌅朝:ヒカルくん / 🌙夜:柊くん(メモ)"}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
            />
            <p className="panel-note">※ 知らない人格名は自動登録。同じ日付・時間帯・人格は重複スキップ</p>
            <div className="panel-btns">
              <button className="p-copy" disabled={!importText.trim()} onClick={doImport}>読み込む</button>
              <button className="p-close" onClick={() => { setImportOpen(false); setImportText(""); }}>閉じる</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
