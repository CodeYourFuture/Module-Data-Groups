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
// When passed to the dedupe function
// Then it should return an empty array

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.

// 1. Bring in your dedupe function (adjust the path if needed)

describe("dedupe function", () => {
  // Test Case 1: Array with no duplicates
  test("should return a copy of the original array when passed no duplicates", () => {
    const input = [1, 2, 3, 4];
    const result = dedupe(input);

    // .toEqual checks the INSIDE of the arrays, not just if they are the same box
    expect(result).toEqual([1, 2, 3, 4]);

    // Optional: Verify it's a NEW array copy, not the exact same array in memory
    expect(result).not.toBe(input);
  });

  // Test Case 2: Array with duplicates (Strings and Numbers)
  test("should remove duplicates while keeping the first occurrence of each element", () => {
    const input = ["cobble", "diamond", "cobble", "dirt", "diamond", 1, 2, 1];
    const expectedOutput = ["cobble", "diamond", "dirt", 1, 2];

    expect(dedupe(input)).toEqual(expectedOutput);
  });
});
