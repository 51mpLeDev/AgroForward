export default {
    content: [
        "./app/components/**/*.{vue,js,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/app.vue"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8B0000',
                accent: '#C9A24A',
                dark: '#121212'
            }
        }
    },
    plugins: []
}