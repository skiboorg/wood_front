module.exports = {
    content: [
        "./pages/**/*.{vue,js}",
        "./components/**/*.{vue,js}",
        "./layouts/**/*.{vue,js}",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF550A', // Добавляем свой основной цвет
                secondary: '#9333EA', // Добавляем второй цвет
                customGray: '#B0B0B0', // Добавляем пользовательский серый
            },
        },
    },
    plugins: [],
}