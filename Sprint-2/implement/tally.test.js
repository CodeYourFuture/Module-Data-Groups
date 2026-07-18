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

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with one item
// When passed to tally
// Then it should return the item with a count of 1
test("tally counts a single item", () => {
  expect(tally(["a"])).toEqual({
    a: 1,
  });
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally counts duplicate items", () => {
  expect(tally(["a", "a", "a"])).toEqual({
    a: 3,
  });
});

// Given an array with multiple unique items
// When passed to tally
// Then it should return the count for each item
test("tally counts multiple different items", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({
    a: 2,
    b: 1,
    c: 1,
  });
});

// Given an array with numbers
// When passed to tally
// Then it should count numbers correctly
test("tally counts numbers", () => {
  expect(tally([1, 1, 2, 3, 3])).toEqual({
    1: 2,
    2: 1,
    3: 2,
  });
});

// Given an array with mixed strings
// When passed to tally
// Then it should count each string correctly
test("tally counts different strings", () => {
  expect(tally(["cat", "dog", "cat", "bird"])).toEqual({
    cat: 2,
    dog: 1,
    bird: 1,
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally throws an error for invalid input", () => {
  expect(() => tally("hello")).toThrow();
});

// Given null as input
// When passed to tally
// Then it should throw an error
test("tally throws an error for null input", () => {
  expect(() => tally(null)).toThrow();
});

// Given undefined as input
// When passed to tally
// Then it should throw an error
test("tally throws an error for undefined input", () => {
  expect(() => tally(undefined)).toThrow();
});
