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

    describe("tally()", () => {
        test("Given a tally function passed an array of items, it should return an empty object", () => {
            expect(tally([])).toEqual({});
        });

        test("Given a tally function passed an array of items, it should return an object containing the count for each unique item", () => {
            expect(tally(['a', 'b', 'a', 'c', 'b', 'd'])).toEqual({ a: 2, b: 2, c: 1, d: 1 });
        });

        test("Given an array with duplicate items , it should return counts for each unique item", () => {
            expect(tally(['a', 'a', 'a', 'b', 'b'])).toEqual({ a: 3, b: 2 });
        });

        test("Given an invalid input like a string, it should throw an error", () => {
            expect(() => tally('This is how JavaScript works')).toThrow("Invalid input");
        });
    });

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object


// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
