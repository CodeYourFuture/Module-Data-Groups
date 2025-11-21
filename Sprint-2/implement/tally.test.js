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
describe("tally", () => {
  // Given a function called tally
  // When passed an array of items
  // Then it should return an object containing the count for each unique item
  test("returns correct counts for mixed data types", () => {
    const input = [1, "a", 2, true, 1, "a", 2, true];
    const expectedOutput = { 1: 2, a: 2, 2: 2, true: 2 };
    expect(tally(input)).toEqual(expectedOutput);
  });
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });
  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  test("returns correct counts for an array with duplicates", () => {
    const input = ["banana", "apple", "banana", "cherry", "apple", "banana"];
    const expectedOutput = {
      banana: 3,
      apple: 2,
      cherry: 1,
    };
    expect(tally(input)).toEqual(expectedOutput);
  });
  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error

  test.each(["not an array", 123, null, undefined, { key: "value" }])(
    "throws an error for invalid input type: %p",
    (invalidInput) => {
      expect(() => tally(invalidInput)).toThrow("Input must be an array.");
    }
  );
});
