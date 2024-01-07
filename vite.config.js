import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ra_2-5_router_menu/',
  // base - базовый урл / часть после https://username.github.io от которой считаются все относительные пути
  plugins: [react()],
})
