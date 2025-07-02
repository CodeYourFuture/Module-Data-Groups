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
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

describe("Dedupe Array", () => {
  [{ input: [1, 4, 2], expected: [1, 4, 2] }].forEach(({ input, expected }) =>
    it(`return a copy of the original array[${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );

  [{ input: ["a", "b", "c"], expected: ["a", "b", "c"] }].forEach(
    ({ input, expected }) =>
      it(`return a copy of the original array[${input}]`, () =>
        expect(dedupe(input)).toEqual(expected))
  );
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

describe("Dedupe Array", () => {
  [
    {
      input: [1, 4, 2, 3, 3, "c", "a", "a", "b"],
      expected: [1, 4, 2, 3, "c", "a", "b"],
    },
  ].forEach(({ input, expected }) =>
    it(`removes duplicates from  [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
  [
    {
      input: [1, 4, 2],
      expected: [1, 4, 2],
    },
  ].forEach(({ input, expected }) =>
    it(`removes duplicates from  [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});
