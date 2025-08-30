import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // garante que os assets funcionem no GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
