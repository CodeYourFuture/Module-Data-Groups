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
it("returns an empty array when given an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
it("returns a copy of an array with no duplicates", () => {
  const values = [1, "a", 2, "b"];
  const result = dedupe(values);

  expect(result).toEqual(values);
  expect(result).not.toBe(values);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
it("removes duplicate numbers while preserving their first occurrences", () => {
  const values = [5, 1, 1, 2, 3, 2, 5, 8];
  const result = dedupe(values);

  expect(result).toEqual([5, 1, 2, 3, 8]);
  expect(result).not.toBe(values);
});

it("removes duplicate strings while preserving their first occurrences", () => {
  const values = ["a", "b", "a", "c", "b"];
  const result = dedupe(values);

  expect(result).toEqual(["a", "b", "c"]);
  expect(result).not.toBe(values);
});
