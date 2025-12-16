const tally = require("./tally.js");

// Test 1: Empty array
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Test 2: Single item
test("tally on single item returns count of 1", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});

// Test 3: Duplicate items
test("tally counts duplicate items", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});

// Test 4: Mixed items
test("tally counts multiple unique items", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

// Test 5: Invalid input throws error
test("tally throws error for non-array input", () => {
  expect(() => tally("hello")).toThrow();
});

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


// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
