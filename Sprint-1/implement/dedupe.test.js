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

test("Given an empty array then it should return an empty array", () => {
  expect(dedupe([])).toBe([]);
});


test("Given an array with no duplicates then it should return a copy of the original array", () => {
  expect(dedupe([1,2,3])).toBe([1,2,3]);
});

test("Given an array with strings or numbers then it should remove the duplicate values, preserving the first occurence of each element", () => {
  expect(dedupe([1, 2, 3, 1, 2, 3])).toBe([1, 2, 3]);
});
