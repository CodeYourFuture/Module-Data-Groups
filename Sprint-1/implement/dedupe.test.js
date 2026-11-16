const dedupe = require("./dedupe.js");

describe("dedupe", () => {
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  test("given an array with no duplicates, it returns a copy of the original array", () => {
    const input = [1, 2, 3];
    const result = dedupe(input);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(input);
  });

  test("given an array of strings or numbers, it returns a new array with duplicates removed while preserving the first occurrence", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });
});