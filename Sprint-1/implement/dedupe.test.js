const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']

E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/
test("Should deduplicate 'a','a','a','b','b','c' ", () => {
  const arr = ["a", "a", "a", "b", "b", "c"];
  const answer = dedupe(arr);
  expect(answer).toEqual(["a", "b", "c"]);
});
// Acceptance Criteria:
test("Should deduplicate 1, 2, 1 ", () => {
  const arr = [5, 1, 1, 2, 3, 2, 5, 8];
  const answer = dedupe(arr);
  expect(answer).toEqual([5, 1, 2, 3, 8]);
});

test("Should deduplicate 'a','a','a','b','b','c' ", () => {
  const arr = [1, 2, 1];
  const answer = dedupe(arr);
  expect(answer).toEqual([1, 2]);
});
// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", () => {
  const arr = [];
  const answer = dedupe(arr);
  expect(answer).toEqual([]);
});
// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("Given an array with no duplicates the function should return the original array", () => {
  const arr = ["a", "b", "c", "d", "e"];
  const answer = dedupe(arr);
  expect(answer).toEqual(arr);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("Given an array with strings and numbers, should remove the duplicate values preserving the first occurance of each element", () => {
  const arr = ["a", 1, "b", 1, "c", "a"];
  const answer = dedupe(arr);
  expect(answer).toEqual(["a", 1, "b", "c"]);
});
