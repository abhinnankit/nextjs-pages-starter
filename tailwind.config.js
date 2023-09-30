/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {},
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
