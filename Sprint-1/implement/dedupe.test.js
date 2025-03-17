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
test("Given an empty array", () => {
    const result = dedupe([]);
    expect(result).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("Given an array with no duplicates", () => {
    const result = dedupe([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("Given an array with strings or numbers", () => {
    const result = dedupe(['a', 'a', 'a', 'b', 'b', 'c']);
    expect(result).toEqual(['a', 'b', 'c']);
});

test("Given an array with mixed types", () => {
    const result = dedupe([5, 1, 1, 2, 3, 2, 5, 8]);
    expect(result).toEqual([5, 1, 2, 3, 8]);
});