/* eslint-disable no-undef */
module.exports = {
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react-hooks', 'wheatley-code'],
  rules: {
    'react-refresh/only-export-components': 'off',
    quotes: [2, 'single'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'no-prototype-builtins': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // ESLint Plugin
    'wheatley-code/path-checker': ['error', { alias: 'src' }],
    'wheatley-code/public-api-imports': [
      'error',
      {
        alias: 'src',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
      },
    ],
    'wheatley-code/layer-imports': [
      'error',
      {
        alias: 'src',
        ignoreImportPatterns: ['**/store-provider', '**/testing'],
      },
    ],
  },

  overrides: [
    {
      files: ['src/**/*.stories.tsx', 'src/**/*.stories.tsx', 'src/**/*.test.tsx', 'src/**/*.test.ts', '.vscode/*'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
