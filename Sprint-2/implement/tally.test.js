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

// Counts a single item
test("tally counts a single item in an array", () => {
  const input = ["a"];

  const expectedOutput = { a: 1 };

  expect(tally(input)).toEqual(expectedOutput);
});

// Counts repeated items correctly
test("tally counts multiple occurrences of the same item", () => {
  const input = ["a", "a", "a"];

  const expectedOutput = { a: 3 };

  expect(tally(input)).toEqual(expectedOutput);
});

// Counts different items with varying frequencies
test("tally counts different items with varying frequencies", () => {
  const input = ["a", "a", "b", "c"];

  const expectedOutput = { a: 2, b: 1, c: 1 };

  expect(tally(input)).toEqual(expectedOutput);
});

// Given an empty array
// When passed to tally
// Then it should return an empty object

// Returns an empty object for an empty array
test("tally on an empty array returns an empty object", () => {
  const input = [];

  const expectedOutput = {};

  expect(tally(input)).toEqual(expectedOutput);
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Handles real-world data with duplicates
test("tally handles an array with many duplicate items", () => {
  const input = ["apple", "banana", "apple", "orange", "banana", "apple"];

  const expectedOutput = { apple: 3, banana: 2, orange: 1 };

  expect(tally(input)).toEqual(expectedOutput);
});

// Given invalid input like a string
// When passed to tally
// Then it should throw an error

// Throws an error for a string input
test("tally throws an error when given a string instead of an array", () => {
  expect(() => tally("not an array")).toThrow("Input must be an array");
});

// Throws an error for null
test("tally throws an error when given null", () => {
  expect(() => tally(null)).toThrow("Input must be an array");
});

// Throws an error for undefined
test("tally throws an error when given undefined", () => {
  expect(() => tally(undefined)).toThrow("Input must be an array");
});
