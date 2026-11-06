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
test("tally on an empty array returns an empty object", () => {
    const input = [];
    const result = tally(input);
    expect(result).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("given array with duplicate items, return object with counts for each unique item", () => {
    const input = ['a', 'a', 'b', 'c', 'c', 'c'];
    const result = tally(input);
    expect(result).toEqual({a: 2, b: 1, c: 3})
})

// Given an invalid input like a string, a number, or no argument at all
// When passed to tally
// Then it should throw Error("tally requires an array")
test("given invalid input (str, num, no arg), throw error: 'tally requires an array'", () => {
    expect(() => tally('meaf')).toThrow('tally requires an array')
})