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
//test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
describe('tally', () => {
    it('should return an empty object for an empty array', () => {
        expect(tally([])).toEqual({});
    });

    it('should count a single item correctly', () => {
        expect(tally(['a'])).toEqual({ a: 1 });
    });

    it('should count multiple occurrences of the same item', () => {
        expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
    });

    it('should count multiple unique items correctly', () => {
        expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
    });

    it('should handle different data types (strings, numbers, booleans)', () => {
        expect(tally(['apple', 1, 'banana', 1, true, 'apple'])).toEqual({ apple: 2, 1: 2, banana: 1, true: 1 });
    });

    it('should handle null and undefined array elements', () => {
        expect(tally([null, undefined, null, 'a'])).toEqual({ null: 2, undefined: 1, a: 1 });
    });

    it('should handle empty string array elements', () => {
        expect(tally(["","","test"])).toEqual({"":2, "test":1})
    }) //here are all the test cases. its just basic

    it('should throw an error for non-array input', () => {
        expect(() => tally("not an array")).toThrow(TypeError);
        expect(() => tally(123)).toThrow(TypeError);
        expect(() => tally(null)).toThrow(TypeError);
        expect(() => tally(undefined)).toThrow(TypeError);
        expect(() => tally({})).toThrow(TypeError); //this took research. we have not thrown errors before.
    });

     //run tests then build the function
     // test run and pass
});
