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
test("given an array with no duplicates, it returns a copy of the original array", () => {
  expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
  expect(dedupe(["a", "b", "c"])).toEqual(["a", "b", "c"]);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("given an array with strings or numbers, it removes duplicates preserving first occurrence", () => {
  expect(dedupe(["a", "a", "b", "c", "c"])).toEqual(["a", "b", "c"]);
  expect(dedupe([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  expect(dedupe([4, 6, "hi", 4, 6, "hi"])).toEqual([4, 6, "hi"]);
});
