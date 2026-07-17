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

// Empty array
test("should return an empty array when given an empty array", () => {
  const array = [];
  const result = dedupe(array);

  expect(result).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// No duplicates
test("should return a copy when the array has no duplicates", () => {
  const array = [1, 2, 3];
  const result = dedupe(array);

  expect(result).toEqual([1, 2, 3]);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.

// Remove duplicate strings
test("should remove duplicate strings and keep first occurrence", () => {
  const array = ["a", "a", "a", "b", "b", "c"];
  const result = dedupe(array);

  expect(result).toEqual(["a", "b", "c"]);
});

// Remove duplicate numbers
test("should remove duplicate numbers and keep first occurrence", () => {
  const array = [5, 1, 1, 2, 3, 2, 5, 8];
  const result = dedupe(array);

  expect(result).toEqual([5, 1, 2, 3, 8]);
});
