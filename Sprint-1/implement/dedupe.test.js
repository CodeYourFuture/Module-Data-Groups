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
describe("dedupe arrays  ", () => {
  [
    { input: [], expected: [] },
    { input: "it is not array", expected: null },
    { input: null, expected: null },
  ].forEach(({ input, expected }) =>
    it(`returns empty or null ]`, () => expect(dedupe(input)).toEqual(expected))
  );
// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
  [
    { input: ["a", "b", "c"], expected: ["a", "b", "c"] },
    { input: [5, 1, 2, 3, 8], expected: [5, 1, 2, 3, 8] },
  ].forEach(({ input, expected }) =>
    it(`returns Dedupe Array with no duplicate]`, () => expect(dedupe(input)).toEqual(expected))
  );
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
  [
    { input: ["a", "a", "a", "b", "b", "c"], expected: ["a", "b", "c"] },
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    { input: [1, 2, 1], expected: [1, 2] },
  ].forEach(({ input, expected }) =>
    it(`returns Dedupe Array with strings or numbers ]`, () => expect(dedupe(input)).toEqual(expected))
  );
});
