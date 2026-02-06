import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        react(),
        tailwindcss(),
        viteCompression({ algorithm: 'gzip' }),
        viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    ui: ['radix-ui', 'lucide-react', 'class-variance-authority', 'clsx', 'tailwind-merge'],
                },
            },
        },
    },
});
