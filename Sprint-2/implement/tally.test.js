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
test("The function should return empty object when an empty array is passed to the function", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("The function should return an object where each key is a unique item from the array, and each index is how many times that item duplicate", () => {
  expect(tally(["a", "a", "a", "b", "b", "b", "c", "c", "c"])).toEqual({
    a: 3,
    b: 3,
    c: 3,
  });
  expect(
    tally(["manchester", "manchester", "london", "london", "leeds"])
  ).toEqual({ manchester: 2, london: 2, leeds: 1 });
  expect(tally([1, 1, 2])).toEqual({ 1: 2, 2: 1 });
  expect(tally(["a"])).toEqual({ a: 1 });
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("The function should throw an error when invalid input is passed", () => {
  expect(tally("hello")).toThrow;
  expect(tally(134)).toThrow;
  expect(tally({ a: 1, b: 3, d: 2 })).toThrow;
});
