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

describe("tally()", () => {
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object

  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item

  test("returns counts for each unique item when passed an array with duplicates", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  });

  // Given an invalid input like a string, a number, or no argument at all
  // When passed to tally
  // Then it should throw Error("tally requires an array")
  test("throws an error when passed a string", () => {
    expect(() => tally("hello")).toThrow("tally requires an array");
  });

  test("throws an error when passed a number", () => {
    expect(() => tally(42)).toThrow("tally requires an array");
  });

  test("throws an error when passed null", () => {
    expect(() => tally(null)).toThrow("tally requires an array");
  });

  test("throws an error when passed no arguments", () => {
    expect(() => tally()).toThrow("tally requires an array");
  });
});
