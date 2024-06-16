import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TypeWeather",
  server: {
    host: '0.0.0.0',
    port: 5000
  }
})
