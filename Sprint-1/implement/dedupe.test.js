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

test("return an empty array for an empty array", () => {
    expect(dedupe([])).toEqual([]);
})

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

test("if no duplicates, return the copy of the original array", () => {
    expect(dedupe([1, 3, 5, 7])).toEqual([1, 3, 5, 7]);
})

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

test("an array with strings strings or numbers", () => {
    expect(dedupe([2, 2, 3, 3, 3, "Black", "Black", "Black", "Green"])).toEqual([2, 3, "Black", "Green"]);
})
