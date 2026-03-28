const dedupe = require("./dedupe");
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
describe("dedupe()", () => {
  [{ input: [], expected: [] }].forEach(({ input, expected }) =>
    it(`given an empty array, it returns an empty array [${input}]`, () => {
      expect(dedupe(input)).not.toBe(expected);
    })
  );
  // Given an array with no duplicates
  // Then it should return a copy of the original array
  [
    { input: [1, 2, 3, 4], expected: [1, 2, 3, 4] },
    {
      input: ["apples", "banana", "orange"],
      expected: ["apples", "banana", "orange"],
    },
    { input: [-1, 7, 1], expected: [-1, 7, 1] },
  ].forEach(({ input, expected }) =>
    it(`should return same input values [${input}] without duplicate`, () => {
      expect(dedupe(input)).toStrictEqual(expected);
    })
  );

  // When passed to the dedupe function
  // Given an array with strings or numbers
  // When passed to the dedupe function
  // Then it should remove the duplicate values, preserving the first occurence of each element

  [
    { input: [1, 2, 5, 5, "a", 5, 10, 10, "a"], expected: [1, 2, 5, "a", 10] },
    {
      input: ["apple", "banana", "orange", "apple", "banana", 1, 3, 4, 1],
      expected: ["apple", "banana", "orange", 1, 3, 4],
    },
  ].forEach(({ input, expected }) =>
    it(`should return deduplicated array for [${input}]`, () => {
      expect(dedupe(input)).toStrictEqual(expected);
    })
  );

  [{ input: [1, 1, 2], expected: [1, 2] }].forEach(({ input, expected }) =>
    it("returns a copy  not the original array", () => {
      expect(dedupe(input)).toStrictEqual(expected);
    })
  );
});
