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

describe('dedupe', () => {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array
  it("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  it("given an array with no duplicates, it returns a copy of the original array", () => {
    const arr = [1, 2, 3];
    expect(dedupe(arr)).toEqual(arr);
  });

  it("given an array of strings with no duplicates, it returns a copy of the original array", () => {
    const arr = ['a', 'b', 'c'];
    expect(dedupe(arr)).toEqual(arr);
  });

  // Given an array with strings or numbers
  // When passed to the dedupe function
  // Then it should remove the duplicate values, preserving the first occurence of each element
  it("given an array with duplicate numbers, it removes the duplicate values, preserving the first occurrence", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  });

  it("given an array with duplicate strings, it removes the duplicate values, preserving the first occurrence", () => {
    expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it("given an array with mixed duplicate types, it removes the duplicate values, preserving the first occurrence", () => {
    expect(dedupe([1, '1', 1, '2', 2])).toEqual([1, '1', '2', 2]);
  });

  it("given an array with duplicate values in different order, it removes the duplicate values, preserving the first occurrence", () => {
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });

  it("given an invalid input, it returns an empty array", () => {
    expect(dedupe(null)).toEqual([]);
    expect(dedupe(undefined)).toEqual([]);
    expect(dedupe({})).toEqual([]);
    expect(dedupe("string")).toEqual([]);
  });
});