module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 100,
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  endOfLine: 'auto',
  importOrder: [
    '^react(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^components(.*)$',
    '^helpers(.*)$',
    '^static(.*)$',
    '^assets(.*)$',
    '^./[^s]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
