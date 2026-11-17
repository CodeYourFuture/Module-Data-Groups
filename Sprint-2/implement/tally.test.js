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
test("tally returns an object containing the count for each unique item", () => {
  expect(tally(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally returns counts for each unique item", () => {
  expect(tally(["o", "o", "l", "m", "m", "m"])).toEqual({ o: 2, l: 1, m: 3 });
});

// Given an invalid input like a string, a number, or no argument at all
// When passed to tally
// Then it should throw Error("tally requires an array")
test("tally throws an error if passed a string", () => {
  expect(() => tally("nothing")).toThrow(new Error("tally requires an array"));
});

test("tally throws an error if passed a number", () => {
  expect(() => tally(7)).toThrow(new Error("tally requires an array"));
});

test("tally throws an error if not passed anything", () => {
  expect(() => tally()).toThrow(new Error("tally requires an array"));
});
