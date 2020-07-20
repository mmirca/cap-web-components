module.exports = {
  transformIgnorePatterns: [
    '../../node_modules\/(?!(@webcomponents\/shadycss|lit-html|@polymer|)\/).*/'
  ],
  testEnvironment: 'jest-environment-jsdom-sixteen',
  coveragePathIgnorePatterns: [
    'styles.js$',
    'shared/variables.js',
    'shared/styles.js',
    'index.js'
  ]
};