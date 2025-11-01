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
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("Given an array with duplicate item, it should return counts for each unique item", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  expect(tally(["a", "a", "b", "c", "a", "a", "b", "c"])).toEqual({
    a: 4,
    b: 2,
    c: 2,
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
const errorMessage = "Input should be an array";
test("Given a non array input, it should return an error message", () => {
  expect(() => tally({ a: "b" })).toThrow(errorMessage);
  expect(() => tally("a")).toThrow(errorMessage);
  expect(() => tally(123)).toThrow(errorMessage);
  expect(() => tally(null)).toThrow(errorMessage);
  expect(() => tally(undefined)).toThrow(errorMessage);
  expect(() => tally(true)).toThrow(errorMessage);
});

test("Given an array with numbers, it should return counts for each number", () => {
  expect(tally([1, 1, 1])).toEqual({ 1: 3 });
  expect(tally([12, 12, 12])).toEqual({ 12: 3 });
  expect(tally([1, 12, 123])).toEqual({ 1: 1, 12: 1, 123: 1 });
  expect(tally([1, 12, 123, 1, 12, 123])).toEqual({ 1: 2, 12: 2, 123: 2 });
});

test("Given an array with mixed items, it should return counts for each item", () => {
  expect(
    tally(["a", 1, true, null, undefined, "a", 1, true, null, undefined])
  ).toEqual({
    a: 2,
    1: 2,
    true: 2,
    null: 2,
    undefined: 2,
  });
});

test("Given an array with arrays, it should return counts for each item", () => {
  expect(tally([1, [1, 1]])).toEqual({ 1: 3 });
  expect(tally(["a", ["a", "a"]])).toEqual({ a: 3 });
});

test("Given an array with objects, it should return counts for each object", () => {
  expect(
    tally([
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 3 },
    ])
  ).toEqual({ '{"a":1,"b":2,"c":3}': 2 });
});

test("Given an array mixed with arrays and objects, it should return counts for each item", () => {
  expect(
    tally([{ a: 1, b: 2, c: 3 }, "a", { a: 1, b: 2, c: 3 }, ["a", "a"]])
  ).toEqual({ '{"a":1,"b":2,"c":3}': 2, a: 3 });
});
