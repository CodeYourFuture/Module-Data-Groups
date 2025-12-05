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

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns the same array", () => {
    expect(dedupe([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

// When passed an array
// It should not return the same array reference
test("It returns a new array, not the original", () => {
    const original = [1, 2, 3];
    const result = dedupe(original);
    expect(result).not.toBe(original); // Check that the returned array is not the same reference as the original
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element
test("given an array with duplicates, it removes the duplicates", () => {
    expect(dedupe(['a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
});
