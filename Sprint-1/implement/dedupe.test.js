const dedupe = require("./dedupe.js");

//Dedupe Array

//📖 Dedupe means **deduplicate**

//In this kata, you will need to deduplicate the elements of an array

describe("dedupe", () => {
  //E.g. dedupe(['a','a','a','b','b','c']) returns ['a','b','c']
  it("returns for ['a','a','a','b','b','c']", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  //E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) returns [5, 1, 2, 3, 8]
  it("returns for [5, 1, 1, 2, 3, 2, 5, 8]", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  });
  //E.g. dedupe([1, 2, 1]) returns [1, 2]
  //*/
  it("returns for [1, 2, 1]", () => {
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });

  // Acceptance Criteria:

  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array

  it("returns for []", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array

  it("returns for [1, 2, 3, 4]", () => {
    const original = [1, 2, 3, 4];
    const result = dedupe(original);
    expect(result)not.toBe(original);
  });

  // Given an array of strings or numbers
  // When passed to the dedupe function
  // Then it should return a new array with duplicates removed while preserving the
  // first occurrence of each element from the original array.
  it("returns for ['apple', 'orange', 'banana', 'banana']", () => {
    expect(dedupe(["apple", "orange", "banana", "banana"])).toEqual([
      "apple",
      "orange",
      "banana",
    ]);
  });
});
