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
test("given an array with no duplicates, it returns a copy of the original array", () => {
  const input = [1, 2, 3, 7, 9];
  const output = dedupe(input);
  expect(output).toEqual([1, 2, 3, 7, 9]);
  expect(output).not.toBe(input); // ensures it's a new array
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("given array with strings or numbers, it should remove the duplicate values, preserving the first occurrence of each element", () => {
  expect(dedupe([1, 2, 2, 3, 4, 5, 5, 5, 7, 9, 9, "a", "a", "b", "c", "d", "d", "e"]))
    .toEqual([1, 2, 3, 4, 5, 7, 9, "a", "b", "c", "d", "e"]);
});
