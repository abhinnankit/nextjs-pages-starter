module.exports = {
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
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-sort-json', 'prettier-plugin-tailwindcss'],
  printWidth: 120,
  proseWrap: 'always',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['clsx'],
};
