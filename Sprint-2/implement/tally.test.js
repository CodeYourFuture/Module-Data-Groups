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
    expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

test("tally on an array with duplicate items returns the counts for each uniqe item", () => {
    const input = ['a', 'a', 'b', 'c'];
    const givenInput = tally(input);
    const targetOutput = { a : 2, b: 1, c: 1 };

    expect(givenInput).toEqual(targetOutput);
})

test("tally on an array with duplicate items returns the counts for each uniqe item", () => {
    const input = ['a', 'a', 'bx', 'bx', 'b', 'b', 'b', 'b', 'c'];
    const givenInput = tally(input);
    const targetOutput = { a : 2, bx: 2, b: 4, c: 1 };

    expect(givenInput).toEqual(targetOutput);
})

test("tally on ", () => {
    const input = ["toString", "toString"];
    const givenInput = tally(input);
    const targetOutput = {toString: 2};

    expect(givenInput).toEqual(targetOutput);
})

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("tall on invalid input throws an error", () => {
    expect(() => tally("I am a string")).toThrow();
    expect(() => tally(777)).toThrow();
    expect(() => tally(true)).toThrow();
    expect(() => tally(undefined)).toThrow();
    expect(() => tally(null)).toThrow();
})
