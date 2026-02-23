import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Forçamos o retorno de um objeto claro para o compilador
export default defineConfig(() => {
  return {
    plugins: [react()],
    publicDir: 'public',
    build: {
      outDir: 'dist',
    }
  }
})
