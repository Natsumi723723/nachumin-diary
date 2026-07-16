import { openDB } from "idb";

// ⚠️ DB名・ストア名・キーは絶対に変えないこと。
// アプリを何度更新してもこの名前で読み書きする限りデータは残る。
const DB_NAME = "nachumin-diary";
const DB_VERSION = 1;
const STORE = "kv";

export const STORAGE_KEY = "line-diary-entries-v1";

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
