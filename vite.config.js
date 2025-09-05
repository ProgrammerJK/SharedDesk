import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/<REPO>/', // Setze den Base-Pfad für GitHub Pages
  server: {
    port: 3000,
    open: true
  }
})
