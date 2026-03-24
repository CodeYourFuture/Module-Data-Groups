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
test("returns count 1 for a single item", () => {
  const arr = ["a"];
  expect(tally(arr)).toEqual({ a: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("returns an empty object when given an empty array", () => {
  const arr = [];
  expect(tally(arr)).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("returns counts for each unique item for given duplicate items ", () => {
  const arr = ["a", "a", "b", "c"];
  expect(tally(arr)).toEqual({ a: 2, b: 1, c: 1 });
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("it throw an error if given a string", () => {
  const str = "a";
  expect(() => tally(str)).toThrowError();
});
// ===> new tests after feedback;
// Invalid input: number
test("it throw an error if given a number", () => {
  let num = 123;
  expect(() => tally(num)).toThrowError();
});

// Invalid input: null
test("it throw an error if given null", () => {
  let value = null;
  expect(() => tally(value)).toThrowError();
});

// Invalid input: undefined
test("it throw an error if given undefined", () => {
  let value = undefined;
  expect(() => tally(value)).toThrowError();
});

// Invalid input: boolean
test("it throw an error if given a boolean", () => {
  let value = true;
  expect(() => tally(value)).toThrowError();
});

// Invalid input: object
test("it throw an error if given an object instead of array", () => {
  let obj = { a: 1 };
  expect(() => tally(obj)).toThrowError();
});
