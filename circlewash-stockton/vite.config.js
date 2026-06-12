import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/circlewash-stockton-marketing/',
  plugins: [react()],
});
