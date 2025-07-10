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
describe('tally function tests', () => {

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test('When passed an array of item, then it should return an object containing the count for each unique item',() =>{
    expect(tally(['a','o,','h'])).toEqual({a:1, o:1,h:1})
})
// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object",() => {
    expect(tally([])).toEqual({})
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test(' Given an array with duplicate item, should return counts for each unique item',() =>{
    expect(tally(['a','o,','o'])).toEqual({a:1, o:2})
})
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test('  Given an invalid input like a string, should throw an error',() =>{
    expect(() => tally('Hello World')).toThrow('Error: Parameter must be an array.')

})
})