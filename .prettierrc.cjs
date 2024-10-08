/** @type{import('prettier').Config} */
const config = {
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 120,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};

module.exports = config;
