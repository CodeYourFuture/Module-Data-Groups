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

test("given an array with no duplicates, it returns a copy of the original array", () => {
  const input = [1, 2, 3];
  expect(dedupe(input)).toEqual([1, 2, 3]); // checks same content
  expect(dedupe(input)).not.toBe(input);    // checks it's a different array
});

test("given an array of numbers with duplicates, it returns array with duplicates removed", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});

test("given an array of strings with duplicates, it returns array with duplicates removed", () => {
  expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the 
// first occurrence of each element from the original array.
