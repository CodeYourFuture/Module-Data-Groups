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

test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

test("given an array with no duplicates, should return a copy of the same array", () => {
  const testArray = [1, 5, 9, 23];
  const testResult = dedupe(testArray);
  expect(testResult).not.toBe(testArray);
  expect(testResult).toEqual(testArray);
});

test("given an array with strings or numbers, should return an array with duplicates removed and first occurrence preserved", () => {
  expect(dedupe([1, 6, 1, "a", 5, 6, "a", "b", "b"])).toEqual([
    1,
    6,
    "a",
    5,
    "b",
  ]);
});
