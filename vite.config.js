import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/t1_React/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        globIgnores: ["**/screenshot_DOOM.png"],
      },
      manifest: {
        name: "Nébula Infinite Gaming Systems",
        short_name: "Nébula",
        description: "Computadores gaming de alto rendimiento",
        scope: "/",
        start_url: "/",
        display: "standalone",
        theme_color: "#05080d",
        background_color: "#05080d",
        icons: [
          {
            src: "image192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "image512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  build: {
    target: "es2020",
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react/")
          ) {
            return "vendor-react";
          }
          if (id.includes("node_modules/react-router")) {
            return "vendor-router";
          }
        },
      },
    },
  },
});
