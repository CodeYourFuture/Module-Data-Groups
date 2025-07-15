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

test("tally returns counts for each unique item", () => {
  const items = ['a', 'b', 'a', 'c', 'b', 'a'];
  const expectedOutput = { a: 3, b: 2, c: 1 };
  expect(tally(items)).toEqual(expectedOutput);
});
// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally returns empty object for empty array", () => {
  const items