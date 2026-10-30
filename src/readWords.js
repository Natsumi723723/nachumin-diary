/* 📷 画像から名言を読み取る。送るのは縮小した画像1枚だけ（保存はされない）。名言の一覧は送らない */
import { toReadableBase64 } from "./imageUtil.js";
import { callAiWithPass } from "./ai.js";

/* 失敗は Error の message: image / pass / limit / net / ai / cancel */
export async function readWordsFromImage(file, askPass) {
  let image;
  try { image = await toReadableBase64(file); } catch (e) { throw new Error("image"); }
  const j = await callAiWithPass("read", { image }, askPass);
  return { text: j.text || "", from: j.from || "" };
}
