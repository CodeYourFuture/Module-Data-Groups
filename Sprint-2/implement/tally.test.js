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
 * tally(['a', 'a', 'b', 'c']), target output: { a: 2, b: 1, c: 1 }
 */

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

test("returns the count for one item", () => {
  expect(tally(["a"])).toEqual({
    a: 1,
  });
});

test("returns the correct count for duplicate items", () => {
  expect(tally(["a", "a", "a"])).toEqual({
    a: 3,
  });
});

test("returns the correct count for multiple unique items", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({
    a: 2,
    b: 1,
    c: 1,
  });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object

test("returns an empty object when given an empty array", () => {
  expect(tally([])).toEqual({});
});

// Given an invalid input like a string, a number, or no argument at all
// When passed to tally
// Then it should throw Error("tally requires an array")

test("throws an error when given a string", () => {
  expect(() => tally("hello")).toThrow(new Error("tally requires an array"));
});

test("throws an error when given a number", () => {
  expect(() => tally(42)).toThrow(new Error("tally requires an array"));
});

test("throws an error when given no argument", () => {
  expect(() => tally()).toThrow(new Error("tally requires an array"));
});
