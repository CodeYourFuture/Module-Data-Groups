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
  const items = [];
  expect(tally(items)).toEqual({});
});
// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally returns counts for duplicate items", () => {
  const items = ['x', 'y', 'x', 'z', 'y', 'x'];
  const expectedOutput = { x: 3, y: 2, z: 1 };
  expect(tally(items)).toEqual(expectedOutput);
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally throws error for invalid input", () => {
  expect(() => tally("invalid")).toThrow("Input must be an array");
});

test("tally throws for number input", () => {
    expect(() => tally(123)).toThrow("Input must be an array");
  });
  
  test("tally throws for object input", () => {
    expect(() => tally({ a: 1 })).toThrow("Input must be an array");
  });
  
  test("tally throws for null input", () => {
    expect(() => tally(null)).toThrow("Input must be an array");
  });