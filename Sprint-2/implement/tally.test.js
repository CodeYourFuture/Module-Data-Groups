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


// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

// Test suite for the tally function
describe("tally function", () => {
  test("tally on an array of items returns counts for each unique item", () => {
    const items = ["a", "b", "a", "c", "b"];
    const expectedOutput = { a: 2, b: 2, c: 1 };
    expect(tally(items)).toEqual(expectedOutput);
  });

  test("tally on an empty array returns an empty object", () => {
    const items = [];
    const expectedOutput = {};
    expect(tally(items)).toEqual(expectedOutput);
  });

  test("tally on an array with duplicate items counts each unique item", () => {
    const items = ["apple", "banana", "apple", "apple", "banana", "cherry"];
    const expectedOutput = { apple: 3, banana: 2, cherry: 1 };
    expect(tally(items)).toEqual(expectedOutput);
  });

  test("throws an error when input is a string", () => {
        expect(() => tally("not an array")).toThrow("Input needs to be an array");
   });

});

