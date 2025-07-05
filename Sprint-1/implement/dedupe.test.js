const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

describe("dedup Tests", () => {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array
  test("Given an empty array, it returns an empty array", () => {
    const input = dedupe([]);
    const expected = [];
    expect(input).toEqual(expected);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  test("Given an array with no duplicates, it returns a copy of the original array", () => {
    const input = dedupe([7, 2, 8, 9]);
    const expected = [7, 2, 8, 9];
    expect(input === expected).toEqual(false);
  });

  // Given an array with strings or numbers
  // When passed to the dedupe function
  // Then it should remove the duplicate values, preserving the first occurrence of each element
  test.each([
    [
      ["a", "a", "a", "b", "b", "c"],
      ["a", "b", "c"],
    ],
    [
      [5, 1, 1, 2, 3, 2, 5, 8],
      [5, 1, 2, 3, 8],
    ],
  ])(
    "Given an array with with strings or numbers, it should remove the duplicate values (%p)",
    (input, expected) => {
      expect(dedupe(input)).toEqual(expected);
    }
  );
});
