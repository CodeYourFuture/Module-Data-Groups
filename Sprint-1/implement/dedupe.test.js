const dedupe = require("./dedupe");

describe("dedupe function", () => {
  
    // Test 1: Given an empty array, it returns an empty array
    test("given an empty array, it returns an empty array", () => {
      expect(dedupe([])).toEqual([]);
    });
  
    // Test 2: Given an array with no duplicates, it returns a copy of the original array
    test("given an array with no duplicates, it returns a copy of the original array", () => {
      expect(dedupe([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(dedupe(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });
  
    // Test 3: Given an array with duplicates, it removes duplicates and preserves the first occurrence
    test("given an array with duplicates, it removes duplicates and preserves the first occurrence", () => {
      expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
      expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
      expect(dedupe([1, 2, 1])).toEqual([1, 2]);
    });
});
