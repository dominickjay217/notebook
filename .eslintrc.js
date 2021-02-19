module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    //'@nuxtjs/eslint-config-typescript',
    //'prettier/vue',
    //'plugin:prettier/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
