import {
  get, set, ROOMS_KEY, roomDataKey, DECL_KEY, doneLogKey, MARKS_KEY,
  habitsKey, habitLogKey, habitSeedKey
} from "./storage.js";

const SLOT_EMOJI = { morning: "🌅", noon: "☀️", night: "🌙" };

// ルーム本文から一覧プレビュー用のメタを作る
function metaFromData(room, data) {
  if (room.type === "talk") {
    const msgs = (data && data.messages) || [];
    const last = msgs[msgs.length - 1];
    const nameOf = (id) => (room.members || []).find((m) => m.id === id)?.name || "";
    return {
      previewName: last ? nameOf(last.memberId) : "",
      preview: last ? last.text.split("\n")[0].slice(0, 40) : "",
      lastAt: room.lastAt || (last ? Date.now() : 0)
    };
  }
  if (room.type === "todo") {
    const ts = (data && data.todos) || [];
    const last = ts[ts.length - 1];
    return {
      preview: last ? `${last.done ? "☑" : "☐"} ${last.text.split("\n")[0]}`.slice(0, 40) : "",
      todoOpen: ts.filter((t) => !t.done).length,
      lastAt: room.lastAt || (last ? Date.now() : 0)
    };
  }
  if (room.type === "darelog") {
    const recs = (data && data.records) || [];
    const last = recs[recs.length - 1];
    const nameOf = (id) => (room.members || []).find((m) => m.id === id)?.name || "";
    return {
      preview: last ? `${SLOT_EMOJI[last.slot] || ""} ${nameOf(last.memberId)}`.trim() : "",
      lastAt: room.lastAt || (last ? Date.now() : 0)
    };
  }
  if (room.type === "expense") {
    const exp = (data && data.expenses) || [];
    const last = exp[exp.length - 1];
    const cn = (id) => (room.categories || []).find((c) => c.id === id)?.name || "";
    return {
      preview: last ? `${cn(last.categoryId)} ¥${(last.amount || 0).toLocaleString("ja-JP")}` : "",
      lastAt: room.lastAt || (last ? Date.now() : 0)
    };
  }
  const es = data && typeof data === "object" ? data : {};
  const ks = Object.keys(es).sort();
  const lastKey = ks[ks.length - 1];
  return {
    preview: lastKey ? es[lastKey].text.split("\n")[0].slice(0, 40) : "",
    lastAt: room.lastAt || (lastKey ? Date.now() : 0)
  };
}

/* 全データを1つのJSONにまとめる（iCloud/ファイルに保存する用の完全バックアップ）
   rooms + 各ルームの本文 + 今日の宣言 を丸ごと含む */
export async function dumpAll() {
  const rooms = (await get(ROOMS_KEY)) || [];
  const data = {};
  for (const r of rooms) {
    const d = await get(roomDataKey(r.id));
    if (d !== undefined) data[r.id] = d;
  }
  const declaration = (await get(DECL_KEY)) || null;
  const doneLogs = {};
  const habits = {};
  const habitLogs = {};
  const habitSeeds = {};
  for (const r of rooms) {
    const dl = await get(doneLogKey(r.id));
    if (dl && Object.keys(dl).length) doneLogs[r.id] = dl;
    const hb = await get(habitsKey(r.id));
    if (Array.isArray(hb) && hb.length) habits[r.id] = hb;
    const hl = await get(habitLogKey(r.id));
    if (hl && Object.keys(hl).length) habitLogs[r.id] = hl;
    if (await get(habitSeedKey(r.id))) habitSeeds[r.id] = true;
  }
  const marks = (await get(MARKS_KEY)) || null;
  return {
    app: "nachumin-diary",
    version: 1,
    exportedAt: new Date().toISOString(),
    rooms,
    data,
    declaration,
    doneLogs,
    habits,
    habitLogs,
    habitSeeds,
    marks
  };
}

// 日付キー順に安定ソート（トーク配列用）
const byDate = (msgs) =>
  msgs
    .map((m, i) => [m, i])
    .sort((a, b) => (a[0].dateKey < b[0].dateKey ? -1 : a[0].dateKey > b[0].dateKey ? 1 : a[1] - b[1]))
    .map(([m]) => m);

/* バックアップから復元（非破壊マージ）。
   - 無いルームは丸ごと追加
   - あるルームは中身をマージ（配列系=署名一致はスキップ、日記=無い日付だけ追加）
   既存データは絶対に上書き・削除しない */
