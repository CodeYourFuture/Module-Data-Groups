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
test("given an array with duplicates items returns object with counts of unique items", () => {
  expect(tally(["a", "a", "b", "b"])).toEqual({ a: 2, b: 2 });
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("given a string, throws an error", () => {
  expect(() => tally("a a b b")).toThrow("Invalid input");
});
