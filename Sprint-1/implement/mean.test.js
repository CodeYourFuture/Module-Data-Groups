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
// Delete this test.todo and replace it with a test.

test("returns calculated mean when given array of numbers", () => {
  expect(calculateMean([1, 2, 6])).toEqual(3);
});

// Given an array with a single number
// When passed to calculateMean
// Then it should return that number
test("returns calculated mean when given array of numbers", () => {
  expect(calculateMean([1])).toEqual(1);
  expect(calculateMean([10])).toEqual(10);
});

// Given an array containing negative or decimal numbers
// When passed to calculateMean
// Then it should return the correct mean
test("returns calculated mean when given array of +ve and -ve numbers and decimal numbers are given", () => {
  expect(calculateMean([5, -2, -3, 4])).toEqual(1);
  expect(calculateMean([-2, -1, 5])).toEqual(0.6666666666666666);
  expect(calculateMean([1.5, 2.4, 5.6])).toEqual(3.1666666666666665);
});

// Given an empty array
// When passed to calculateMean
// Then it should throw Error("calculateMean requires a non-empty array")
test("returns an error when given an empty array", () => {
  expect(() => calculateMean([])).toThrow(
    "calculateMean requires a non-empty array"
  );
});

// Given a value that isn't an array, e.g. "banana", 42, null or {}
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")
test("throws an error when given an empty array", () => {
  expect(() => calculateMean("banana")).toThrow(
    "calculateMean requires an array of numbers"
  );
});
test("throws an error when given a number", () => {
  expect(() => calculateMean(42)).toThrow(
    "calculateMean requires an array of numbers"
  );
});
test("throws an error when given a null", () => {
  expect(() => calculateMean(null)).toThrow(
    "calculateMean requires an array of numbers"
  );
});
// Given no argument at all
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")

// Given an array containing a non-number value, e.g. [1, "2", 3]
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")
