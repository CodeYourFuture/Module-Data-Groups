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
  const input = [];
  const expectedOutput = [];
  expect(dedupe(input)).toEqual(expectedOutput);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns a copy of the original array", () => {
  const input = [1, 2, 3];
  const expectedOutput = [1, 2, 3];
  const result = dedupe(input);

  expect(result).toEqual(expectedOutput);
  expect(result).not.toBe(input);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("given an array with strings or numbers, it removes the duplicate values, preserving the first occurence of each element", () => {
  const input = [5, 1, 1, 2, 3, 2, 5, 8, "egg", "egg", "bacon"];
  const expectedOutput = [5, 1, 2, 3, 8, "egg", "bacon"];
  expect(dedupe(input)).toEqual(expectedOutput);
});
// Then it should return a new array with duplicates removed while preserving the 
// first occurrence of each element from the original array.
