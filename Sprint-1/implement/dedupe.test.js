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
test("Given an empty array, when passed to the dedupe function, then it should return an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("Given an array with no duplication, when passed to the dedupe function, Then it should return a copy of the original array", () => {
  const original = [10, 20, 30];
  const result = dedupe(original);
  expect(result).toEqual([10, 20, 30]);
  expect(result).not.toBe(original);
});
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("Given an array with strings or numbers, when passed to the dedupe function, then it should remove the duplicate values, preserving the firt occurence of each element", () => {
  expect(dedupe(["a", "a", "b"])).toEqual(["a","b"]);
});