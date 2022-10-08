/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            fira: ['Fira Code'],
            rockabye: ['rockabye'],
            druk: ['druk']
        },
        extend: {
            height: {
                'half-screen': '50vh'
            },
            colors: {
                indigo: '#303f7b',
                lblue: '#6987c9'
            }
        }
    },
    plugins: []
}
