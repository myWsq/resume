import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import components from "vite-plugin-components";
import windicss from "vite-plugin-windicss";

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  base: "/resume",
  plugins: [vue(), components(), windicss()],
});
