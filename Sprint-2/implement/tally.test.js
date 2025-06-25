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
test("Given an array of items, when passed to the tally function,Then it should return an object containing the count for each unique item", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("Given an empty array, when passed to the tally function, then it should return an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("Given an array with dublicate items, when passed to the tally function, then it should return counts for each item", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("Given invalid input like an string, when passed to the tally, then it should throw an error", () => {
  expect(() => tally("aaaa")).toThrow(
    "Argument must be an array"
  );
});

