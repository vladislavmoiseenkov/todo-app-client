module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "arrow-body-style": ["error", "always"],
    "no-multi-spaces": [2, { exceptions: { "ImportDeclaration": true } }],
    'no-shadow': ["error", { "allow": ["state"] }],
    "rules": { "no-param-reassign": [2, { "props": false }] },
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
