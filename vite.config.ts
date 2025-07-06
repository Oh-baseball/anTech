// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@styles/variables";
          @import "@styles/mixins";
        `,
      },
    },
  },
});
