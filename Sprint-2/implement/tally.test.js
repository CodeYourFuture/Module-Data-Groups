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

// Given an empty array
// When passed to tally
// Then it should return an empty object
describe("tally", () => {
  test("returns an empty object for an empty array", () => {
    expect(tally([])).toEqual({});
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  test("returns counts for each unique item", () => {
    expect(tally(["apple"])).toEqual({ apple: 1 });
    expect(tally(["apple", "banana", "orange"])).toEqual({
      apple: 1,
      banana: 1,
      orange: 1,
    });
  });

  test("returns counts for each unique item with duplicates", () => {
    expect(
      tally(["apple", "banana", "orange", "apple", "banana", "orange"])
    ).toEqual({ apple: 2, banana: 2, orange: 2 });
  });

  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  test("throws an error for invalid input", () => {
    expect(() => tally("invalid input")).toThrow("Invalid input");
    expect(() => tally(123)).toThrow("Invalid input");
    expect(() => tally({})).toThrow("Invalid input");
  });
});
