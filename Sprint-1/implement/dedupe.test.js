const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) returns ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) returns [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) returns [1, 2]
*/

describe("dedupe", () => {
  // Acceptance Criteria:

  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array
  test("should return an empty array when passed an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  test("should return a copy of the original array when there are no duplicates", () => {
    const input = [1, 2, 3];

    const result = dedupe(input);

    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(input);
  });

  // Given an array of strings or numbers
  // When passed to the dedupe function
  // Then it should return a new array with duplicates removed while preserving the
  // first occurrence of each element from the original array.
  test("should return a new array with duplicates removed while preserving the first occurrence of each element", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });
});
