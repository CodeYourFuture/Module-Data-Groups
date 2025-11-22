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
  const currentOutput = dedupe([]);
  const targetOutput = [];
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it should return a copy of the original array", () => {
  const currentOutput = dedupe([5, 1, 2, 3, 8]);
  const targetOutput = [5, 1, 2, 3, 8];
  expect(currentOutput).toEqual(targetOutput);
});
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("given an array with strings or number, it should remove the duplicate values, preserving the first occurence of each element", () => {
  const currentOutput = dedupe([5, "1", "1", 5, 8]);
  const targetOutput = [5, "1", 8];

  console.log(currentOutput);
  console.log(targetOutput);

  expect(currentOutput).toEqual(targetOutput);
});