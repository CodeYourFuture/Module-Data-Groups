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

test("given an array with no duplicates, it returns the copy of same array", () => {
  expect(dedupe([3, 19, 53, 467])).toEqual([3, 19, 53, 467]);
});

test("given an array of strings or numbers, returns the array with duplicates removed and first occurrence preserved", () => {
  expect(dedupe([7, "hi", 567, "a", 7, "hi", "b"])).toEqual([
    7,
    "hi",
    567,
    "a",
    "b",
  ]);
});
