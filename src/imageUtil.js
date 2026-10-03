/* 画像を取り込むときの縮小・JPEG化。
   原本は写真アプリに残しておく前提なので、アプリ側は「見返すためのコピー」を持つ。
   そのぶん軽くして、端末の容量を圧迫しないようにする。 */

export const FULL_SIDE = 1080; // 閲覧用（インスタ投稿と同じ幅）
export const THUMB_SIDE = 360; // 一覧のマス用
export const FULL_Q = 0.82;
export const THUMB_Q = 0.7;

// ファイル → 画像。HEICなどはブラウザが対応していないと失敗するので呼び出し側で拾う
async function load(file) {
  if (typeof createImageBitmap === "function") {
    try { return await createImageBitmap(file); } catch (e) { /* フォールバックへ */ }
  }
  const url = URL.createObjectURL(file);
  try {
    return await new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = () => rej(new Error("decode-failed"));
      img.src = url;
    });
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

const sizeOf = (img) => ({
  w: img.naturalWidth || img.width,
  h: img.naturalHeight || img.height
});

// 長辺が maxSide を超えていたら縮める（小さい画像は拡大しない）
function draw(img, maxSide) {
  const { w, h } = sizeOf(img);
  const scale = Math.min(1, maxSide / Math.max(w, h));
  const cw = Math.max(1, Math.round(w * scale));
  const ch = Math.max(1, Math.round(h * scale));
  const c = document.createElement("canvas");
  c.width = cw;
  c.height = ch;
  const ctx = c.getContext("2d");
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, cw, ch);
  return { canvas: c, w: cw, h: ch };
}

const toBlob = (canvas, q) => new Promise((res, rej) => {
  canvas.toBlob((b) => (b ? res(b) : rej(new Error("encode-failed"))), "image/jpeg", q);
});

/* 1枚のファイルから、閲覧用とマス用の2つを作る。
   マス用を別に持つのは、一覧で何百枚も原寸を読まないため。 */
export async function makePhoto(file) {
  const img = await load(file);
  const full = draw(img, FULL_SIDE);
  const thumb = draw(img, THUMB_SIDE);
  const [fullBlob, thumbBlob] = await Promise.all([
    toBlob(full.canvas, FULL_Q),
    toBlob(thumb.canvas, THUMB_Q)
  ]);
  if (img.close) img.close();
  return { fullBlob, thumbBlob, w: full.w, h: full.h };
}

// 「1.2MB」のような表示用
export const sizeLabel = (bytes) => {
  const n = Number(bytes) || 0;
  if (n < 1024) return `${n}B`;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)}KB`;
  if (n < 1024 * 1024 * 1024) return `${(n / 1024 / 1024).toFixed(1)}MB`;
  return `${(n / 1024 / 1024 / 1024).toFixed(2)}GB`;
};
