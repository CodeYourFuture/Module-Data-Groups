const tally = require("./tally.js");

/**
 * Tests for the tally function.
 * This function counts the frequency of items in an array and returns an object.
 */

// Test: array with one item
test("Returns correct count for one item in array", () => {
  expect(tally(["x"])).toEqual({ x: 1 });
});

// Test: array with repeated items
test("Counts how many times each item appears", () => {
  expect(tally(["a", "a", "b", "a", "b", "c"])).toEqual({ a: 3, b: 2, c: 1 });
});

// Test: array with no items
test("Returns empty object for empty array", () => {
  expect(tally([])).toEqual({});
});

// Test: handles reserved key like 'toString'
test("Handles 'toString' as a key correctly", () => {
  expect(tally(["toString", "toString", "toString"])).toEqual({ toString: 3 });
});

