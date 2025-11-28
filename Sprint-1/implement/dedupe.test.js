const dedupe = require("./dedupe.js");

/*
Dedupe Array

📖 Dedupe means **dedupe**

In this kata, you will need to dedupe the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

describe("dedupe - valid inputs", () => {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array
  [{ input: [], expected: [] }].forEach(({ input, expected }) =>
    test(`returns an empty array for input [${input}]`, () => {
      const result = dedupe(input);
      expect(result).toEqual(expected);
      expect(result).not.toBe(input); // ensures it's a new array
    })
  );

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  [
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: ["a", "b", "car"], expected: ["a", "b", "car"] },
    { input: [0, 1, 5, 6], expected: [0, 1, 5, 6] },
  ].forEach(({ input, expected }) =>
    test(`returns a copy of the array when no duplicates exist for input [${input}]`, () => {
      const result = dedupe(input);
      expect(result).toEqual(expected);
      expect(result).not.toBe(input); // ensures it's a new array
    })
  );

  // Given arrays with duplicates
  [
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    { input: [1, 1, 1, 1], expected: [1] },
    { input: ["a", "a", "a", "b", "b", "c"], expected: ["a", "b", "c"] },
  ].forEach(({ input, expected }) =>
    test(`removes duplicate elements and keeps the first occurrence for [${input}]`, () => {
      const result = dedupe(input);
      expect(result).toEqual(expected);
      expect(result).not.toBe(input); // ensures it's a new array
    })
  );

  // Given arrays with numbers and strings mixed
  [
    { input: ["1", 1, "1", 1], expected: ["1", 1] },
    { input: [2, "3", "hello", 5, 5], expected: [2, "3", "hello", 5] },
  ].forEach(({ input, expected }) =>
    test(`removes duplicates from an array of numbers and strings, keeping the first occurrence for input [${input}]`, () => {
      const result = dedupe(input);
      expect(result).toEqual(expected);
      expect(result).not.toBe(input); // ensures it's a new array
    })
  );

  // Given arrays with invalid elements
  [
    { input: [1, 2, true, 3, null, "a", {}], expected: [1, 2, 3, "a"] },
    { input: ["x", undefined, "x", "y", []], expected: ["x", "y"] },
    { input: [false, 5, 5, "hello", () => {}, 5], expected: [5, "hello"] },
    { input: [1, NaN, 2, NaN, "hello"], expected: [1, 2, "hello"] },
  ].forEach(({ input, expected }) =>
    test(`filters invalid elements, removes duplicates, and returns a copy for input [${input}]`, () => {
      const result = dedupe(input);
      expect(result).toEqual(expected);
      expect(result).not.toBe(input); // ensures it's a new array
    })
  );
});

describe("dedupe - invalid inputs", () => {
  const invalidInputs = [null, undefined, 123, "string", {}, () => {}];

  invalidInputs.forEach((input) =>
    test(`throws typeError when input is ${String(input)}`, () => {
      expect(() => dedupe(input)).toThrow(TypeError);
      expect(() => dedupe(input)).toThrow("Input must be an array");
    })
  );
});