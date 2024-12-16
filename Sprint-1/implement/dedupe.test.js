const dedupe = require("./dedupe.js");

describe("dedupe function", () => {
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  test("given an array with no duplicates, it returns a copy of the original array", () => {
    const input = [1, 2, 3, 4];
    const result = dedupe(input);
    expect(result).toEqual([1, 2, 3, 4]);
    expect(result).not.toBe(input); // Ensures it's a new array
  });

  test("given an array with duplicate numbers, it removes duplicates", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  });

  test("given an array with duplicate strings, it removes duplicates", () => {
    expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test("given an array with mixed duplicates, it preserves first occurrence", () => {
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });
});
