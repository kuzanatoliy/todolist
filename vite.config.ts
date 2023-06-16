/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  publicDir: 'public',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    includeSource: ['src/**/*.{js,ts,jsx,tsx}'],
    transformMode: { web: [/\.[jt]sx?$/] },
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src'],
      exclude: ['src/**/index.{ts,tsx}', 'src/**/*.{stories.tsx,types.ts}'],
    },
  },
});
