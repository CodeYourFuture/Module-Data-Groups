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
test('should return an object', () => {
    expect(typeof tally([])).toBe('object');
})
// Given an empty array
// When passed to tally
// Then it should return an empty object
test("should return an empty object when given an empty array", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("should return correct counts for each unique item", () => {
  expect(tally(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual({ a: 3, b: 2, c: 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("should throw an error when given invalid input", () => {
  expect(() => tally("invalid input")).toThrow("Input must be an array");
});

//no args passed
test("should throw an error when no arguments are passed", () => {
  expect(() => tally()).toThrow("Input must be an array");
});

//edge cases
test("should handle array with null and undefined values", () => {
  expect(tally([null, undefined, null, 'a', undefined])).toEqual({ null: 2, undefined: 2, a: 1 });
});

test("should handle array with special characters", () => {
  expect(tally(['@', '#', '@', '$', '%', '#', '@'])).toEqual({ '@': 3, '#': 2, '$': 1, '%': 1 });
});

