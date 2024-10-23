import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import px2rem from "postcss-px2rem";
import { splitVendorChunkPlugin } from 'vite'
import copy from 'rollup-plugin-copy'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    imports: ["vue"],
  }), copy({
    targets: [
      { src: './node_modules/libpag/lib/libpag.wasm', dest: process.env.NODE_ENV === 'production' ? 'dist/' : 'public/' },
    ],
    hook: process.env.NODE_ENV === 'production' ? 'writeBundle' : "buildStart",
  })],
  css: {
    postcss: {
      plugins: [
        px2rem({
          remUnit: 37.5,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "components": "/src/components",
      "assets": "/src/assets"
    },
  },
  build: {
    target: 'esnext', // 指定编译目标
    sourcemap: process.env.NODE_ENV !== 'production', // 开发环境中启用 source map
    cssCodeSplit: true, // 启用 CSS 代码拆分
    minify: 'terser', // 使用 terser 来压缩代码
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production', // 生产环境下移除 console
      },
    },
  }
  
})
