import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), UnoCSS()],
  server: {
    port: 3334,
    host: '0.0.0.0',
  },
})
