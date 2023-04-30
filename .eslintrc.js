module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  overrides: [
    {
      files: ['js/**/*.js'],
      rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        indent: ['error', 2],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
      },
    },
  ],
};
