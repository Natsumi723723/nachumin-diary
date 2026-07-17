/* ---------- date helpers ---------- */
export const pad = (n) => String(n).padStart(2, "0");
export const toKey = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const keyToDisp = (k) => k.split("-").join("/");
export const todayKey = () => toKey(new Date());
export const yesterdayKey = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return toKey(d);
};
export const nowTime = () => {
  const d = new Date();
  return `${d.getHours()}:${pad(d.getMinutes())}`;
};
export const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const uid = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);

// ルーム一覧の日時表示: 今日→H:MM / 昨日→昨日 / それ以外→M/D
export const homeDate = (ts) => {
  if (!ts) return "";
  const d = new Date(ts);
  const now = new Date();
  if (toKey(d) === toKey(now)) return `${d.getHours()}:${pad(d.getMinutes())}`;
  const y = new Date(now);
  y.setDate(now.getDate() - 1);
  if (toKey(d) === toKey(y)) return "昨日";
  return `${d.getMonth() + 1}/${d.getDate()}`;
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
    out.push(`${nameOf(m.memberId)}「${m.text}」`);
  }
  return out.join("\n");
};

export const parseTalkText = (raw) => {
  const msgs = [];
  let dateKey = todayKey();
  let cur = null; // { dateKey, name, lines }
  const flush = () => {
    if (!cur) return;
    let text = cur.lines.join("\n").trim();
    if (text.endsWith("」")) text = text.slice(0, -1);
    if (text) msgs.push({ dateKey: cur.dateKey, name: cur.name, text });
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
      const sm = line.match(/^(.+?)「([\s\S]*)$/u);
      if (!sm) continue; // 話者行以外の迷子行は無視
      cur = { dateKey, name: sm[1].trim(), lines: [sm[2]] };
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
