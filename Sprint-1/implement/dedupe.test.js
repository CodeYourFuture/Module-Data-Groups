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
describe('dedupe function' , () => {
test("given an empty array, it returns an empty array", ()=>{
expect(dedupe([])).toEqual([])
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test('array with no duplicates should return a copy of the original array',() => {
expect(dedupe([1,3,6])).toEqual([1,3,6]);
});
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test('array with strings or numbers should remove the duplicate values, preserving the first occurence of each element', () => {
expect(dedupe(['a','k','k','c','c'])).toEqual(['a','k','c']);
expect(dedupe([1,1,1,3,4,4,])).toEqual([1,3,4,])
});
});