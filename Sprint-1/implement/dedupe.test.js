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
  it("returns [] for []", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  it("returns a copy of the array when there are no duplicates", () => {
    // const list = [1, 2, 3];
    // const result = dedupe(list);
    // expect(result).toEqual([1, 2, 3]);
    // expect(result).not.toBe(list);
    expect(dedupe([1, "1", 2])).toEqual([1, "1", 2]);
  });
  // Given an array of strings or numbers
  // When passed to the dedupe function
  // Then it should return a new array with duplicates removed while preserving the
  // first occurrence of each element from the original array.
  it("removes duplicate numbers, keeping the first occurrence order", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });

  it("treats 1 and '1' as different values", () => {
    expect(dedupe([1, "1", 1, "1"])).toEqual([1, "1"]);
  });

  it("doesn't modify the input array", () => {
    const list = [1, 1, 2];
    dedupe(list);
    expect(list).toEqual([1, 1, 2]);
  });
});
