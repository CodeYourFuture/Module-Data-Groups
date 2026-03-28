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
test("tally on an array with duplicate items returns correct counts", () => {
  expect(tally(['a'])).toEqual({ a: 1 });
  expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
  expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
  expect(tally(['x', 'y', 'x', 'z', 'y', 'x'])).toEqual({ x: 3, y: 2, z: 1 });
  expect(tally([1, 2, 1, 3, 2, 1])).toEqual({ 1: 3, 2: 2, 3: 1 });
  expect(tally(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])).toEqual({ 
    apple: 3, 
    banana: 2, 
    orange: 1 
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally on invalid input throws an error", () => {
  expect(() => tally("not an array")).toThrow("Input must be an array");
  expect(() => tally(null)).toThrow("Input must be an array");
  expect(() => tally(undefined)).toThrow("Input must be an array");
  expect(() => tally(123)).toThrow("Input must be an array");
  expect(() => tally({})).toThrow("Input must be an array");
});

test("tally handles mixed data types in array", () => {
  expect(tally(['a', 1, 'a', 2, 1])).toEqual({ a: 2, 1: 2, 2: 1 });
});

test("tally handles boolean values", () => {
  expect(tally([true, false, true, true])).toEqual({ true: 3, false: 1 });
});
