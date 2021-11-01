module.exports = {
  extends: ['../.eslintrc.js'],
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
