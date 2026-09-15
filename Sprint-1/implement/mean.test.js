/* Calculate the mean of an array of numbers

In this kata, you will need to implement a function that calculates the mean of an array of numbers.

E.g. calculateMean([1, 2, 6]), target output: 3
E.g. calculateMean([]) throws Error("calculateMean requires a non-empty array")
E.g. calculateMean("banana") throws Error("calculateMean requires an array of numbers")

There is no mean of an empty array, and a string isn't an array of numbers, so
calculateMean should throw rather than return a value. This is the same problem
calculateMedian solves in the prep and in the fix directory.

You should implement this function in mean.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const calculateMean = require("./mean.js");

// Acceptance criteria:

// Given an array of numbers
// When passed to calculateMean
// Then it should return their mean
test("given [1, 2, 6], returns 3", () => {
  expect(calculateMean([1, 2, 6])).toBe(3);
});

// Given an array with a single number
// When passed to calculateMean
// Then it should return that number
test("given [5], returns 5", () => {
  expect(calculateMean([5])).toBe(5);
});

// Given an array containing negative or decimal numbers
// When passed to calculateMean
// Then it should return the correct mean
test("given negative and decimal numbers, returns the correct mean", () => {
  expect(calculateMean([-2.5, 1.5, 4])).toBe(1);
});

// Given an empty array
// When passed to calculateMean
// Then it should throw Error("calculateMean requires a non-empty array")
test("given an empty array, throws the correct error", () => {
  expect(() => calculateMean([])).toThrow(
    "calculateMean requires a non-empty array"
  );
});

// Given a value that isn't an array, e.g. "banana", 42, null or {}
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")
test("given a non-array value, throws the correct error", () => {
  expect(() => calculateMean("banana")).toThrow(
    "calculateMean requires an array of numbers"
  );

  expect(() => calculateMean(42)).toThrow(
    "calculateMean requires an array of numbers"
  );

  expect(() => calculateMean(null)).toThrow(
    "calculateMean requires an array of numbers"
  );

  expect(() => calculateMean({})).toThrow(
    "calculateMean requires an array of numbers"
  );
});

// Given no argument at all
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")
test("given no argument, throws the correct error", () => {
  expect(() => calculateMean()).toThrow(
    "calculateMean requires an array of numbers"
  );
});

// Given an array containing a non-number value, e.g. [1, "2", 3]
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")
test("given an array containing a non-number, throws the correct error", () => {
  expect(() => calculateMean([1, "2", 3])).toThrow(
    "calculateMean requires an array of numbers"
  );
});
