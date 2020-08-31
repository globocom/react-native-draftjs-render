module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // This should be after other extends and before "prettier/*" extends
    'prettier/@typescript-eslint',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/sort': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  env: {
    jest: true,
  },
};
