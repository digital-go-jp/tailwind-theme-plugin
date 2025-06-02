import { resolve } from 'path';
import { defineConfig } from 'vite';
import { peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, '/src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
    },
    outDir: '../dist',
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
});
