module.exports = {
  // Treat Sprint-1 as the root for Jest when running from this package
  rootDir: '.',
  // Match tests inside the `fix` and `implement` folders
  // so running `npm test -- fix` will also pick up implement tests like dedupe.test.js
  testMatch: ['<rootDir>/fix/**/*.test.js', '<rootDir>/implement/**/*.test.js'],
  // Ignore node_modules inside Sprint-1
  testPathIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: ['/node_modules/'],
};
