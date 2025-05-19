import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  base: "/yadl-client-ts",
  plugins: [react(),
  tailwindcss(),
  compression()
  ],
})
