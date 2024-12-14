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
test("an empty array should return empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("input wirh no dedupe should return the original array", () => {
  expect(dedupe([4, 0, 6, 9, 1])).toEqual([4, 0, 6, 9, 1]);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("should deduplicate the values and preserve the first occurence of each element", () => {
  expect(dedupe([1, 3, 4, 1, 5, 6, 3, 3, 2])).toEqual([1, 3, 4, 5, 6, 2]);
  expect(dedupe(["hi", "bye", "bye", "no", "bye", "bye", "hi"])).toEqual([
    "hi",
    "bye",
    "no",
  ]);
});
