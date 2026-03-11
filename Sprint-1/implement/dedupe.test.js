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
test("for empty array it should return an empty array", () => {
  const arr = [];
  expect(dedupe(arr)).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("for array with no duplicates should return the original array", () => {
  const arr = [1, 2, 3, 4];
  expect(dedupe(arr)).toEqual(arr);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("removes duplicates and keeps first occurrence", () => {
  const arr = [1, 2, 1, 3, 4];
  expect(dedupe(arr)).toEqual([1, 2, 3, 4]);
});
