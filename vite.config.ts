import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  build: {
    /* El chunk de three.js es lazy (HeroScene); su tamaño no afecta la carga inicial */
    chunkSizeWarningLimit: 950,
  },
});
