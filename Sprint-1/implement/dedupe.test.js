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
  expect(dedupe([])).toEqual([]);
});

test("array with no duplicates returns a copy", () => {
  const arr = [1, 2, 3];
  const out = dedupe(arr);
  expect(out).toEqual(arr);
  expect(out).not.toBe(arr); // should be a new array
});

test("removes duplicates while preserving first occurrence order", () => {
  const input = [5, 1, 1, 2, 3, 2, 5, 8];
  expect(dedupe(input)).toEqual([5, 1, 2, 3, 8]);
});

test("does not mutate the original array", () => {
  const arr = ["a", "a", "b"];
  const copy = arr.slice();
  dedupe(arr);
  expect(arr).toEqual(copy);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
