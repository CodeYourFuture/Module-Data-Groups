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
// test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

describe("dedupe", () => {
  [{ input: [], expected: [] }].forEach(({ input, expected }) =>
    test(`returns an empty array for input [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );

  [{ input: [1, 2, 3], expected: [1, 2, 3] }].forEach(({ input, expected }) =>
    test(`returns a copy of the array when no duplicates exist for input [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );

  [{ input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] }].forEach(
    ({ input, expected }) =>
      test(`removes duplicate elements and keep the first occurrence for [${input}]`, () =>
        expect(dedupe(input)).toEqual(expected))
  );

  [{ input: ["1", 1, "1", 1], expected: ["1", 1] }].forEach(
    ({ input, expected }) =>
      test(`removes duplicates from an array of numbers and strings, keeping the first occurrence of each element, for the input [${input}]`, () =>
        expect(dedupe(input)).toEqual(expected))
  );
});
