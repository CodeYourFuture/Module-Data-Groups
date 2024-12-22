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

// ---------------------------------------------------------------------------------------------
// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

test("An array without duplicates, should return a copy of the original array", () => {
    expect(dedupe([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(dedupe(["a", "b", "pooriya", "Hello"])).toEqual(["a", "b", "pooriya", "Hello"]);
});

// ---------------------------------------------------------------------------------------------
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element

test("An array with str & num, should remove the duplicate values and return preserving the first occurrence of each element", () => {
    expect(dedupe(["a", "a", "d", "b", "c", "d", "e", "c"])).toEqual(["a", "d", "b", "c", "e"]);
    expect(dedupe([3, 2, 2, 5, 4, 7, 5, 3])).toEqual([3, 2, 5, 4, 7])
});