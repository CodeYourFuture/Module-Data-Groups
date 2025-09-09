const dedupe = require("./dedupe.js");
describe("dedupe function", () => {

  // Test 1: empty array
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Test 2: array with no duplicates
  test("given an array with no duplicates, it returns a copy of the original array", () => {
    const arr = [1, 2, 3, 4];
    expect(dedupe(arr)).toEqual(arr);
    expect(dedupe(arr)).not.toBe(arr); // ensure it returns a new array, not the same reference
  });

  // Test 3: array with duplicates (strings)
  test("removes duplicate strings, preserving first occurrence", () => {
    expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  // Test 4: array with duplicates (numbers)
  test("removes duplicate numbers, preserving first occurrence", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  });

  // Test 5: mixed array
  test("removes duplicates in mixed arrays", () => {
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });

});
