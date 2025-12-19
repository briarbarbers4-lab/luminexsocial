import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { ViteDevServer } from 'vite';

// Custom plugin for SPA routing - ensure all routes return index.html
const spaFallbackPlugin = () => {
  return {
    name: 'spa-fallback',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use((req: any, _res: any, next: any) => {
          // For all non-file requests (no extension), serve index.html
          // This allows React Router to handle all page routes
          if (req.url && !req.url.includes('.') && !req.url.startsWith('/api')) {
            req.url = '/index.html';
          }
          next();
        });
      };
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    cors: true,
    hmr: {
      clientPort: 443,
    },
    middlewareMode: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
  },
});
