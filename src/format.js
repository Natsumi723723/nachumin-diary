/* ---------- date helpers ----------
   1日の区切りは深夜5:00。0:00〜4:59に書いたものは「前日」の日付になる。
   （時刻そのものの表示は実時刻のまま） */
const DAY_START_HOUR = 5;
const DAY_OFFSET_MS = DAY_START_HOUR * 60 * 60 * 1000;
const logicalNow = () => new Date(Date.now() - DAY_OFFSET_MS);
// タイムスタンプが属する「論理的な日」のDate
const logicalDay = (ts) => new Date(ts - DAY_OFFSET_MS);

export const pad = (n) => String(n).padStart(2, "0");
export const toKey = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const keyToDisp = (k) => k.split("-").join("/");
export const keyToDate = (k) => {
  const [y, m, d] = k.split("-").map(Number);
  return new Date(y, m - 1, d);
};
export const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];
export const todayKey = () => toKey(logicalNow());
export const yesterdayKey = () => {
  const d = logicalNow();
  d.setDate(d.getDate() - 1);
  return toKey(d);
};
export const nowTime = () => {
  const d = new Date(); // 時刻は実時刻
  return `${d.getHours()}:${pad(d.getMinutes())}`;
};
export const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const uid = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);

// ルーム一覧の日時表示: 今日→H:MM(実時刻) / 昨日→昨日 / それ以外→M/D
// 日付の判定は5:00始まりの論理日で行う
export const homeDate = (ts) => {
  if (!ts) return "";
  const real = new Date(ts);
  const dl = logicalDay(ts);
  const nowl = logicalNow();
  if (toKey(dl) === toKey(nowl)) return `${real.getHours()}:${pad(real.getMinutes())}`;
  const y = new Date(nowl);
  y.setDate(nowl.getDate() - 1);
  if (toKey(dl) === toKey(y)) return "昨日";
  return `${dl.getMonth() + 1}/${dl.getDate()}`;
};

/* ---------- 日記型 エクスポート/インポート（現行形式そのまま） ---------- */
export const diaryToText = (entries) =>
  Object.keys(entries)
    .sort()
    .map((k) => `🩷${keyToDisp(k)}🩷 ${entries[k].time}\n${entries[k].text}`)
    .join("\n\n──────────\n\n");

export const parseDiaryText = (raw) => {
  const out = {};
  const blocks = raw.split(/\n*─{3,}\n*/);
  for (const block of blocks) {
    const b = block.trim();
    if (!b) continue;
    const m = b.match(
      /^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(\d{1,2}:\d{2})?\s*\n?([\s\S]*)$/u
    );
    if (!m) continue;
    const key = `${m[1]}-${pad(Number(m[2]))}-${pad(Number(m[3]))}`;
    const text = m[5].trim();
    if (!text) continue;
    out[key] = { text, time: m[4] || "0:00" };
  }
  return out;
};

/* ---------- トーク型 エクスポート/インポート ----------
   形式:
   🩷2026/07/16🩷
   マヨねぇ「セリフ」
   うちゅん「複数行の
   セリフもOK」
*/
export const talkToText = (messages, nameOf) => {
  const out = [];
  let cur = "";
  for (const m of messages) {
    if (m.dateKey !== cur) {
      cur = m.dateKey;
      if (out.length) out.push("");
      out.push(`🩷${keyToDisp(cur)}🩷`);
    }
    out.push(`${m.time ? m.time + " " : ""}${nameOf(m.memberId)}「${m.text}」`);
  }
  return out.join("\n");
};

