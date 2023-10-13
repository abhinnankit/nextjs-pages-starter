/** @type {import('tailwindcss').Config} */

module.exports = {
  relative: true,
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        'grey-olive': '#AEAD9A',
        'warm-grey': '#8F9090',
        'milk-white': '#FEFCF8',
        gravel: '#484848',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
