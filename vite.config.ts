import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  publicDir: 'public',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
