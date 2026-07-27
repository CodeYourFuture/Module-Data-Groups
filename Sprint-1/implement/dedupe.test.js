const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) returns ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) returns [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) returns [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
//test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.

describe("dedupe function", () => {
  test("should remove duplicate elements from an array", () => {
    expect(dedupe([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    expect(dedupe(["apple", "banana", "apple", "orange"])).toEqual([
      "apple",
      "banana",
      "orange",
    ]);
  });

  test("should return the same array if there are no duplicates", () => {
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("should return an empty array if given an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  test("should return an empty array if given invalid input (non-arrays)", () => {
    expect(dedupe(null)).toEqual([]);
    expect(dedupe(undefined)).toEqual([]);
    expect(dedupe("not an array")).toEqual([]);
  });
});
