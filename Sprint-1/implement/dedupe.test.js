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
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("Given an array with no duplicates,return a copy of the original array", () => {
  const input = [1, "y", 4, 7];
  const result = dedupe(input);
  expect(result).toEqual(input); 
  expect(result).not.toBe(input); 
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("Given an array with strings or numbers,return an array without duplicates", () => {
  expect(dedupe([1, 1, "l", 5, 7, "l"])).toEqual([1, "l", 5, 7]);
});
