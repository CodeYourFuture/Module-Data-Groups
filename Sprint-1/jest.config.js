module.exports = {
  // Treat Sprint-1 as the root for Jest when running from this package
  rootDir: '.',
  // Only match tests inside the `fix` folder (you can expand this if needed)
  testMatch: ['<rootDir>/fix/**/*.test.js'],
  // Ignore node_modules inside Sprint-1
  testPathIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: ['/node_modules/'],
};
