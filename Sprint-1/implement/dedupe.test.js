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
    it("returns empty array", () => { 
        expect(dedupe([])).toBe(null)
    });   

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
  [
    { input: ['a','b','c','d','e','f'], expected: ['a','b','c','d','e','f'] },
    { input: [1, 2, 3, 4, 5, 6], expected: [1, 2, 3, 4, 5, 6] },
    { input: ['apple', 'orange', 'grape'], expected: ['apple', 'orange', 'grape'] },
    { input: [12, 23, 34, 45, 56, 67], expected: [12, 23, 34, 45, 56, 67] },
  ].forEach(({ input, expected }) =>
    it(`returns the original list with no duplicates [${input}]`, () => expect(dedupe(input)).toEqual(expected))
  );

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the 
// first occurrence of each element from the original array.
  [
    { input: ['a','a','a','b','b','c'], expected: ['a','b','c'] },
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    { input: [1, 2, 1], expected: [1, 2] },
    { input: ['apple', 'banana', 'apple', 'banana'], expected: ['apple', 'banana'] },
  ].forEach(({ input, expected }) =>
    it(`returns the deduplicated list [${input}]`, () => expect(dedupe(input)).toEqual(expected))
  );
});