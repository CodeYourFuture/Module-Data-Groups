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
describe("dedupe", () => {
  [
    { input: [], expected: [] },
  ].forEach(({ input, expected }) =>
    it(`returns empty array for [${input}]`, () => expect(dedupe(input)).toEqual(expected))
  );


// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

  [
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [3, 2, 1, 4, 5], expected: [3, 2, 1, 4, 5] },
    { input: ["hello", "a", "b", "c"], expected: ["hello", "a", "b", "c"] },
    { input: [1, 2, "hello", 4, "a", 6], expected: [1, 2, "hello", 4, "a", 6] },
  ].forEach(({ input, expected }) =>
    it(`returns the median for [${input}]`, () => expect(dedupe(input)).toEqual(expected))
  );

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the 
// first occurrence of each element from the original array.

  [
    { input: [1, 1, 2, 2, 3, 3,], expected: [1, 2, 3] },
    { input: ["a", "a", "b", "b", "c", "c"], expected: ["a", "b", "c"] },
    { input: ["qwe", "qwe", 3, 3, "hello", "hello" , "hello"], expected: ["qwe", 3, "hello"] },
    { input: ["a", "a", "a", "a"], expected: ["a"] },
    { input: [1, 2, 2, 2, 2, 2], expected: [1, 2] },
  ].forEach(({ input, expected }) =>
    it(`returns the median for [${input}]`, () => expect(dedupe(input)).toEqual(expected))
  );
});