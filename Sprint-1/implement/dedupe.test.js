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
describe("dedupe_test", () => {
    test("given an empty array, it returns an empty array", () => {
        expect(dedupe([])).toEqual([]);
    });

    test("given an array with no duplicate, it returns copy of original array", () => {
        expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("given an array with duplicates, it returns an array with no duplicate", () => {
        expect(dedupe([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    test("!!!", () => {
        expect(dedupe(["apple", 1, 3, 1])).toEqual(["apple", 1, 3])
    });
    
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array 

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
