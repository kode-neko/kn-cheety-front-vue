import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import vuePugPlugin from "vue-pug-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3008,
  },
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          plugins: [
            {
              preCodeGen: vuePugPlugin,
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
