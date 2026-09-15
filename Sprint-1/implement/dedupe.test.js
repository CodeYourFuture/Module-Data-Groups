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

const dedupe = require("./dedupe");

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("should return an empty array when given an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("should return a copy of the original array when there are no duplicates", () => {
  expect(dedupe([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

// Given an array of strings with duplicates
// When passed to the dedupe function
// Then it should remove duplicate strings while preserving the first occurrence
test("should remove duplicate strings while preserving the first occurrence", () => {
  expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
});

// Given an array of numbers with duplicates
// When passed to the dedupe function
// Then it should remove duplicate numbers while preserving the first occurrence
test("should remove duplicate numbers while preserving the first occurrence", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});

// Given an array with one element
// When passed to the dedupe function
// Then it should return the same array
test("should return the same array when it contains only one element", () => {
  expect(dedupe([42])).toEqual([42]);
});
