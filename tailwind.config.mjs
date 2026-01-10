/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                cyan: {
                    dark: '#067f75', // Primary Brand Color
                    light: '#0e8d81', // Hover/Active State
                    msg: '#00D1FF' // Message/Accent
                },
                dark: {
                    bg: '#0a0a0a',      // Main Background
                    surface: '#121212', // Cards/Sections
                    border: '#262626'   // Borders
                }
            }
        },
    },
    plugins: [],
}
