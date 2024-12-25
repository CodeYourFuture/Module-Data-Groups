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

describe('dedupe function', () => {
  test('should return an empty array when the input array is empty', () => {
    expect(dedupe([])).toEqual([]);
  });

  test('should remove duplicate strings from the array', () => {
    expect(dedupe(['a', 'a', 'b', 'c', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('should remove duplicate numbers from the array', () => {
    expect(dedupe([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test('should handle a mix of strings and numbers', () => {
    expect(dedupe([1, '1', 2, '2', 1, 2, '2'])).toEqual([1, '1', 2, '2']);
  });

  test('should handle arrays with a single element', () => {
    expect(dedupe([42])).toEqual([42]);
  });

  test('should handle arrays with no duplicates', () => {
    expect(dedupe([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle arrays with mixed types', () => {
    expect(dedupe(['a', 1, 'a', 1, 2, 'b', 'b'])).toEqual(['a', 1, 2, 'b']);
  });
});


// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
