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

test("tally on an array with unique items returns counts of 1 for each item", () => {
    expect(tally(['a', 'b', 'c'])).toEqual({ a: 1, b: 1, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");

test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
});
// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

test("tally on an array with duplicate items returns counts for each unique item", () => {
    expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
    expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally throws an error when input is not an array", () => {
    expect(() => tally("serna is coding")).toThrow("The input you provided is not an array");
    expect(() => tally(123)).toThrow("The input you provided is not an array");
});