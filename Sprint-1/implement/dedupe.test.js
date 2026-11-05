const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this Kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) returns ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) returns [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) returns [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
describe("dedupe", () => {
  it("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  it("given an array, it returns an deduplicate array", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  it("Given an array with no duplicates, it returns a copy of the original array", () => {
    expect(dedupe(["d", "s", "t", "c"])).toEqual(["d", "s", "t", "c"]);
    expect(dedupe([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2, 1]);
    expect(dedupe([7, 8, 9])).toEqual([7, 8, 9]);
  });

  // Given an array of strings or numbers
  // When passed to the dedupe function
  // Then it should return a new array with duplicates removed while preserving the
  // first occurrence of each element from the original array.
  it("Given an array without duplicates, it returns a copy of the original array", () => {
    expect(dedupe(["d", "s", "s", "t", "c", "d", "s", "t", "c", "d"])).toEqual([
      "d",
      "s",
      "t",
      "c",
    ]);
    expect(dedupe([5, 4, 5, 4, 2, 1, 5, 3, 4])).toEqual([5, 4, 2, 1, 3]);
    expect(dedupe([7, 2, 7, 8, 9])).toEqual([7, 2, 8, 9]);
  });
});
