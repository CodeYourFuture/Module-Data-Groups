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
    const count = [];
  expect(tally([])).toEqual({})  
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("An array with duplicate items should return counts for each unique item", () => {
    const count  = ["h", "e", "l", "l", "o",];
    const expectedOutput = {h: 1, e: 1, l: 2, o: 1 };
  
    expect(tally(count)).toEqual(expectedOutput);
  });

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("An array with invalid input should throw an error", () => {
    const count  = ["hello", "hey", "hey", "hello", "hello", "hi"];
    const expectedOutput = {hello: 3, hey: 2, hi: 1 };
  
    expect(tally(count)).toEqual(expectedOutput);
  });


