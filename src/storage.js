import { openDB } from "idb";

// ⚠️ DB名・ストア名・DBバージョンは絶対に変えないこと。
// 新機能はすべて「kvストアへのキー追加」で実現する(スキーマ変更をしない)。
const DB_NAME = "nachumin-diary";
const DB_VERSION = 1;
const STORE = "kv";

// 旧・単一日記のキー。移行後も絶対に消さない・書き換えない(保険として永久保存)
export const LEGACY_KEY = "line-diary-entries-v1";
// ルーム一覧メタデータ
export const ROOMS_KEY = "rooms-v1";
// ルームごとの本文データ
export const roomDataKey = (id) => `room-data-v1:${id}`;
// ルーム削除時の退避先(ハード削除しない)
export const trashKey = (id) => `trash-v1:${id}:${Date.now()}`;
// 今日の宣言
export const DECL_KEY = "declaration-v1";
// 箇条書きマークのユーザー設定
export const MARKS_KEY = "marks-v1";
export const DEFAULT_MARKS = ["・", "❤︎", "🩷", "💛", "🩵", "💜", "✨", "✔︎"];
// 完了TODOの「できたこと」ログ（日記本文とは別データ）
export const doneLogKey = (roomId) => `donelog-v1:${roomId}`;
// 習慣（ハビットトラッカー）: 定義と日別の達成ログ
export const habitsKey = (roomId) => `habits-v1:${roomId}`;
export const habitLogKey = (roomId) => `habitlog-v1:${roomId}`;
export const habitSeedKey = (roomId) => `habitseed-v1:${roomId}`; // 週報を一度だけ用意した印

export const DIARY_ROOM_ID = "diary-main";

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE)) {
      db.createObjectStore(STORE);
    }
  }
});

export async function get(key) {
  const db = await dbPromise;
  return db.get(STORE, key);
}

export async function set(key, value) {
  const db = await dbPromise;
  return db.put(STORE, value, key);
}

// ブラウザにストレージの永続化を要求（勝手に消されるのを防ぐ）
export async function requestPersist() {
  try {
    if (navigator.storage && navigator.storage.persist) {
      await navigator.storage.persist();
    }
  } catch (e) {
    /* 非対応環境は無視 */
  }
}

/* 起動時ロード + 旧データ移行（冪等・非破壊）
   - rooms-v1 が無ければ旧キーの日記を「日記」ルームとして取り込む
   - 旧キーは読むだけ。削除も上書きもしない
   - rooms-v1 の書き込みを最後に行う（=コミット）。
     途中で失敗しても次回起動時に最初からやり直せる */
export async function loadRooms() {
  const existing = await get(ROOMS_KEY);
  if (existing) return existing;

  let legacy = await get(LEGACY_KEY);
  if (typeof legacy === "string") {
    try {
      legacy = JSON.parse(legacy);
    } catch (e) {
      legacy = null;
    }
  }
  const entries = legacy && typeof legacy === "object" ? legacy : {};
  await set(roomDataKey(DIARY_ROOM_ID), entries);

  const keys = Object.keys(entries).sort();
  const lastKey = keys[keys.length - 1];
  const rooms = [
    {
      id: DIARY_ROOM_ID,
      type: "diary",
      name: "日記",
      emoji: "💗",
      createdAt: Date.now(),
      lastAt: lastKey ? Date.now() : 0,
      preview: lastKey ? entries[lastKey].text.split("\n")[0].slice(0, 40) : ""
    }
  ];
  await set(ROOMS_KEY, rooms);
  return rooms;
}
