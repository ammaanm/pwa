import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  base:"pwa",
  plugins: [
    solid(),
    VitePWA({
      registerType: "prompt",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "Increment",
        short_name: "Inc",
        description: "Enter a number, and add one to it!",
        theme_color: "#c3c3c3",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
