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
test(`should return an empty object, when input is empty array`, () => {
  const arr = [];
  const obj = {};
  expect(tally(arr)).toEqual(obj);
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test(`should return counts for each unique item, if given array contain duplicates`, () => {
  const arr = [`a`, `c`, `a`, `g`, `g`];
  const obj = { a: 2, c: 1, g: 2 };
  expect(tally(arr)).toEqual(obj);
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test(`should throw an error if given input is not an array`, () => {
  const str = `London`;
  const message = `Invalid input!`;
  expect(() => tally(str)).toThrow(message);
});
