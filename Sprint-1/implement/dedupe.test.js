const {dedupe} = require("./dedupe.js");
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
// Then it should remove the duplicate values, preserving the first occurrence of each element

describe("dedupe", () => {
    [
        { input: ['a','a','a','b','b','c'], expected:['a','b','c']},
        { input: [5, 1, 1, 2, 3, 2, 5, 8], expected:[5, 1, 2, 3, 8]},
        { input: [1, 2, 1], expected:[1, 2]},
        { input: [], expected:[]},
    ].forEach(({input, expected}) =>
        it(`return dedupe list for [${input}]`,()=> expect(dedupe(input)).toEqual(expected))
    );
    [
        { input: [], expected:[]},
    ].forEach(({input, expected}) =>
        it(`return empty array for [${input}]`,()=> expect(dedupe(input)).toEqual(expected))
    );
    [
        { input: [1,4,6,9], expected:[1,4,6,9]},
    ].forEach(({input, expected}) =>
        it(`return copy of the original with no duplicates in array> [${input}]`,()=> expect(dedupe(input)).toEqual(expected))
    );
    [
        { input: [1,'a',0,'g',1,9,'e',2,1,'k',1,3,'a'], expected:[1,'a',0,'g',9,'e',2,'k',3]},
    ].forEach(({input, expected}) =>
        it(`String and numbers in an array: [${input}]`,()=> expect(dedupe(input)).toEqual(expected))
    );
}
);

