const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

describe("dedupe", () => {

    test("given an empty array, it returns an empty array", () => {

        expect(dedupe([])).toEqual([]);
    });

    test("Given an array with no duplicates, it should return a copy of the original array", () => {

        expect(dedupe([5, 1, 2, 3, 8])).toEqual([5, 1, 2, 3, 8]);
    });

    test("Given an array with strings, it should remove the duplicate values", () => {

        expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test("Given an array with numbers, it should remove the duplicate values", () => {

        expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    });

});


// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array


// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
