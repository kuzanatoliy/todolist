module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'solid', 'prettier'],
  rules: {
    'solid/components-return-once': 2,
    'solid/event-handlers': 2,
    'solid/imports': 2,
    'solid/jsx-no-duplicate-props': 2,
    'solid/jsx-no-script-url': 2,
    'solid/jsx-no-undef': [2, { typescriptEnabled: true }],
    'solid/jsx-uses-vars': 2,
    'solid/no-array-handlers': 1,
    'solid/no-destructure': 2,
    'solid/no-innerhtml': [2, { allowStatic: false }],
    'solid/no-proxy-apis': 1,
    'solid/no-react-deps': 2,
    'solid/no-react-specific-props': 2,
    'solid/no-unknown-namespaces': 2,
    'solid/prefer-for': 2,
    'solid/prefer-show': 1,
  },
};
