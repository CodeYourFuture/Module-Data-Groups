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
test.todo("when passed an array of items, it returns an object with counts for each unique item");
test("when passed an array of items, it returns an object with counts for each unique item", () => {
    const input = ['a', 'a', 'b', 'c'];
    const expectedOutput = { a: 2, b: 1, c: 1 };
    expect(tally(input)).toEqual(expectedOutput);
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");
test("tally on an empty array returns an empty object", () => {
    const input = [];
    const expectedOutput = {};
    expect(tally(input)).toEqual(expectedOutput);
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test.todo("tally counts each unique item in an array with duplicates");
test("tally counts each unique item in an array with duplicates", () => {
    const input = ['x', 'y', 'x', 'z', 'y', 'x'];
    const expectedOutput = { x: 3, y: 2, z: 1 };
    expect(tally(input)).toEqual(expectedOutput);
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test.todo("tally throws an error when passed invalid input");
test("tally throws an error when passed invalid input", () => {
    const input = "invalid input";
    expect(() => tally(input)).toThrow("Input must be an array");
});
