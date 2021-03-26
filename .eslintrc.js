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
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/singleline-html-element-content-newline": [1, {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["vue-markdown"]
    }]
  }
}
