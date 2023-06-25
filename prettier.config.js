/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  bracketSameLine: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['clsx'],
  pluginSearchDirs: false,
}
