const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

describe("dedupe", () => {
  it("returns the array without duplicates", () => {
    expect(dedupe(['a','a','a','b','b','c'])).toStrictEqual(['a','b','c']);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toStrictEqual([5, 1, 2, 3, 8]);
  });

  it("returns the original array when the original array does not contain duplicates", () => {
    expect(dedupe(['a','b','c'])).toStrictEqual(['a','b','c']);
    expect(dedupe([5, 1, 2, 3, 8])).toStrictEqual([5, 1, 2, 3, 8]);
  });

  it("returns an array when an empty array is passed to the function", () => {
    expect(dedupe([])).toStrictEqual([]);
  });
});
