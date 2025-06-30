import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 允许外部访问（默认只监听 localhost）
    port: 5173,       // 保持默认端口，也可自定义
    strictPort: true, // 端口被占用时不要换新端口
  },
})
