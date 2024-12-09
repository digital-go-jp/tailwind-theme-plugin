import { defineConfig } from 'vite';
import { resolve } from 'path';
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
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
});