export async function restoreAll(obj) {
  if (!obj || obj.app !== "nachumin-diary" || !Array.isArray(obj.rooms)) {
    throw new Error("invalid-backup");
  }
  const curRooms = (await get(ROOMS_KEY)) || [];
  const byId = new Map(curRooms.map((r) => [r.id, { ...r }]));
  let addedRooms = 0;
  let addedItems = 0;

  for (const r of obj.rooms) {
    const incoming = obj.data ? obj.data[r.id] : undefined;
    // 配列ベースのルームは (キー, 署名) で重複判定
    const arrKey = r.type === "talk" ? "messages"
      : r.type === "todo" ? "todos"
      : r.type === "darelog" ? "records"
      : r.type === "expense" ? "expenses" : null;
    const sigOf = (x) => arrKey === "messages" ? `${x.dateKey} ${x.memberId} ${x.text}`
      : arrKey === "todos" ? `${x.dateKey} ${x.text}`
      : arrKey === "records" ? `${x.dateKey} ${x.slot} ${x.memberId}`
      : x.id;

    if (!byId.has(r.id)) {
      if (incoming !== undefined) await set(roomDataKey(r.id), incoming);
      byId.set(r.id, { ...r, ...metaFromData(r, incoming) });
      addedRooms += 1;
      if (arrKey) addedItems += incoming?.[arrKey]?.length || 0;
      else addedItems += incoming ? Object.keys(incoming).length : 0;
      continue;
    }
    // 既存ルーム: マージ
    const cur = byId.get(r.id);
    if (arrKey) {
      const curData = (await get(roomDataKey(r.id))) || {};
      const curArr = curData[arrKey] || [];
      const seen = new Set(curArr.map(sigOf));
      let arr = curArr.slice();
      for (const x of incoming?.[arrKey] || []) {
        if (!seen.has(sigOf(x))) {
          seen.add(sigOf(x));
          arr.push(x);
          addedItems += 1;
        }
      }
      if (arrKey === "messages") arr = byDate(arr);
      const finalData = { [arrKey]: arr };
      await set(roomDataKey(r.id), finalData);
      // メンバー統合（トーク・だれログ）
      let mergedRoom = { ...cur };
      if (r.type === "talk" || r.type === "darelog") {
        const curMembers = cur.members || [];
        const memIds = new Set(curMembers.map((m) => m.id));
        mergedRoom.members = curMembers.concat((r.members || []).filter((m) => !memIds.has(m.id)));
      }
      byId.set(r.id, { ...mergedRoom, ...metaFromData(mergedRoom, finalData) });
    } else {
      const curData = (await get(roomDataKey(r.id))) || {};
      const merged = { ...curData };
      for (const k of Object.keys(incoming || {})) {
        if (!merged[k]) {
          merged[k] = incoming[k];
          addedItems += 1;
        }
      }
      await set(roomDataKey(r.id), merged);
      byId.set(r.id, { ...cur, ...metaFromData(cur, merged) });
    }
  }

  // できたことログを非破壊マージ（日付ごとに (text,time) で重複除外）
  if (obj.doneLogs) {
    for (const [rid, log] of Object.entries(obj.doneLogs)) {
      const key = doneLogKey(rid);
      const cur = (await get(key)) || {};
      const merged = { ...cur };
      for (const [dk, items] of Object.entries(log)) {
        const arr = (merged[dk] || []).slice();
        for (const it of items) {
          if (!arr.some((x) => x.text === it.text && x.time === it.time)) arr.push(it);
        }
        merged[dk] = arr;
      }
      await set(key, merged);
    }
  }
  // 習慣定義（そのルームに未設定のときだけ取り込む）
  if (obj.habits) {
    for (const [rid, hb] of Object.entries(obj.habits)) {
      const cur = await get(habitsKey(rid));
      if (cur === undefined) await set(habitsKey(rid), hb);
    }
  }
  // 習慣シード印（週報の二重追加を防ぐ）
  if (obj.habitSeeds) {
    for (const rid of Object.keys(obj.habitSeeds)) {
      if (obj.habitSeeds[rid]) await set(habitSeedKey(rid), true);
    }
  }
  // 習慣の達成ログ（日付ごとにマージ・重複除外）
  if (obj.habitLogs) {
    for (const [rid, log] of Object.entries(obj.habitLogs)) {
      const key = habitLogKey(rid);
      const cur = (await get(key)) || {};
      const merged = { ...cur };
      for (const [dk, ids] of Object.entries(log)) {
        merged[dk] = [...new Set([...(merged[dk] || []), ...ids])];
      }
      await set(key, merged);
    }
  }
  // マーク（未設定のときだけ取り込む）
  if (Array.isArray(obj.marks) && obj.marks.length) {
    const curMarks = await get(MARKS_KEY);
    if (!Array.isArray(curMarks) || !curMarks.length) await set(MARKS_KEY, obj.marks);
  }

  const nextRooms = [...byId.values()];
  await set(ROOMS_KEY, nextRooms);
  return { addedRooms, addedItems, rooms: nextRooms };
}
