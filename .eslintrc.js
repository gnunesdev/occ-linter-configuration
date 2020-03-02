module.exports = {
  env: {
    browser: true,
    amd: true,
    es6: false,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-amd': 0,
    'no-param-reassign': 0,
    'no-console': 'warn',
    'func-names': 'off',
    'space-before-function-paren': 0,
    "object-shorthand": [0, "always"],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'vars-on-top': 0,
    'no-var': 0,
    'block-scoped-var': 0
  },
};
