/* 🔮 未来日記の「入れもの」。
   ⚠️ 本番の原稿はここに置かない。このファイルは公開リポジトリに入るため、
      個人的な内容（会社・目標・人の名前）は端末の中だけに持つ。
      原稿はルームの「原稿を取り込む」から貼り付けて保存する。

   ここにあるのは、使い方が分かるようにするための当たりさわりのないサンプル。 */

export const SAMPLE_ENTRIES = [
  {
    id: "s1",
    ahead: 12,
    text:
      "朝いちばんに鍵をあけるのが、まだちょっと好き。\n" +
      "誰もいないうちに電気をつけて、棚を一段ずつ見ていく時間。\n" +
      "ここに並んでいる色、ぜんぶ自分で決めたんだよなと思う。"
  },
  {
    id: "s2",
    ahead: 36,
    text:
      "打ち合わせの帰り、駅まで歩きながらぜんぶ決まった。\n" +
      "話しはじめて5分で「それやろう」になるの、何年たっても変わらない。\n" +
      "いちばん大きい決定が、いちばん軽い場所で決まる。"
  }
];

/* ─────────────────────────────────────────────
   取り込み用テキストの形式（Codexにはこの形で書いてもらう）

     === 1年後 ===
     本文。何行でもよい。
     続き。

     === 3年後 ===
     本文。

   - `=== ◯◯ ===` が1篇の区切り。◯◯ は「6ヶ月後」「1年後」「1年半後」「3年後」など
   - 区切りの次の行から、次の区切りまでが本文
   ───────────────────────────────────────────── */

// 「1年半後」→ 18（ヶ月）。読めなければ null
export function parseAhead(label) {
  const s = String(label).trim();
  let m = s.match(/^(\d+)\s*[ヶヵケカか]?月後$/);
  if (m) return Number(m[1]);
  m = s.match(/^(\d+)\s*年半後$/);
  if (m) return Number(m[1]) * 12 + 6;
  m = s.match(/^(\d+)\s*年\s*(\d+)\s*[ヶヵケカか]?月後$/);
  if (m) return Number(m[1]) * 12 + Number(m[2]);
  m = s.match(/^(\d+)\s*年後$/);
  if (m) return Number(m[1]) * 12;
  return null;
}

/* 貼り付けたテキスト → 原稿の配列。
   idは内容から作るので、同じ原稿を入れ直しても既読が巻き戻らない。 */
export function parseScript(raw) {
  const text = String(raw || "").replace(/\r\n?/g, "\n");
  const parts = text.split(/^\s*={2,}\s*(.+?)\s*={2,}\s*$/m);
  const out = [];
  const errors = [];
  // split の結果は [先頭のゴミ, ラベル, 本文, ラベル, 本文, ...]
  for (let i = 1; i < parts.length; i += 2) {
    const label = parts[i];
    const body = (parts[i + 1] || "").trim();
    const ahead = parseAhead(label);
    if (ahead == null) { errors.push(`「${label}」が読めません（例: 1年後 / 6ヶ月後 / 1年半後）`); continue; }
    if (!body) { errors.push(`「${label}」の本文がからっぽです`); continue; }
    out.push({ id: `u${hash(label + "\n" + body)}`, ahead, text: body });
  }
  if (!out.length && !errors.length) {
    errors.push("=== 1年後 === のような区切りが見つかりませんでした");
  }
  // 同じ本文が2回入っていたら後ろを捨てる（idが衝突するため）
  const seen = new Set();
  const uniq = out.filter((e) => (seen.has(e.id) ? false : (seen.add(e.id), true)));
  return { entries: uniq, errors };
}

// 内容から短いキーを作る（djb2）
function hash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(36);
}
