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
// test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

describe("dedupe", () => {
  test("removes duplicates from an array", () => {
    expect(dedupe([2, 3, 2, 3, 5])).toEqual([2, 3, 5]);
  });

  test("returns the same array when all elements are unique", () => {
    expect(dedupe([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles an array of strings and removes duplicates", () => {
    expect(dedupe(["A", "A", "b", "b", "c"])).toEqual(["A", "b", "c"]);
  });

  test("returns an empty array when the input is an empty array", () => {
    expect(dedupe([])).toEqual(
      "given an empty array, it returns an empty array"
    );
  });

  test("returns undefined when the input is undefined", () => {
    expect(dedupe(undefined)).toEqual(
      "given an empty array, it returns an empty array"
    );
  });

  test("works with mixed data types, treating them as unique values", () => {
    expect(dedupe([1, "1", 2, "2", 3, 3, "3"])).toEqual([
      1,
      "1",
      2,
      "2",
      3,
      "3",
    ]);
  });
});
