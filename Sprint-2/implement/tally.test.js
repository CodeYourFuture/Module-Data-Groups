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

// Given an invalid input like a string, a number, or no argument at all
// When passed to tally
// Then it should throw Error("tally requires an array")

test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

test("tally on an array with one item counts it once", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});

test("tally on an array with duplicates counts each unique item", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

test("throws when given a string", () => {
  expect(() => tally("hello")).toThrow(new Error("tally requires an array"));
});

test("throws when given a number", () => {
  expect(() => tally(42)).toThrow(new Error("tally requires an array"));
});

test("throws when called with no argument", () => {
  expect(() => tally()).toThrow(new Error("tally requires an array"));
});
