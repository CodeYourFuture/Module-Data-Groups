
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

const dedupe = require("./dedupe.js");

describe("dedupe", () => {
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });
});

test("throws for non-array input", () => {
  expect(() => dedupe(42)).toThrow(TypeError);
  expect(() => dedupe("string")).toThrow(TypeError);
  expect(() => dedupe({})).toThrow(TypeError);
});

test("does not mutate the input array", () => {
  const input = [1, 2, 3];
  dedupe(input);
  expect(input).toEqual([1, 2, 3]);
});

test("objects are compared by reference", () => {
    const a = { a: 1 };
    const b = { a: 1 };
    expect(dedupe([a, b, a])).toEqual([a, b]);
});

test('null or undefined returns empty array', () => {
  expect(dedupe(null)).toEqual([]);
  expect(dedupe(undefined)).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns a copy of the original array", () => {
  expect(dedupe(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  expect(dedupe([5, 1, 2, 3, 8])).toEqual([5, 1, 2, 3, 8]);
  expect(dedupe([1, 2])).toEqual([1, 2]);
  expect(dedupe(['apple', 'banana', 'orange'])).toEqual(['apple', 'banana', 'orange']);
  expect(dedupe(['Monday', 'Tuesday', 'Wednesday'])).toEqual(['Monday', 'Tuesday', 'Wednesday']);
});
// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
test("given an array of strings or numbers, it returns a new array with duplicates removed while preserving the first occurrence of each element", () => {
  expect(dedupe(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
  expect(dedupe([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
  expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  expect(dedupe(['apple', 'banana', 'apple', 'orange', 'banana'])).toEqual(['apple', 'banana', 'orange']);
  expect(dedupe([true, false, true])).toEqual([true, false]);
});

test("given an array with mixed types, it returns a new array with duplicates removed while preserving the first occurrence", () => {
  expect(dedupe([1, '1', 2, '2', 1])).toEqual([1, '1', 2, '2']);
  expect(dedupe(['apple', 1, 'apple', 2])).toEqual(['apple', 1, 2]);
});
