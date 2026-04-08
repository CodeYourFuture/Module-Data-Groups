const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally on an array with duplicates returns correct counts for each unique item", () => {
  expect(
    tally([
      "CYF",
      "CYF",
      "AWS",
      "Capgemini",
      "Deloitte",
      "Google",
      "Slack",
      "Capgemini",
    ])
  ).toEqual({ CYF: 2, AWS: 1, Capgemini: 2, Deloitte: 1, Google: 1, Slack: 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("given invalid input throws an error", () => {
  expect(() => tally("invalid")).toThrow("invalid input");
});

// Given an invalid input like a number
test("given invalid input throws an error", () => {
  expect(() => tally("invalid")).toThrow("invalid input");
});

// Given an invalid input like a number
test("given invalid input throws an error", () => {
  expect(() => tally(123)).toThrow("invalid input");
});

// Given an invalid input like an object
test("given invalid input throws an error", () => {
  expect(() => tally({})).toThrow("invalid input");
});

// Given an invalid input like null
test("given invalid input throws an error", () => {
  expect(() => tally(null)).toThrow("invalid input");
});

// Given an invalid input like undefined
test("given invalid input throws an error", () => {
  expect(() => tally(undefined)).toThrow("invalid input");
});
