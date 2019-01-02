// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "camelcase": 2,
    "no-var": 2,
    "one-var": 1,
    "block-scoped-var": 0,
    "no-alert": 0,
    "no-console": 0,
    "no-const-assign": 2,
    "no-dupe-keys": 2,
    "no-dupe-args": 2,
    "no-eval": 1,
    "no-irregular-whitespace": 2,
    "no-script-url": 0,
    "eqeqeq": 2,
    "indent": [2, 2],
    "prefer-const": 0,
    "prefer-spread": 0,
    "space-after-keywords": [0, "always"]
  }
}
