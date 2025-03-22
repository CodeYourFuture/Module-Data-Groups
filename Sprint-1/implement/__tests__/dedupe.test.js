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
// test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
const dedupe = require("../dedupe");

describe("dedupe function", () => {
  // Test case 1: Empty array
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Test case 2: Array with no duplicates
  test("given an array with no duplicates, it returns a copy of the original array", () => {
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
    expect(dedupe(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  // Test case 3: Array with duplicates (numbers)
  test("removes duplicates while preserving the first occurrence (numbers)", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  });

  // Test case 4: Array with duplicates (strings)
  test("removes duplicates while preserving the first occurrence (strings)", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  // Test case 5: Mixed types
  test("handles arrays with mixed types correctly", () => {
    expect(dedupe([1, "1", 1, "2", 2])).toEqual([1, "1", "2", 2]);
  });

  // Test case 6: Single element array
  test("given an array with a single element, it returns the same array", () => {
    expect(dedupe([42])).toEqual([42]);
  });

  // Test case 7: Array with only duplicates
  test("removes all duplicates when all elements are the same", () => {
    expect(dedupe([7, 7, 7, 7])).toEqual([7]);
  });

  // Test case 8: Large array of duplicates and unique elements
  test("correctly deduplicates a large array", () => {
    expect(dedupe([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6])).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
