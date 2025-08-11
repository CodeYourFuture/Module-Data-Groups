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


test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
});


test("tally on an array with duplicates returns counts for each unique item", () => {
  expect(tally(['yes', 'no', 'maybe', 'yes', 'maybe', 'yes', 'no', 'yes'])).toEqual({ yes: 4, no: 2, maybe: 2 });
});


test("tally on an invalid input throws an error", () => {
    expect(() => tally("abc")).toThrow("Invalid input");
});