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
describe("Dedupe", () => {
    it("returns an empty array when it given an empty array", () => {
        expect(dedupe([])).toEqual([]);
    });
    [
        { input: [10, 12, 13], expected: [10, 12, 13] },
        {
            input: ["a", "b", "keke", 1, 21, 3],
            expected: ["a", "b", "keke", 1, 21, 3],
        },
        { input: [null, undefined, 1, 3], expected: [null, undefined, 1, 3] },
    ].forEach(({ input, expected }) =>
        it(`returns a copy of the original array when given an array with no duplicates, for [${input}]`, () =>
            expect(dedupe(input)).toEqual(expected))
    );
    [
        { input: [10, 12, 10, 13], expected: [10, 12, 13] },
        { input: [1, "a", "a", "b", 1, 1, "a"], expected: [1, "a", "b"] },
        {
            input: [null, undefined, 1, 3, 1, 1, 1, 1],
            expected: [null, undefined, 1, 3],
        },
    ].forEach(({ input, expected }) => {
        it(`remove duplicates from [${input}]`, () => expect(dedupe(input)).toEqual(expected));
    });
    it("treats different types separately", () => {
        expect(dedupe([1, "1", true, "true", false, 0])).toEqual([1, "1", true, "true", false, 0]);
    });
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
