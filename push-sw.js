/* 毎朝の名言プッシュ（Service Worker に読み込まれる）。
   サーバーからは中身のない合図だけが届く。名言は端末の IndexedDB から自分で1つ選んで出す
   （言葉を外に出さないため）。DB名・ストア名は storage.js と同じ。読むだけで書かない */

const readKv = (key) => new Promise((resolve) => {
  const req = indexedDB.open("nachumin-diary");
  req.onerror = () => resolve(undefined);
  req.onsuccess = () => {
    try {
      const g = req.result.transaction("kv").objectStore("kv").get(key);
      g.onsuccess = () => resolve(g.result);
      g.onerror = () => resolve(undefined);
    } catch (e) { resolve(undefined); }
  };
});

const pickWord = async () => {
  const rooms = (await readKv("rooms-v1")) || [];
  const all = [];
  for (const r of rooms) {
    if (r.type !== "words") continue;
    const d = await readKv("room-data-v1:" + r.id);
    for (const w of (d && d.words) || []) all.push({ ...w, roomId: r.id });
  }
  return all.length ? all[Math.floor(Math.random() * all.length)] : null;
};

self.addEventListener("push", (event) => {
  event.waitUntil((async () => {
    const w = await pickWord();
    const title = w ? w.text : "💎 今日の名言";
    const body = w ? (w.from ? "— " + w.from : "💎 今日の名言") : "響いた言葉を書き留めてね";
    await self.registration.showNotification(title, {
      body,
      icon: "icon-192.png",
      badge: "icon-192.png",
      tag: "words-morning",
      data: { roomId: w ? w.roomId : "words-main" }
    });
  })());
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = new URL("./?open=" + encodeURIComponent(event.notification.data?.roomId || "words-main"), self.registration.scope).href;
  event.waitUntil((async () => {
    const list = await clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of list) {
      if ("navigate" in c) { await c.focus(); return c.navigate(url); }
    }
    return clients.openWindow(url);
  })());
});
