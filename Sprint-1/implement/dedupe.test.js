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

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

describe("dedupe", () => {
  [
    { input: [], expected: [] },
    { input: ["apple", "banana", 1, 10], expected: ["apple", "banana", 1, 10] },
    {
      input: [1, -1, -100, -100, "apple", "apple"],
      expected: [1, -1, -100, "apple"],
    },
    { input: [-10, -20, -3, -4], expected: [-10, -20, -3, -4] },
    { input: [1.5, 10.5, 0.5], expected: [1.5, 10.5, 0.5] },
    {
      input: ["apple", "banana", "cherry"],
      expected: ["apple", "banana", "cherry"],
    },
  ].forEach(({ input, expected }) =>
    it(`returns the deduped array for [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );

  it("returns a copy not the original array", () => {
    const input = [1, 2, 3];
    const result = dedupe(input);
    expect(result).toEqual(input);
    expect(result).not.toBe(input);
  });
});
