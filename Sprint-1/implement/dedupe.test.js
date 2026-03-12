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

describe("dedupe", () => {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  test("returns a copy when no duplicates exist", () => {
    const input = [1, 2, 3];
    const output = dedupe(input);

    expect(output).toEqual([1, 2, 3]);
    expect(output).not.toBe(input); // ensures it's a new array, not the same reference
  });

  // Given an array with strings or numbers
  // When passed to the dedupe function
  // Then it should remove the duplicate values, preserving the first occurrence
  test("removes duplicates and preserves first occurrence", () => {
    expect(dedupe(['a','a','a','b','b','c'])).toEqual(['a','b','c']);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });
});