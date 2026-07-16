// PWAアイコン生成: ホットピンク→マゼンタのグラデーション背景 + 白ハート
// 依存ライブラリなし（Node標準のzlibでPNGを直接エンコード）
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
mkdirSync(outDir, { recursive: true });

/* ---- minimal PNG encoder ---- */
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const t = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
};
function encodePNG(width, height, rgbaAt) {
  const raw = Buffer.alloc(height * (1 + width * 4));
  let p = 0;
  for (let y = 0; y < height; y++) {
    raw[p++] = 0; // filter: none
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = rgbaAt(x, y);
      raw[p++] = r; raw[p++] = g; raw[p++] = b; raw[p++] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* ---- heart icon ---- */
const lerp = (a, b, t) => a + (b - a) * t;
// heart curve: (x^2 + y^2 - 1)^3 - x^2 * y^3 <= 0
const inHeart = (nx, ny) => {
  const f = (nx * nx + ny * ny - 1) ** 3 - nx * nx * ny ** 3;
  return f <= 0;
};

function makeIcon(size) {
  const hotPink = [255, 20, 147]; // #FF1493
  const magenta = [255, 0, 170]; // #FF00AA
  const scale = size * 0.28; // heart size (safe zone for maskable)
  const cx = size / 2;
  const cy = size / 2 + size * 0.03;
  return encodePNG(size, size, (x, y) => {
    // diagonal gradient background
    const t = (x + y) / (2 * size);
    const r = Math.round(lerp(hotPink[0], magenta[0], t));
    const g = Math.round(lerp(hotPink[1], magenta[1], t));
    const b = Math.round(lerp(hotPink[2], magenta[2], t));
    // supersample 3x3 for smooth heart edges
    let hit = 0;
    for (let sy = 0; sy < 3; sy++) {
      for (let sx = 0; sx < 3; sx++) {
        const px = x + (sx + 0.5) / 3;
        const py = y + (sy + 0.5) / 3;
        const nx = (px - cx) / scale;
        const ny = -(py - cy) / scale;
        if (inHeart(nx, ny)) hit++;
      }
    }
    const a = hit / 9;
    return [
      Math.round(lerp(r, 255, a)),
      Math.round(lerp(g, 255, a)),
      Math.round(lerp(b, 255, a)),
      255,
    ];
  });
}

for (const [name, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  writeFileSync(join(outDir, name), makeIcon(size));
  console.log(`✓ ${name} (${size}x${size})`);
}
