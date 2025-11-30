import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/0f8be357-4682-4c49-8326-2524ff78781a/preview/',
  plugins: [react()],
  server: {
    port: 5113,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5113,
    }
  }
})
