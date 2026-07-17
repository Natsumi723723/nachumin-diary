import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App.jsx";
import { requestPersist } from "./storage.js";

/* Service Worker: 新しいバージョンに切り替わったら自動でリロード。
   これでホーム画面PWAでも、開き直すたびに最新版へ更新される。 */
let refreshing = false;
let hadController = !!(navigator.serviceWorker && navigator.serviceWorker.controller);
if (navigator.serviceWorker) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!hadController) {
      hadController = true; // 初回インストール時はリロード不要
      return;
    }
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

registerSW({
  immediate: true,
  onRegisteredSW(url, r) {
    if (!r) return;
    r.update(); // 起動直後にチェック
    setInterval(() => r.update(), 60 * 60 * 1000); // 1時間ごと
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") r.update(); // 復帰時にもチェック
    });
  }
});

requestPersist();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
