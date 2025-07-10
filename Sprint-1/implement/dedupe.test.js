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
describe('dedupe', () => {
    it('returns an empty array when given an empty array', () => {
      const input = [];
      const result = dedupe(input);
      expect(result).toEqual([]);
    });
  });

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
describe('dedupe', () => {
    it('returns the same array when there are no duplicates', () => {
      const input = [1, 2, 3];
      const result = dedupe(input);
      expect(result).toEqual([1, 2, 3]);
    });
  });

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
describe('dedupe', () => {
    it('removes duplicates and preserves the first occurrence', () => {
      const input = ['a', 'b', 'a', 'c', 'b'];
      const result = dedupe(input);
      expect(result).toEqual(['a', 'b', 'c']);
    });
  
    it('removes duplicates from an array of numbers', () => {
      const input = [5, 1, 1, 2, 3, 2, 5, 8];
      const result = dedupe(input);
      expect(result).toEqual([5, 1, 2, 3, 8]);
    });
  
    it('handles mixed types in the array', () => {
      const input = [1, 'a', 2, 'b', 1, 'a'];
      const result = dedupe(input);
      expect(result).toEqual([1, 'a', 2, 'b']);
    });
  });