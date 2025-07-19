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
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  test("tally counts duplicate items correctly for strings", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  });

  test("tally counts duplicate items correctly for numbers", () => {
    expect(tally([1])).toEqual({ 1: 1 });
    expect(tally([1, 1, 1])).toEqual({ 1: 3 });
    expect(tally([1, 1, 2, 3])).toEqual({ 1: 2, 2: 1, 3: 1 });
  });

  test("tally handles mixed numbers and strings", () => {
    expect(tally([1, "1", 2, "hello"])).toEqual({
      1: 2, // 1 and '1' are coerced to the same key
      2: 1,
      hello: 1,
    });
  });

  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  test("tally throws error for non-array input", () => {
    expect(() => tally("not an array")).toThrow("Input must be an array");
    expect(() => tally(null)).toThrow("Input must be an array");
    expect(() => tally(undefined)).toThrow("Input must be an array");
    expect(() => tally(123)).toThrow("Input must be an array");
  });

  // Given an array with invalid items (null, undefined, empty string, boolean)
  // When passed to tally
  // Then it should throw an error
  test("tally throws error for null items", () => {
    expect(() => tally([null])).toThrow(
      "Array elements must be numbers or non-empty strings"
    );
    expect(() => tally(["a", null, "b"])).toThrow(
      "Array elements must be numbers or non-empty strings"
    );
  });

  test("tally throws error for undefined items", () => {
    expect(() => tally([undefined])).toThrow(
      "Array elements must be numbers or non-empty strings"
    );
    expect(() => tally([1, undefined, 2])).toThrow(
      "Array elements must be numbers or non-empty strings"
    );
  });

  test("tally throws error for empty string items", () => {
    expect(() => tally([""])).toThrow(
      "Array elements must be numbers or non-empty strings"
    );
    expect(() => tally(["a", "", "b"])).toThrow(
      "Array elements must be numbers or non-empty strings"
    );
  });

  test("tally throws error for boolean items", () => {
    expect(() => tally([true])).toThrow(
      "Array elements must be numbers or non-empty strings"
    );
    expect(() => tally([false, 1, "a"])).toThrow(
      "Array elements must be numbers or non-empty strings"
    );
  });

  // Additional edge cases
  test("tally handles non-empty strings and numbers correctly", () => {
    expect(tally(["hello", "hello", 42, "42"])).toEqual({
      hello: 2,
      42: 2, // 42 and '42' are coerced to the same key
    });
  });
});
