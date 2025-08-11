/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

const dedupe = require("./dedupe.js");
describe("dedupe", () => {

 test('given an empty array, it returns an empty array', () => {
        expect(dedupe([])).toEqual([]);
    });


 test('given an array with no duplicates, it should return a copy of the original array', () => {
        expect(dedupe([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2, 1]);
    });


 test('given an array with strings or numbers, it should remove the duplicate values, preserving the first occurence of each element', () => {
        expect(dedupe([1, "1", 2, 1, "apple", "1", "apple", 3])).toEqual([1, "1", 2, "apple", 3]);
    });
});