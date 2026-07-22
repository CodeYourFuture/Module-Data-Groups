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
//test.todo("given an empty array, it returns an empty array");
const dedupe = require("./dedupe.js");

describe("dedupe given an empty array, it returns an empty array ", () => {
  [{ input: [], expected: [] }].forEach(({ input, expected }) =>
    it(`returns the empty array for [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

describe("dedupe given an array with no duplicate, it returns a copy of original array ", () => {
  [{ input: [1, 2, 3], expected: [1, 2, 3] }].forEach(({ input, expected }) =>
    it(`returns the original copy of the  array for [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});



// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the 
// first occurrence of each element from the original array.

describe("dedupe given an array of strings or Numbers , it returns a copy with duplicates in original array removed ", () => {
  [
    {
      input: ["s", "t", "r", "i", "n", "g", "s"],
      expected: ["s", "t", "r", "i", "n", "g"],
    },
    { input: [1, 1, 2, 3, 3, 4], expected: [1,2,3,4] },
  ].forEach(({ input, expected }) =>
    it(`returns the original copy of the  array for [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});