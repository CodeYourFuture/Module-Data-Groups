

const dedupe = require("./dedupe.js");

describe("dedupe()", () => {
    // Acceptance Criteria 1
    test("given an empty array, it returns an empty array", () => {
        expect(dedupe([])).toEqual([]);
    });

    // Acceptance Criteria 2
    test("given an array with no duplicates, it returns a copy of the original array", () => {
        const input = [1, 2, 3, "a", "b"];
        const result = dedupe(input);
        expect(result).toEqual(input);
        // Ensure it's a new reference (a copy)
        expect(result).not.toBe(input);
    });

    // Acceptance Criteria 3 & 4: Numbers
    test("it should remove duplicate numbers and preserve first occurrence order", () => {
        expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
        expect(dedupe([1, 2, 1])).toEqual([1, 2]);
    });

    // Acceptance Criteria 3 & 4: Strings
    test("it should remove duplicate strings and preserve first occurrence order", () => {
        expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    // Mixed types edge case
    test("it should handle mixed strings and numbers correctly", () => {
        expect(dedupe([1, "1", 1, "a", "a"])).toEqual([1, "1", "a"]);
    });
});



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
//test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
