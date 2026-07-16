import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// base: "./" — GitHub Pages のプロジェクトサイト(/repo-name/)でも
// そのまま動く相対パス構成。リポジトリ名に依存しない。
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["apple-touch-icon.png"],
      manifest: {
        name: "Nachumin Diary",
        short_name: "Nachumin Diary",
        description: "自分だけのトークルーム日記",
        lang: "ja",
        display: "standalone",
        orientation: "portrait",
        start_url: ".",
        scope: ".",
        theme_color: "#fff0f9",
        background_color: "#f6bedd",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      }
    })
  ]
});
