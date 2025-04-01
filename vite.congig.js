import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // publicフォルダを指定
  build: {
    outDir: 'dist'
  }
});