export const parseTalkText = (raw) => {
  const msgs = [];
  let dateKey = todayKey();
  let cur = null; // { dateKey, name, time, lines }
  const flush = () => {
    if (!cur) return;
    let text = cur.lines.join("\n").trim();
    if (text.endsWith("」")) text = text.slice(0, -1);
    if (text) msgs.push({ dateKey: cur.dateKey, name: cur.name, time: cur.time, text });
    cur = null;
  };
  for (const line of raw.split("\n")) {
    const dm = line
      .trim()
      .match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);
    if (dm) {
      flush();
      dateKey = `${dm[1]}-${pad(Number(dm[2]))}-${pad(Number(dm[3]))}`;
      continue;
    }
    if (!cur) {
      // 先頭に任意の時刻(H:MM)が付いていれば取り出す
      const sm = line.match(/^(?:(\d{1,2}:\d{2})\s+)?(.+?)「([\s\S]*)$/u);
      if (!sm) continue; // 話者行以外の迷子行は無視
      cur = { dateKey, name: sm[2].trim(), time: sm[1] || "", lines: [sm[3]] };
    } else {
      cur.lines.push(line);
    }
    const last = cur.lines[cur.lines.length - 1].trimEnd();
    if (last.endsWith("」")) {
      cur.lines[cur.lines.length - 1] = last;
      flush();
    }
  }
  flush();
  return msgs;
};

/* ---------- だれログ型（朝昼夜の人格記録） ---------- */
export const SLOTS = [
  { key: "morning", label: "朝", emoji: "🌅" },
  { key: "noon", label: "昼", emoji: "☀️" },
  { key: "night", label: "夜", emoji: "🌙" }
];
// 29時制: 5:00-10:59=朝 / 11:00-16:59=昼 / 17:00-4:59=夜
export const slotOfNow = () => {
  const h = new Date().getHours();
  if (h >= 5 && h < 11) return "morning";
  if (h >= 11 && h < 17) return "noon";
  return "night";
};
const slotOrder = { morning: 0, noon: 1, night: 2 };

export const darelogToText = (records, members) => {
  const nameOf = (id) => members.find((m) => m.id === id)?.name || "？";
  const byDate = {};
  for (const r of records) {
    (byDate[r.dateKey] ||= { morning: [], noon: [], night: [] })[r.slot].push(r);
  }
  const lines = [];
  for (const dk of Object.keys(byDate).sort()) {
    const parts = [];
    for (const s of SLOTS) {
      const rs = byDate[dk][s.key];
      if (!rs.length) continue;
      const names = rs
        .map((r) => nameOf(r.memberId) + (r.memo && r.memo.trim() ? `(${r.memo.trim()})` : ""))
        .join("・");
      parts.push(`${s.emoji}${s.label}:${names}`);
    }
    if (parts.length) lines.push(`🩷${keyToDisp(dk)}🩷 ${parts.join(" / ")}`);
  }
  return lines.join("\n");
};

// "🩷2026/07/17🩷 🌅朝:ヒカルくん / ☀️昼:柊くん(メモ) / 🌙夜:ひかりちゃん・柊くん"
export const parseDarelogText = (raw) => {
  const out = [];
  const slotFrom = (s) => (s.includes("朝") ? "morning" : s.includes("昼") ? "noon" : s.includes("夜") ? "night" : null);
  for (const line of raw.split("\n")) {
    const m = line.match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*(.*)$/u);
    if (!m) continue;
    const dateKey = `${m[1]}-${pad(Number(m[2]))}-${pad(Number(m[3]))}`;
    const rest = m[4];
    if (!rest.trim()) continue;
    for (const part of rest.split("/")) {
      const ci = part.indexOf(":");
      const ci2 = part.indexOf("：");
      const idx = ci === -1 ? ci2 : ci2 === -1 ? ci : Math.min(ci, ci2);
      if (idx === -1) continue;
      const slot = slotFrom(part.slice(0, idx));
      if (!slot) continue;
      const names = part.slice(idx + 1);
      for (const nm of names.split("・")) {
        const mm = nm.trim().match(/^(.+?)(?:[(（]([\s\S]*)[)）])?$/u);
        if (!mm) continue;
        const name = mm[1].trim();
        if (!name) continue;
        out.push({ dateKey, slot, name, memo: (mm[2] || "").trim() });
      }
    }
  }
  return out;
};

// レコード配列を「日付→時間帯→[レコード]」に畳む
export const groupDarelog = (records) => {
  const map = {};
  for (const r of records) {
    (map[r.dateKey] ||= { morning: [], noon: [], night: [] })[r.slot].push(r);
  }
  return map;
};

