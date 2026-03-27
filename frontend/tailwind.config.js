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
                primary: {
                    DEFAULT: '#d56154',
                    dark: '#b94e43',
                    light: '#e07a6f',
                },
                secondary: {
                    DEFAULT: '#04523a',
                    dark: '#033d2c',
                    light: '#0a6b4c',
                },
                accent: '#d56154',
                dark: '#0a0a0a',
            }
        }
    },
    plugins: []
}