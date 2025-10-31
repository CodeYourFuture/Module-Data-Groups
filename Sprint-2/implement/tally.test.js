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
test("tally returns correct counts for unique items", () => {
    const items = ['apple', 'banana', 'orange'];
    const expected = { apple: 1, banana: 1, orange: 1 };
    expect(tally(items)).toEqual(expected);
});
// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
});
// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally returns correct counts for duplicate items", () => {
    const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    const expected = { apple: 3, banana: 2, orange: 1 };
    expect(tally(items)).toEqual(expected);
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally throws an error for invalid input", () => {
    expect(() => tally("invalid")).toThrowError("Invalid input");
    expect(() => tally(123)).toThrowError("Invalid input");
    expect(() => tally({})).toThrowError("Invalid input");
    expect(() => tally(null)).toThrowError("Invalid input");
    expect(() => tally(undefined)).toThrowError("Invalid input");
});
