const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) returns ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) returns [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) returns [1, 2]
*/

// Acceptance Criteria:

describe("dedupe", () => {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array
  it("returns an empty array when given empty array", () => {
    expect(dedupe([])).toStrictEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  it("returns a copy of the array is the one given without duplicates", () => {
    expect(dedupe([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
    expect(dedupe(["a", "b", "c", "d"])).toStrictEqual(["a", "b", "c", "d"]);
  });
  // Given an array of strings or numbers
  // When passed to the dedupe function
  // Then it should return a new array with duplicates removed while preserving the
  // first occurrence of each element from the original array.
  it("returns an array of unique elements with order preserving the first occurence of each element", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toStrictEqual([
      "a",
      "b",
      "c",
    ]);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toStrictEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toStrictEqual([1, 2]);
  });
});
