import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7600,
  },
  resolve: {
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
