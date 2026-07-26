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
test("given an empty array, return an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
const testCaseNoDuplicates = [
  {
    input: ["hey", "buddy", "world", "10", "sister", 1],
    expected: ["hey", "buddy", "world", "10", "sister", 1],
  },
  {
    input: [2, 3, 4, 5, 6, 7],
    expected: [2, 3, 4, 5, 6, 7],
  },
];
testCaseNoDuplicates.forEach(({ input, expected }) => {
  test("given an array with no duplicates, return a copy of the array", () => {
    expect(dedupe(input)).toEqual(expected);
  });
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
const testCaseWithDuplicates = [
  { input: [1, 2, 2, 3, 1], expected: [1, 2, 3] },
  { input: ["a", "b", "a", "c", "b"], expected: ["a", "b", "c"] },
  { input: [5, 5, 1, 1, 2, 3, 2], expected: [5, 1, 2, 3] },
  {
    input: ["apple", "banana", "apple", "orange"],
    expected: ["apple", "banana", "orange"],
  },
  { input: [1, "a", 1, "b", "a", 2], expected: [1, "a", "b", 2] },
  { input: ["hey", "hey", "hey", "hey", "hey", "hey"], expected: ["hey"] },
];
testCaseWithDuplicates.forEach(({ input, expected }) => {
  test("given an array with duplicates, return a new array with only the first occurrence", () => {
    expect(dedupe(input)).toEqual(expected);
  });
});
