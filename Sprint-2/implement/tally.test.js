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
test("tally should return an object with counts for each unique item", () => {
  const input = ["a", "b", "a", "c"];
  const expectedOutput = { a: 2, b: 1, c: 1 };
  expect(tally(input)).toEqual(expectedOutput);
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally should return an empty object for an empty array", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally should return counts for duplicate items", () => {
  const input = ["a", "a", "b", "c"];
  const expectedOutput = { a: 2, b: 1, c: 1 };
  expect(tally(input)).toEqual(expectedOutput);
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("tally should throw an error for invalid input", () => {
  expect(() => tally("not an array")).toThrow("Input must be an array");
});
