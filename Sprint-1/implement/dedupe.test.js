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
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test.todo("given an array with no duplicates, it returns original array");

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test.todo(
  "given an array with duplicates, removes duplicate preserving the first occurence of each element"
);

describe("dedupe", () => {
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  test("given an array with no duplicates, it returns original array", () => {
    expect(dedupe([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(dedupe(["c", "a", "t"])).toEqual(["c", "a", "t"]);
    expect(dedupe([1, 2, 11])).toEqual([1, 2, 11]);
  });

  test("removes duplicates from an array", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });
});
