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
//test.todo("given an empty array, it returns an empty array");

describe('dedupe', () => {
  it("returns an empty array when input is an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

it("returns a copy of the original array when there are no duplicates", () => {
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
    expect(dedupe(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

it("removes duplicate numbers and preserves order", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  });

  it("removes duplicate strings and preserves order", () => {
    expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });
  it("handles mixed types and removes duplicates", () => {
    expect(dedupe([1, 'a', 1, 'b', 'a', 2])).toEqual([1, 'a', 'b', 2]);
  });
  it("handles arrays with only duplicates", () => {
    expect(dedupe(['x', 'x', 'x'])).toEqual(['x']);
    expect(dedupe([2, 2, 2, 2])).toEqual([2]);
  });

  test('returns a new array, not the original', () => {
    const input = [1, 2, 2, 3];
    const result = dedupe(input);
    expect(result).not.toBe(input); // Ensures a copy is returned
  });

});