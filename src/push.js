/* 毎朝の名言プッシュ。購読の受付は Cloudflare（lifelog-push）。
   サーバーに渡すのは購読先URLだけで、名言は送らない（届いた合図で端末が自分で選ぶ）。
   オン/オフの状態は保存せず、毎回ブラウザの購読から読む */

// 手元の開発中は wrangler pages dev（port 8788）へ
const PUSH_API = location.hostname === "localhost"
  ? "http://localhost:8788/api/subscribe"
  : "https://lifelog-push.pages.dev/api/subscribe";
const VAPID_PUBLIC = "BNaRB7lmmtV7KPqaj66Z45eQeiyJHkAQFeXZpLO03S6y6QPPCb-B4mcXZqT8n1mmS0N3AE0pn6k1jeCOrzdfD7c";

const toBytes = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));

// iPhoneはホーム画面に追加したPWAでだけ使える
export const pushSupported = () =>
  "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;

const call = (method, body) =>
  fetch(PUSH_API, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
    .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); });

export async function currentSub() {
  if (!pushSupported()) return null;
  const reg = await navigator.serviceWorker.ready;
  return reg.pushManager.getSubscription();
}

/* 必ずタップの中から呼ぶ（iOSは操作なしの許可ダイアログを出さない） */
export async function enablePush() {
  if ((await Notification.requestPermission()) !== "granted") throw new Error("denied");
  const reg = await navigator.serviceWorker.ready;
  const sub = (await reg.pushManager.getSubscription())
    || (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: toBytes(VAPID_PUBLIC) }));
  await call("POST", { endpoint: sub.endpoint });
  return sub;
}

export async function disablePush() {
  const sub = await currentSub();
  if (!sub) return;
  await call("DELETE", { endpoint: sub.endpoint }).catch(() => {});
  await sub.unsubscribe();
}

export async function testPush() {
  const sub = await currentSub();
  if (!sub) throw new Error("off");
  return call("POST", { endpoint: sub.endpoint, test: true });
}
