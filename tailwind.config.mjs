/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                cyan: {
                    dark: '#067f75',
                    light: '#0e8d81',
                }
            }
        },
    },
    plugins: [],
}
