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
test.todo("given an empty array, it returns an empty array");

it("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
})


// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test.todo("given an array, it returns a copy of the original array");

it("given an array, it returns a copy of the original array", () => {
const input = [1,2,3];
const result = dedupe(input)

  expect(result).toEqual([1,2,3]);
  expect(result).not.toBe(input);
});

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the 
// first occurrence of each element from the original array.

test.todo("given an array, it returns a duplicate while preserving the first occurrence of each element from the original array");

it("given an array, it removes duplicates while preserving the first occurrence of elements", () => {
expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']); 
expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]); 
 expect(dedupe([ 1, 2, 1])).toEqual([1, 2]); 
});
