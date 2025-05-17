import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import * as path from "node:path";
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        viteImagemin({
            gifsicle: { optimizationLevel: 7 },
            optipng: { optimizationLevel: 7 },
            mozjpeg: { quality: 75 },
            svgo: { plugins: [{ removeViewBox: false }] },
        })],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react')) {
                            return 'vendor-react'
                        }
                        if (id.includes('leaflet')) {
                            return 'vendor-leaflet'
                        }
                        if (id.includes('axios')) {
                            return 'vendor-axios'
                        }
                        return 'vendor-other'
                    }

                    if (id.includes('/page/home')) return 'home'
                    if (id.includes('/page/map')) return 'map'
                    if (id.includes('/page/profile')) return 'profile'
                    if (id.includes('/page/cafelist')) return 'cafelist'

                    return undefined
                }
            }
        }
    }
})
