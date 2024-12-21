import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enable polling for file changes
    },
    host: true,  // Allows access to the dev server from the outside
    strictPort: true,
  },
})
