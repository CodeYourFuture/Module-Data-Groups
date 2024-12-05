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
describe ("dedupe",() => {
test ("given an empty array, it returns an empty array", () => {
  const result =dedupe([]);
  expect(result).toStrictEqual([]);
});


test ("Given an array with no duplicates,it should return a copy of the original array", () => {
  expect(dedupe([])).toStrictEqual([]);;
  expect (dedupe (["a", "b", "c"]).toStrictEqual(["a", "b", "c"]));
});
test("given an array with duplicates, it removes the duplicate values, preserving the first occurrence of each element", () => {
    expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toStrictEqual(['a', 'b', 'c']);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toStrictEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toStrictEqual([1, 2]);
  });
});