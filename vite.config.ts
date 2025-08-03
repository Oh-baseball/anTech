// vite.config.ts
import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      template: 'network',
      gzipSize: true,
      brotliSize: true,
      open: true,
    }) as PluginOption,
  ],
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
          @use "@styles/variables" as *;
          @use "@styles/mixins" as *;
        `,
      },
    },
  },
  // 정적 파일 처리 개선
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // assetInfo.name이 undefined일 수 있으므로 안전하게 처리
          if (!assetInfo.name) {
            return `assets/[name]-[hash][extname]`;
          }

          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/svg|png|jpe?g|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_BASE_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