// 表示する日付の並び（古い順・下が今日）。最低35日ぶん＋記録のある最古日まで
export const darelogDateRows = (records, todayK) => {
  let earliest = todayK;
  for (const r of records) if (r.dateKey < earliest) earliest = r.dateKey;
  const end = keyToDate(todayK);
  const min = keyToDate(todayK);
  min.setDate(min.getDate() - 34);
  const startD = keyToDate(earliest) < min ? keyToDate(earliest) : min;
  const rows = [];
  for (let cur = new Date(startD); toKey(cur) <= todayK; cur.setDate(cur.getDate() + 1)) {
    rows.push(toKey(cur));
  }
  return rows;
};

export { slotOrder };

/* ---------- TODO型 エクスポート/インポート ---------- */
export const todoToText = (todos) => {
  const out = [];
  let cur = "";
  for (const t of todos) {
    if (t.dateKey !== cur) {
      cur = t.dateKey;
      if (out.length) out.push("");
      out.push(`🩷${keyToDisp(cur)}🩷`);
    }
    out.push(`${t.done ? "☑" : "☐"} ${t.text}`);
  }
  return out.join("\n");
};

export const parseTodoText = (raw) => {
  const items = [];
  let dateKey = todayKey();
  for (const line of raw.split("\n")) {
    const dm = line.trim().match(/^🩷?\s*(\d{4})[/-](\d{1,2})[/-](\d{1,2})\s*🩷?\s*$/u);
    if (dm) {
      dateKey = `${dm[1]}-${pad(Number(dm[2]))}-${pad(Number(dm[3]))}`;
      continue;
    }
    const m = line.match(/^\s*([☑☐✓])\s+(.+)$/u);
    if (!m) continue;
    const done = m[1] === "☑" || m[1] === "✓";
    const text = m[2].trim();
    if (text) items.push({ dateKey, text, done });
  }
  return items;
};

/* ---------- 完了TODOの日記への自動反映（🩷 できたこと セクション） ---------- */
export const DONE_HEADER = "🩷 できたこと";
const doneLineOf = (text, time) => `☑ ${text}${time ? ` (${time})` : ""}`;

// 日記吹き出しの末尾「🩷 できたこと」セクションに完了行を追加（重複は無視）
export const addDoneLine = (entryText, text, time) => {
  const line = doneLineOf(text, time);
  const t = entryText || "";
  const lines = t.split("\n");
  if (lines.includes(line)) return t; // 二重追加を防ぐ
  const hi = lines.indexOf(DONE_HEADER);
  if (hi === -1) {
    const body = t.trim();
    return (body ? body + "\n\n" : "") + DONE_HEADER + "\n" + line;
  }
  // ヘッダー直後の☑行の並びの末尾に挿入
  let insertAt = hi + 1;
  for (let i = hi + 1; i < lines.length; i++) {
    if (lines[i].startsWith("☑ ")) insertAt = i + 1;
    else break;
  }
  lines.splice(insertAt, 0, line);
  return lines.join("\n");
};

// 完了行を削除。見つからなければ null（＝何もしない合図）
export const removeDoneLine = (entryText, text, time) => {
  const line = doneLineOf(text, time);
  const lines = (entryText || "").split("\n");
  const idx = lines.indexOf(line);
  if (idx === -1) return null;
  lines.splice(idx, 1);
  const hi = lines.indexOf(DONE_HEADER);
  if (hi !== -1) {
    const hasAny = lines.slice(hi + 1).some((l) => l.startsWith("☑ "));
    if (!hasAny) {
      lines.splice(hi, 1); // ☑行が無くなったらヘッダーも消す
      if (hi - 1 >= 0 && lines[hi - 1] === "") lines.splice(hi - 1, 1);
    }
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").replace(/\s+$/, "");
};

/* ---------- 今日の宣言（日記への自動記録用） ---------- */
export const DECL_MARKER = "🎬 今日のコマ: ";

export const stripDeclLine = (text) =>
  (text || "")
    .split("\n")
    .filter((l) => !l.startsWith(DECL_MARKER))
    .join("\n")
    .replace(/^\n+/, "");

// 日記吹き出しの先頭に宣言行を差し込む（既存の宣言行は置き換え）
export const applyDeclToEntryText = (text, decl) => {
  const body = stripDeclLine(text).trim();
  const line = DECL_MARKER + decl;
  return body ? `${line}\n\n${body}` : line;
};
