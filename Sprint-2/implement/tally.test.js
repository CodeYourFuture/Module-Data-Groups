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
test("throws an error when the input is not an array", () => {
  expect(() => tally("hi")).toThrow();
});
test("returns an empty object when the input array is empty", () => {
  expect(tally([])).toEqual({});
});
test("returns the count of each unique item in the array", () => {
  expect(tally(["a", "b", "a", "c", "b", "a"])).toEqual({ a: 3, b: 2, c: 1 });
});
test("handles special keys like toString", () => {
  expect(tally(["toString", "toString"])).toEqual({ "toString": 2 });
});

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object


// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
