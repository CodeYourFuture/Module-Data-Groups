const tally = require("./tally.js");
describe("tally function", () => {
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

  test("returns an object with counts for each unique item", () => {
    const input = ["a", "a", "b", "c"];
    const expected = { a: 2, b: 1, c: 1 };
    expect(tally(input)).toEqual(expected);
  });

  // Given an empty array
  // When passed to tally
  // Then it should return an empty object

  test("returns an empty object when passed an empty array", () => {
    expect(tally([])).toEqual({});
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item

  test("returns correct count for duplicate items", () => {
    const input = ["x", "x", "x", "y"];
    const expected = { x: 3, y: 1 };
    expect(tally(input)).toEqual(expected);
  });

  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error

  test("throws an error when passed a non-array input", () => {
    expect(() => tally("not an array")).toThrow("Input must be an array");
  });
});
