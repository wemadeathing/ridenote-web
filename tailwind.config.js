/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        lime: {
          400: '#C4F82A',
          500: '#B0E025',
          600: '#9AC720',
        },
      },
    },
  },
  plugins: [],
};
