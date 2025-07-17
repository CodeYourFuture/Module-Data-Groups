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
test(`when tally is passed an array of items, if should return an object containing the count for each unique item`, () => {
    arr = ['a', 'b', 'c'];
    targetOutput = {a : 1, b: 1, c: 1};
    expect(tally(arr)).toEqual(targetOutput);
})

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
    emptyArr = [];
    expect(tally(emptyArr)).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test(`when tally is passed an array of items, if should return an object containing the count for each unique item`, () => {
    arr = ['a', 'a', 'a', 'b', 'b', 'c'];
    targetOutput = {a : 3, b: 2, c: 1};
    expect(tally(arr)).toEqual(targetOutput);
})

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error(
// This already throws a TypeError without adding extra code, but the explanation it gives might not be helpful if someone couldn't see the code for the tally function. 
test(`when tally is passed invalid input like a string, it should throw an error`, () => {
    invalidInput = 'snowlover';
    expect(()=>{tally(invalidInput)}).toThrow();
})
