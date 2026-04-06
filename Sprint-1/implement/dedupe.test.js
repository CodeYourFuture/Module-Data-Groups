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
test("The function should return a copy of the original array if the array contains no duplicates", () => {
  const original1 = [2, 4, 5, 6, 8];
  expect(original1.length).toBe(new Set(original1).size);
  const result1 = dedupe(original1);
  expect(result1).toEqual("[2, 4, 5, 6, 8]");
  expect(result1).not.toBe(original1);

  const original2 = [3, 9, 25, 1, 12, 42];
  expect(original2.length).toBe(new Set(original2).size);
  const result2 = dedupe(original2);
  expect(result2).toEqual("[3, 9, 25, 1, 12, 42]");
  expect(result2).not.toBe(original2);
});
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("The function should return a clean array when a duplicated array is passed", () => {
  expect(dedupe([2, 2, 4, 4, 5, 5, 6, 6, 6, 6, 8, 8, 8, 8])).toEqual([
    2, 4, 5, 6, 8,
  ]);
  expect(dedupe([1, 1, 1, 2, 2, 3, 3, 4, 4, 6, 6, 7, 7, 8])).toEqual([
    1, 2, 3, 4, 6, 7, 8,
  ]);
  expect(
    dedupe(["ahmed", "ahmed", "chris", "chris", "tom", "tom", "joy"])
  ).toEqual(["ahmed", "chris", "tom", "joy"]);
  expect(
    dedupe([2, 2, "apple", "apple", 5, 5, "samsung", "samsung", 8, 8])
  ).toEqual([2, "apple", 5, "samsung", 8]);
});
