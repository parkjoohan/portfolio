import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    content: [
        './pages/**/*.{html,js,jsx,ts,tsx}',
        './components/**/*.{html,js,jsx,ts,tsx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [typography],
};

export default config;
