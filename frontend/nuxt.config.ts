// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from 'url'
import {dirname, resolve} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: [
        resolve(__dirname, 'app/assets/css/main.css')
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
