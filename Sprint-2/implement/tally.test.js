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
test("when given an array of items, should return object with count of each duplicate items", () => {
  expect(tally(["b", "a", "b"])).toEqual({
    a: 1,
    b: 2,
  });
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
test("given an array with duplicate items, should return counts for each unique item", () => {
  expect(tally(["a", "a", "a"])).toEqual({
    a: 3,
  });
});

// Given an invalid input like a string, a number, or no argument at all
// When passed to tally
// Then it should throw Error("tally requires an array")
test("given an invalid input like string, number or no argument at all, should throw error('tally requires an array')", () => {
  expect(() => tally("string")).toThrow(/^tally requires an array$/);
  expect(() => tally(331)).toThrow(/^tally requires an array$/);
  expect(() => tally()).toThrow(/^tally requires an array$/);
  expect(() => tally({})).toThrow(/^tally requires an array$/);
  expect(() => tally({ a: 3, b: 5 })).toThrow(/^tally requires an array$/);
});
