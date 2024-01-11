import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      types: '/src/types',
      hooks: '/src/hooks',
      pages: '/src/pages',
      routes: '/src/routes',
      helpers: '/src/helpers',
    },
  },
});
