import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./build",
    assetsDir: "assets",
    rollupOptions: {
      input: "/src/main.jsx",
      output: {
        entryFileNames: "app.js",
        assetFileNames: "app[extname]",
      },
      manualChunks: undefined,
    },
  },
  css: {
    minify: true,
  },
  base: "./",
});
