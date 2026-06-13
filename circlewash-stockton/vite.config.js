import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/circlewash-stockton-marketing/',
  googlePlaceId: "ChIJcaa5Rn2HhYARXQ0Bp_FmMXI",
  plugins: [react()],
});
