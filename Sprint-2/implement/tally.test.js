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
test("when an array is passed, it should return an object containing the count for each unique item", () => {
  expect(tally(["banana", "apple", "cherry", "apple", "cherry"])).toEqual({
    banana: 1,
    apple: 2,
    cherry: 2
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
test("should return the count for duplicate items", () => {
  expect(tally(["apple", "apple", "apple", "banana"])).toEqual({
    apple: 3,
    banana: 1
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("should throw an error when passed a string", () => {
  expect(() => tally("apple")).toThrow();
});

// Case: array containing numbers
test("should count occurrences of numbers", () => {
  expect(tally([1, 2, 2, 3, 3, 3])).toEqual({
    1: 1,
    2: 2,
    3: 3
  });
});

// Case: array containing mixed data types
test("should count occurrences of mixed items", () => {
  expect(tally(["apple", 1, "apple", 1, "banana"])).toEqual({
    apple: 2,
    1: 2,
    banana: 1
  });
});