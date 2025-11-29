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
    const input = [];
    const result = dedupe(input);

    expect(result).toEqual([]);
    expect(result).not.toBe(input);  
});

// Given an array with no duplicates
// when passed to the dedupe function
// Then should return a copy of the original array 
test("given an array with no duplicates, it returns a copy of the original array", () => {
    const input = [1, 2, 3];
    const result = dedupe(input);

    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(input);   
});

// Given an array with strings or numbers
// when passed to the dedupe function
// Then it returns a new array that removes duplicates preserving the first occurrence.
test("given an array with strings or numbers, removes duplicates preserving the first occurrence", () => {
    const cases = [
        { input: ['a','a','a','b','b','c'], expected: ['a','b','c'] },
        { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
        { input: [1, 2, 1], expected: [1, 2] }
    ];

    cases.forEach(({ input, expected }) => {
        const result = dedupe(input);

        expect(result).toEqual(expected);
        expect(result).not.toBe(input);   
    });
});
