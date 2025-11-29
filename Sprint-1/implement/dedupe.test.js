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
describe("returning copies of arrays with no duplicates", () => {
  [
    { input: [1, 4, 5, 6, 2, 7, 8, 45], expected: [1, 4, 5, 6, 2, 7, 8, 45] },
    {
      input: [1, 3, 5, 7, 9, 15, 17, 19],
      expected: [1, 3, 5, 7, 9, 15, 17, 19],
    },
    {
      input: [1, 3, 50, 732, 987, 15000, 1790, 190],
      expected: [1, 3, 50, 732, 987, 15000, 1790, 190],
    },
    {
      input: ["one", "jim", 5, "messy", "tip", 15, "random", 19],
      expected: ["one", "jim", 5, "messy", "tip", 15, "random", 19],
    },
  ].forEach(({ input, expected }) =>
    it("returns a copy of the original array for arrays with no duplicates", () =>
      expect(dedupe(input)).toEqual(expected))
  );
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
describe("removing duplicate values but keeping the first occurance of each element", () => {
  [
    {
      input: [1, 2, 2, "cat", "dog", 9, "man", "cat"],
      expected: [1, 2, "cat", "dog", 9, "man"],
    },
    {
      input: ["ben", "two", "two", 2, "shine", "count", 9, "man"],
      expected: ["ben", "two", 2, "shine", "count", 9, "man"],
    },
    {
      input: ["ben", "two", "ben", 2, "ben", "ben", 2, "man", 2],
      expected: ["ben", "two", 2, "man"],
    },
  ].forEach(({ input, expected }) =>
    it("removes any duplicate values from the array, keeping the first instance of each element", () =>
      expect(dedupe(input)).toEqual(expected))
  );
});
