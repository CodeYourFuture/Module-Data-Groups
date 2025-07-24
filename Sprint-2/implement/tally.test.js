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

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with one item
// When passed to tally
// Then it should return an object with count 1 for that item
test("tally on an array with one item returns correct count", () => {
  expect(tally(['a'])).toEqual({ a: 1 });
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally on an array with duplicate items returns correct counts", () => {
  expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
  expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally throws an error on invalid input like a string", () => {
  expect(() => tally("invalid input")).toThrow();
});

// Given an invalid input like a number
// When passed to tally
// Then it should throw an error
test("tally throws an error on invalid input like a number", () => {
  expect(() => tally(123)).toThrow();
});

// Given an invalid input like null
// When passed to tally
// Then it should throw an error
test("tally throws an error on invalid input like null", () => {
  expect(() => tally(null)).toThrow();
});