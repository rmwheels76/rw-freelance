module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'vuetify',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 0,
    'vue/html-indent': ["error", "tab"],  // enforce tabs in template
    'vue/script-indent': ["error", "tab"],  // enforce tabs in script
    'indent': ["error", "tab"]            // enforce tabs in script and js files
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
