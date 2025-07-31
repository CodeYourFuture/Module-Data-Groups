const { workspaces } = require("./package.json");

/** @type {import('jest').Config} */
const config = {
  projects: workspaces.map((displayName) => ({
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
