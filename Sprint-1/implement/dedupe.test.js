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

test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns the original array", () => {
  expect(dedupe([5, 2, 1])).toEqual([5, 2, 1]);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.

test("given an array of strings and numbers, it returns a new array with duplicates removed while preserving the first occurance of each element from the original array", () => {
  expect(dedupe(["hi", "hi", 4, 5, 6, 6])).toEqual(["hi", 4, 5, 6]);
});

test("given an array of strings with duplicates, it removes duplicates while preserving first occurrence", () => {
  expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
});

test("given an array of numbers with duplicates, it preserves the order of first occurrences", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});

test("given an array with a single element, it returns that element", () => {
  expect(dedupe([42])).toEqual([42]);
  expect(dedupe(["hello"])).toEqual(["hello"]);
});

test("given an array where every element is the same, it returns a single-element array", () => {
  expect(dedupe([7, 7, 7, 7])).toEqual([7]);
  expect(dedupe(["x", "x", "x"])).toEqual(["x"]);
});

test("preserves the order of first occurrences with mixed types", () => {
  expect(dedupe([1, "a", 1, "b", "a", 2])).toEqual([1, "a", "b", 2]);
});

test("returns a new array, not the original", () => {
  const input = [1, 2, 2, 3];
  const result = dedupe(input);
  expect(result).toEqual([1, 2, 3]);
  expect(result).not.toBe(input);
});
