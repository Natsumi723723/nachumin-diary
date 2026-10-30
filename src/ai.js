/* AIを使う機能の共通部分（📷 名言の読み取り・💗 なうのふりかえり）。
   呼び先は Cloudflare（lifelog-push）。合言葉はこの端末にだけ持つ（バックアップに入れない） */
import { get, set } from "./storage.js";

const API_BASE = location.hostname === "localhost"
  ? "http://localhost:8788/api/"
  : "https://lifelog-push.pages.dev/api/";
export const AI_PASS_KEY = "readpass-v1"; // 📷で最初に作ったキー名のまま使う

export const getAiPass = () => get(AI_PASS_KEY).catch(() => null);
export const setAiPass = (v) => set(AI_PASS_KEY, v || null);

/* 失敗は Error の message で返す: pass / limit / net / ai / その他サーバーのerror */
export async function callAi(path, body, pass) {
  let res;
  try {
    res = await fetch(API_BASE + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, pass })
    });
  } catch (e) { throw new Error("net"); }
  const j = await res.json().catch(() => ({}));
  if (res.status === 401) throw new Error("pass");
  if (res.status === 429) throw new Error("limit");
  if (!res.ok) throw new Error(j.error || "ai");
  return j;
}

/* 合言葉つきで呼ぶ。合言葉が無い／違うときは askPass(wrong) で聞いて、もう一度だけ試す */
export async function callAiWithPass(path, body, askPass) {
  let pass = await getAiPass();
  for (let tries = 0; tries < 3; tries++) {
    if (!pass) {
      pass = await askPass(tries > 0);
      if (!pass) throw new Error("cancel");
    }
    try {
      const j = await callAi(path, body, pass);
      await setAiPass(pass);
      return j;
    } catch (e) {
      if (e.message !== "pass") {
        if (e.message !== "net") await setAiPass(pass); // 合言葉は通っている
        throw e;
      }
      await setAiPass(null);
      pass = null;
    }
  }
  throw new Error("pass");
}
