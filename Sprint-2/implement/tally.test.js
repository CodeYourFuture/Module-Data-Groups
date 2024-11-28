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
describe("tally", () => {

    // Given a function called tally
    // When passed an array of items
    // Then it should return an object containing the count for each unique item
    test("given an array of items, return an object containing the count for each unique item", () => {
        expect(tally(['a'])).toStrictEqual({ a: 1 });
        expect(tally(['a', 'a', 'a'])).toStrictEqual({ a: 3 });
    });
    // Given an empty array
    // When passed to tally
    // Then it should return an empty object
    test("tally on an empty array returns an empty object", () => {
        expect(tally(['a'])).toStrictEqual({ a: 1 });
        expect(tally([])).toStrictEqual({});
    });

    // Given an array with duplicate items
    // When passed to tally
    // Then it should return counts for each unique item
    test("given an array with duplicate items, return counts for each unique item", () => {
        expect(tally(['a', 'b', 'a', 'c'])).toStrictEqual({ a: 2, b: 1, c: 1 });
        expect(tally(['a', 'a', 'f', 'a'])).toStrictEqual({ a: 3, f: 1 });
    });

    // Given an invalid input like a string
    // When passed to tally
    // Then it should throw an error

    test("given an invalid input like a string, return error", () => {
        expect(tally("Hello")).toStrictEqual("Error");
        expect(tally(2)).toStrictEqual("Error");
    });

});