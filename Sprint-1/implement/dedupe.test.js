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
  expect(dedupe(["a", "b", "c"])).toEqual(["a", "b", "c"]);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

describe("Describes dedupe() with duplicate values", () => {
  [
    { input: [1, 2, 2, 3], expected: [1, 2, 3] },
    { input: [1, 1, 3, 4, 4, 4, 5], expected: [1, 3, 4, 5] },
    { input: ["a", "b", "a", "c"], expected: ["a", "b", "c"] },
    { input: [1, "1", 1], expected: [1, "1"] },
    { input: [5, 1, 5, 5, 2], expected: [5, 1, 2] },
  ].forEach(({ input, expected }) => {
    it(`should return [${expected}] for input [${input}]`, () => {
      expect(dedupe(input)).toEqual(expected);
    });
  });
});
