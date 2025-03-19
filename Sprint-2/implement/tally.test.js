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
describe("tally function", () => {
  test("should return an object each count for each unique item", () => {
    expect(tally(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
  });

  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  test("should return an empty object when passed an empty array", () => {
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  test("should return correct counts for each unique item in the array", () => {
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
    expect(tally(["a", "b", "b", "c"])).toEqual({ a: 1, b: 2, c: 1 });
  });

  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  test("should throw an error when the input like string", () => {
    expect(() => tally("string")).toThrow("Input must be an array");
  });
});
