const dedupe = require("./dedupe.js");

/*
Dedupe Array
*/

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns the same array", () => {
  expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove duplicate values
test("removes duplicate numbers", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});

test("removes duplicate strings", () => {
  expect(dedupe(['a','a','a','b','b','c'])).toEqual(['a','b','c']);
});

test("preserves first occurrence order", () => {
  expect(dedupe([1, 2, 1])).toEqual([1, 2]);
});