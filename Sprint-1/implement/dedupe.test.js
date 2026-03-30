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
test("Given an empty array, when passed to the dedupe function, then it should return an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given a non-array value
// When passed to the dedupe function
// Then it should return null
test("Given a non-array value, when passed to the dedupe function, then it should return null", () => {
  expect(dedupe("not an array")).toBeNull();
  expect(dedupe(123)).toBeNull();
  expect(dedupe({})).toBeNull();
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("Given an array with no duplicates, when passed to the dedupe function, then it should return a copy of the original array", () => {
  const input = ["a", "b", "c"];
  const copyOfInput = ["a", "b", "c"];

  const result = dedupe(input);

  expect(result).toEqual(copyOfInput);
  expect(result).not.toBe(input);
  expect(input).toEqual(copyOfInput);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element
test("Given an array with strings or numbers, when passed to the dedupe function, then it should remove the duplicate values, preserving the first occurrence of each element", () => {
  expect(dedupe(["a", "a", "b", "c", "c"])).toEqual(["a", "b", "c"]);
  expect(dedupe([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
});

test("preserves the original order of first occurrences", () => {
  const input = ["b", "a", "b", "c"];
  const result = dedupe(input);

  expect(result).toEqual(["b", "a", "c"]);
});
