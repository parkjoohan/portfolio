/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{html,js,jsx,ts,tsx}',
        './components/**/*.{html,js,jsx,ts,tsx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [],
};
