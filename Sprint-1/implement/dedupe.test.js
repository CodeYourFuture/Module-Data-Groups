const dedupe = require("./dedupe.js");
/*
Dedupe Array
📖 Dedupe means **deduplicate**
*/
describe("deduplicate", () => {
  it(`returns the deduplicate for string letters`, () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  it(`returns the deduplicate for numbers`, () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  });

  it(`returns the deduplicate while not numerical in order`, () => {
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });

  it(`returns the deduplicate for string and numbers `, () => {
    expect(dedupe([5, 1, 1, 2, 3, "a", "a", "a", "c"])).toEqual([
      5,
      1,
      2,
      3,
      "a",
      "c",
    ]);
  });

  it(`returns the empty array when given an empty array`, () => {
    expect(dedupe([])).toEqual([]);
  });
});
/*
In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) returns ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) returns [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) returns [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
