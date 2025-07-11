const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object
//test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
describe('tally',() =>{
    [
        {input:['a'], expected:{ a: 1 }},
        {input:['a', 'a', 'a'], expected:{ a: 3 }},
        {input:['a', 'a', 'b', 'c'], expected:{ a : 2, b: 1, c: 1 }},
        {input:[], expected:{}},
        {input: 'String', expected: new Error("Input must be array")},
    ].forEach(({input,expected})=>
    it(`return an object containing the count for each unique item for [${input}]`,()=>
    expect(tally(input)).toEqual(expected))
);
});