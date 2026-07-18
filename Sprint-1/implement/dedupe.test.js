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
test("given an empty array, it returns an empty array", () => {
  const arr = [];
  const emptyArray = dedupe(arr);
  expect(emptyArray).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("the function should return the cope of original array when no duplicates of array pass to it", () => {
  const arr = [2, 3, 4, 5];

  const result = dedupe(arr);
  expect(result).toEqual(arr);
  expect(result).not.toBe(arr);
});
test("the function should return the cope of original array when no duplicates of array pass to it ", () => {
  const arr = [13, 9, 8, 7];

  const result = dedupe(arr);
  expect(result).toEqual(arr);
  expect(result).not.toBe(arr);
});
// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
test("the function should return the first occurrence of each element when duplicated arrays of element pass to it", () => {
  const arr = [3, 3, 3, 7, 8, 9, 9, 6, 6];

  const newResult = dedupe(arr);
  expect(newResult).toEqual([3, 7, 8, 9, 6]);
});
test("the function should return the first occurrence of each element when duplicated arrays of element pass to it", () => {
  const arr = [3, 3, "hi", 8, 8, "hi", "you", 8, "you", "hi"];

  const newResult = dedupe(arr);
  expect(newResult).toEqual([3, "hi", 8, "you"]);
});
test("the function should return the first occurrence of each element when duplicated arrays of element pass to it", () => {
  const arr = [
    "orange",
    "egg",
    "egg",
    "banana",
    "orange",
    "apple",
    "banana",
    "apple",
  ];

  const newResult = dedupe(arr);
  expect(newResult).toEqual(["orange", "egg", "banana", "apple"]);
});
