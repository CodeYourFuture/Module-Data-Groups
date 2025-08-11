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

// Test 1: Given an empty array, it should return an empty array
test("given an empty array, it returns an empty array", () => {
    const result = dedupe([]);
    expect(result).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Test 2: Given an array with no duplicates, it should return the original array (copy)
test("given an array with no duplicates, it should return the same array", () => {
    const result = dedupe(['a', 'b', 'c']);
    expect(result).toEqual(['a', 'b', 'c']);
});


// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

// Test 3: Given an array with duplicates, it should return an array with duplicates removed
test("given an array with duplicates, it should return an array without duplicates", () => {
    const result = dedupe(['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd']);
    expect(result).toEqual(['a', 'b', 'c', 'd']);
});


// Test 4: Given an array with numbers, it should return an array without duplicates
test('should return an array without duplicates for numbers', () => {
    const result = dedupe([5, 1, 1, 2, 3, 2, 5, 8]);
    expect(result).toEqual([5, 1, 2, 3, 8]);
});

// Test 5: Given an array with mixed types, it should return an array without duplicates
test('should handle mixed types and remove duplicates', () => {
    const result = dedupe([1, 'a', 1, 'b', 'a']);
    expect(result).toEqual([1, 'a', 'b']);
});