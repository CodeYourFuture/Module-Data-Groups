const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
describe("dedupe", () => {
  it("should return an empty array when given an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array

  it("should return a copy of the original array when given an array with no duplicates", () => {
    const arr = [1, 2, 3];
    expect(dedupe(arr)).toEqual([1, 2, 3]);
    // Also check it's not the same reference
    expect(dedupe(arr)).not.toBe(arr);
  });

  // Given an array with strings or numbers
  // When passed to the dedupe function
  // Then it should remove the duplicate values, preserving the first occurence of each element

  it("should remove duplicates of an array with strings and preserve first occurrence", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
  });
});

describe("dedupe", () => {
  it("should work with mixed types and remove duplicates (numbers and strings)", () => {
    expect(dedupe([1, "1", 2, "2", 1, "1"])).toEqual([1, "1", 2, "2"]);
  });
});
