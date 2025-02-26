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

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

describe("deduplicating elements of an array", () => {
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  test("given an array with no duplicates, it should return the original array", () => {
    expect(dedupe([2, 3, 4])).toEqual([2, 3, 4]);
  });

  // Given an array with strings or numbers
  // When passed to the dedupe function
  // Then it should remove the duplicate values, preserving the first occurence of each element
  test("given an array with duplicates of numbers or strings it should remove the duplicates", () => {
    expect(dedupe([2, 2, 4, 4, 5, 5])).toEqual([2, 4, 5]);
    expect(dedupe(["a", "a", "b", "b"])).toEqual(["a", "b"]);
  });
});
