module.exports = {
  trailingComma: 'all',
  semi: true,
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  importOrder: [
    '^(next/(.*)$)|^(next$)', // Imports by "next"
    'interface',
    'next-seo.config',
    '^components/(.*)$',
    '^utils/(.*)$',
    '^assets/(.*)$',
    '^@fontsource/(.*)$',
    '^[./]', // Other imports
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindConfig: './tailwind.config.js',
};
