/* 📷 画像から名言を読み取る。読み取りは Cloudflare（lifelog-push）経由で Claude Haiku。
   送るのは縮小した画像1枚だけ（保存はされない）。名言の一覧は送らない。
   合言葉はこの端末にだけ持つ（バックアップにも入れない） */
import { get, set } from "./storage.js";
import { toReadableBase64 } from "./imageUtil.js";

const READ_API = location.hostname === "localhost"
  ? "http://localhost:8788/api/read"
  : "https://lifelog-push.pages.dev/api/read";
export const READ_PASS_KEY = "readpass-v1";

export const getReadPass = () => get(READ_PASS_KEY).catch(() => null);
export const setReadPass = (v) => set(READ_PASS_KEY, v || null);

/* 失敗は Error の message で返す: pass / limit / image / net / ai */
export async function readWordsFromImage(file, pass) {
  let image;
  try { image = await toReadableBase64(file); } catch (e) { throw new Error("image"); }
  let res;
  try {
    res = await fetch(READ_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image, pass })
    });
  } catch (e) { throw new Error("net"); }
  const j = await res.json().catch(() => ({}));
  if (res.status === 401) throw new Error("pass");
  if (res.status === 429) throw new Error("limit");
  if (!res.ok) throw new Error("ai");
  return { text: j.text || "", from: j.from || "" };
}
