const dedupe = require("./dedupe.js");

describe("dedupe", () => {
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  test("given an array with no duplicates, it returns a copy of the original array", () => {
    const array = [1, 2, 3];
    expect(dedupe(array)).toEqual([1, 2, 3]);
    expect(dedupe(array)).not.toBe(array); 
  });

  test("given an array with strings or numbers, it removes the duplicate values, preserving the first occurrence of each element", () => {
    expect(dedupe(['a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });
});



