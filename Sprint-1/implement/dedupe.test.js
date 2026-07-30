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

// Given an empty array
describe("dedupe", () => {
  test("returns an empty array when passed an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Given an array with no duplicates
  test("returns a copy of the original array when there are no duplicates", () => {
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
    expect(dedupe(["a", "b", "c"])).toEqual(["a", "b", "c"]);
    expect(dedupe(["apple", "banana", "cherry"])).toEqual([
      "apple",
      "banana",
      "cherry",
    ]);
  });

  // Given an array of strings or numbers
  test("removes duplicates from an array of numbers", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
    expect(dedupe([1, 1, 2, 2, 3, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  });
  test("removes duplicates from an array of strings", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    expect(
      dedupe(["apple", "banana", "apple", "banana", "cherry", "cherry"])
    ).toEqual(["apple", "banana", "cherry"]);
    expect(dedupe(["cat", "dog", "cat", "bird"])).toEqual([
      "cat",
      "dog",
      "bird",
    ]);
  });
  // Given an array with mixed types
  test("removes duplicates from an array with mixed types", () => {
    expect(dedupe([1, "1", 2, "2", 1, "1"])).toEqual([1, "1", 2, "2"]);
    expect(dedupe(["apple", 1, "banana", 2, "apple", 1])).toEqual([
      "apple",
      1,
      "banana",
      2,
    ]);
    expect(dedupe([true, false, true, false])).toEqual([true, false]);
  });
});
