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
test("Given an empty array, returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
// test(
//   "Given an array with no duplicates it returns a copy of the original array", () => {
//     expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
// );
describe("dedupe basic functionality", () => {
  [
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [24, 12, 48, 36], expected: [24, 12, 48, 36] },
    {
      input: ["a", "b", "c", "d", "e", "f"],
      expected: ["a", "b", "c", "d", "e", "f"],
    },
    { input: ["z", "y", "x"], expected: ["z", "y", "x"] },
  ].forEach(({ input, expected }) =>
    it(`Given an array with no duplicates it returns a copy of the original array [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element

// test("given an array with strings or numbers, it removes duplicates preserving the first occurrence", () => {
//   expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
// });

describe("dedupe duplicates", () => {
  [
    { input: ["a", "a", "a", "b", "b", "c"], expected: ["a", "b", "c"] },
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    {
      input: [1, "a", 2, "b", 1, "a", 3, "c", 2, "b"],
      expected: [1, "a", 2, "b", 3, "c"],
    },
  ].forEach(({ input, expected }) =>
    it(`Given an array with strings and/or numbers, it removes duplicates preserving the first occurrence [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});

// Given an array with various values and types
// When passed to the dedupe function
// Then it should handle edge cases like mixed types, empty strings, and null values

// Define obj outside the array so it can be referenced
const obj = { a: 1 };

describe("dedupe edge cases", () => {
  [
    // Array with only one element
    { input: ["a"], expected: ["a"] },

    // Array with all elements the same
    { input: [1, 1, 1, 1], expected: [1] },

    // Array with mixed types (numbers, strings, booleans)
    { input: [1, "1", true, 1, "1", true], expected: [1, "1", true] },

    // Array with null and undefined
    { input: [null, undefined, null, undefined], expected: [null, undefined] },

    // Array with objects that have the same content but are different references
    // Each object is unique because they are different objects in memory,
    // even if their properties are the same.
    {
      input: [{ a: 1 }, { a: 1 }, { b: 2 }],
      expected: [{ a: 1 }, { a: 1 }, { b: 2 }],
    },

    // Array with duplicate object references
    // Only the first reference should be kept, because they point to the exact same object in memory.
    {
      input: [obj, obj, { a: 1 }],
      expected: [obj, { a: 1 }],
    },
  ].forEach(({ input, expected }) =>
    it(`handles edge case: [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});
