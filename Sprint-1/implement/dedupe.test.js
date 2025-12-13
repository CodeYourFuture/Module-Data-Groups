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
    const currentOutput = dedupe([]);
    const targetOutput = [];

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

test("Given an array with no duplicates, it returns an the same array", () => {
    const input = [1,4,6,"d","a","x","e",0,7,8];
    const currentOutput = dedupe(input);
    const targetOutput = [1,4,6,"d","a","x","e",0,7,8];

    expect(currentOutput).toEqual(targetOutput);
});

test("The copy must not be the very same array in memory", () => {
    const input = [3, 1, 2];
    const currentOutput = dedupe(input);

    expect(currentOutput).toEqual([3, 1, 2]);
    expect(currentOutput).not.toBe(input); // make sure the function returns a copy
});
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element

test("Given an array with strings or numbers, it returns an the array whit no duplicated elements", () => {
    const currentOutput = dedupe(['a','a','a','b','b','c']);
    const targetOutput = ['a','b','c'];

    expect(currentOutput).toEqual(targetOutput);
});
