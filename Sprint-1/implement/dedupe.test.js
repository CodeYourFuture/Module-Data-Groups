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
//test.todo("given an empty array, it returns an empty array");
test("when passed an emptyarray", () => {
  const array = [];
  dedupe(array);
  expect(dedupe(array)).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("when passed an array with no duplicate", () => {
  const array = [1, 2, 3, 4];
  dedupe(array);
  expect(dedupe(array)).toEqual([1, 2, 3, 4]);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
test("when passed an array of  duplicate numbers", () => {
  expect(dedupe([1, 1, 2])).toEqual([1, 2]);
  expect(dedupe([1, 1, 2, 2, 2, 3])).toEqual([1, 2, 3]);
  expect(dedupe([1, 1, 1, 3, 3, 4, 4])).toEqual([1, 3, 4]);
});

test("when passed an array of duplicate characters", () => {
  expect(dedupe(["a", "a", "b", "b", "b", "c"])).toEqual(["a", "b", "c"]);
  expect(dedupe(["c", "c", "e", "e", "z", "z"])).toEqual(["c", "e", "z"]);
});
test("when passed an array of duplicate unordered  numbers  ", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});
test("when passed an array of duplicate unordered characters ", () => {
  expect(dedupe(["f", "a", "a", "k", "k", "c", "c"])).toEqual([
    "f",
    "a",
    "k",
    "c",
  ]);
});
