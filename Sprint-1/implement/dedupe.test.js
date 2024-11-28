const dedupe = require("./dedupe.js");

describe("dedupe", () => {
 
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

 
  test("given an array with no duplicates, it returns a copy of the original array", () => {
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
    expect(dedupe(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  
  test("given an array with duplicates, it removes the duplicates and preserves the first occurrence", () => {
    expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });

  
  test("throws an error when input is not an array", () => {
    expect(() => dedupe(null)).toThrow("Input must be an array");
    expect(() => dedupe("string")).toThrow("Input must be an array");
    expect(() => dedupe(123)).toThrow("Input must be an array");
  });
});

