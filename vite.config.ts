import { defineConfig } from 'vite';
import htmlPlugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [htmlPlugin()],
  build: {
    outDir: 'dist',
  },
});