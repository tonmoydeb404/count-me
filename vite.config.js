import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt", "*.svg", "*.png", "*.ico"],
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Count Me",
        short_name: "Count Me",
        theme_color: "#2196f3",
        background_color: "#2196f3",
        display: "standalone",
        scope: "/",
        start_url: "/",

        icons: [
          {
            src: "./maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
