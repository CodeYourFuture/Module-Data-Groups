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
test("if receive an empty array should return an empty ", () => {
  const currentOutput = dedupe([]);
  const targetOutput = [];

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("the functions should remove the duplicated characters and return it inside a new array ", () => {
  const currentOutput = dedupe([1, 2]);
  const targetOutput = [1, 2];

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
test("the functions should remove the duplicated characters and return it inside a new array ", () => {
  const currentOutput = dedupe(['a','a','a','b','b','c']);
  const targetOutput = ['a','b','c'];

  expect(currentOutput).toEqual(targetOutput);
});

test("the functions should remove the duplicated characters and return it inside a new array ", () => {
  const currentOutput = dedupe([5, 1, 1, 2, 3, 2, 5, 8]);
  const targetOutput = [5, 1, 2, 3, 8];

  expect(currentOutput).toEqual(targetOutput);
});

test("the functions should remove the duplicated characters and return it inside a new array ", () => {
  const currentOutput = dedupe([1, 2, 1]);
  const targetOutput = [1, 2];

  expect(currentOutput).toEqual(targetOutput);
});