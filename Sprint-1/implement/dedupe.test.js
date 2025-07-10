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
describe("dedupe", () => {
  it("given an empty array, it returns an empty array", () => {
    const list = [];
    expect(dedupe(list)).toEqual([]);
  });

  [
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [5, 4, 3, 2, 1], expected: [5, 4, 3, 2, 1] },
    { input: [2, 1, 4, 3], expected: [2, 1, 4, 3] },
    { input: ["a", "2", "c", 4, "b", 6], expected: ["a", "2", "c", 4, "b", 6] },
  ].forEach(({ input, expected }) =>
    it(`returns a same copy for [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );

  [
    { input: ["a", "a", "a", "b", "b", "c"], expected: ["a", "b", "c"] },
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    { input: [1, 2, 1], expected: [1, 2] },
    { input: ["a", 4, "c", 4, "c", 6], expected: ["a", 4, "c", 6] },
  ].forEach(({ input, expected }) =>
    it(`returns a de-duplicated copy for [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element
