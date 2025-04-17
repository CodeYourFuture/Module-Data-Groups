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
describe("tally that takes a list of items and counts the frequency of each item", () => {
  // Given a function called tally
  // When passed an array of items
  // Then it should return an object containing the count for each unique item
  test("when passed an array, it returns an object containing the count", () => {
    expect(tally(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
  });

  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  test("when passed an empty array, it returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  test("when passed an array with duplicate items, it returns counts for each unique item", () => {
    expect(tally(["a", "a", "b", "c", "a"])).toEqual({ a: 3, b: 1, c: 1 });
  });

  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  test("when passed an invalid input (like a string), it throws an error", () => {
    expect(() => tally("invalid input")).toThrow("It is not a valid array");
  });
});
