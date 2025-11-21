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
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns a copy (not the same array)", () => {
  const arr1 = [1, 2, 3];
  const result1 = dedupe(arr1);

  expect(result1).toEqual(arr1); // values match
  expect(result1).not.toBe(arr1); // different reference

  const arr2 = ["a", "b", "c"];
  const result2 = dedupe(arr2);

  expect(result2).toEqual(arr2);
  expect(result2).not.toBe(arr2);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("given an array with duplicates, it removes the duplicates preserving the first occurrence", () => {
  expect(dedupe(["a", "a", "b", "c", "b"])).toEqual(["a", "b", "c"]);
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});
