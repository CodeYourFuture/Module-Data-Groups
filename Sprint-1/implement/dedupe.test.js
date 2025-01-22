const dedupe = require("./dedupe.js");

/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']

E.g. dedupe([1, 2, 1]) target output: [1, 2]

*/
// let input = [5, 1, 1, 2, 3, 2, 5, 8];
// let target = [5, 1, 2, 3, 8]


describe("dedupe", () => {

    test("returns an empty array when given an empty array", () => {
        expect(dedupe([])).toEqual([]);
    });
    
    test("returns an array with unique elements when the input contains repeated values", () => {
        expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    });
    
    test("returns the original array when the input contains no repeated values", () => {
        expect(dedupe([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
    
    test("returns an array with unique elements when the input contains both numbers and strings, with duplicates", () => {
        expect(dedupe([1, 'g', 7, 2, 'r', 'g', 3, 4, 'q'])).toEqual([1, 'g', 7, 2, 'r', 3, 4, 'q']);
    });
    


});



// test('gives a unique string', () => {
//       expect(dedupe(input)).toBe(target);
//     });
// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
// test.todo("given an empty array, it returns an empty array");



// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
