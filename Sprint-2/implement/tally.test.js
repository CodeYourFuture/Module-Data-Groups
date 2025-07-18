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
  const testArray = [];

  expect(tally(testArray)).toStrictEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally on an array with duplicate items returns counts for each item", () => {
  const testArray1 = ["a", "a", "b", "c"];

  expect(tally(testArray1)).toStrictEqual({ a: 2, b: 1, c: 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally on an invalid input throws an error", () => {
  const testArray2 = "mango";
  const invalidInput = () => tally(testArray2);

  expect(invalidInput).toThrow("Input must be an array");
});
