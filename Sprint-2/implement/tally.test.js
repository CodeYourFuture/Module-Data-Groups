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
test("Should return { a: 1 }", () => {
  let arr = ["a"];
  expect(tally(arr)).toEqual({ a: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("Should return an empty object", () => {
  let arr = [];
  expect(tally(arr)).toStrictEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("Should return an object containing the count for each unique item", () => {
  arr = ["a", "a", "a"];
  expect(tally(arr)).toEqual({ a: 3 });
  arr = ["a", "a", "b", "c"];
  expect(tally(arr)).toEqual({ a: 2, b: 1, c: 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("Should throw an error when input is not an array", () => {
  const invalidInput = "a string";
  expect(() => tally(invalidInput)).toThrow("Input must be an array");
});
