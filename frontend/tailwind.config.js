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
                primary: '#d56154',
                secondary: '#04523a',
                accent: '#d56154',
                dark: '#0a0a0a',
            }
        }
    },
    plugins: []
}