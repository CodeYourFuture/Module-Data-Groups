/** @type {import('jest').Config} */
const config = {
  projects: [
    "alarmclock",
    "quote-generator",
    "reading-list",
    "slideshow",
    "todo-list",
  ].map((displayName) => ({
    displayName,
    setupFilesAfterEnv: [
      "<rootDir>/jest.setup.js",
    ],
    testEnvironment: "jsdom",
    testMatch: [
      `<rootDir>/${displayName}/*.test.js`,
    ],
  })),
  verbose: true,
};

module.exports = config;
