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
// test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error



describe("tally function", () => {
  test("should return an empty object for an empty array", () => {
    expect(tally([])).toEqual({});
  });

  test("should return correct counts for a single-item array", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
  });

  test("should return correct counts for an array with duplicate items", () => {
    expect(tally(["a", "a", "b", "c", "c", "c"])).toEqual({ a: 2, b: 1, c: 3 });
  });

  test("should throw an error for invalid input (non-array)", () => {
    expect(() => tally("invalid")).toThrow("Input must be an array");
  });

  test("should work with mixed data types in the array", () => {
    expect(tally(["a", 1, "a", 1, 2])).toEqual({ a: 2, 1: 2, 2: 1 });
  });
});
