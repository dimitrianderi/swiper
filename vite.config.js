import { defineConfig } from 'vite'
import * as path from 'path';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/",
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@@', replacement: path.resolve(__dirname, 'src/assets') },
    ],
  },
});
