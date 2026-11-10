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

test("given [1, 2, 6], returns 3", () => {
  expect(calculateMean([1, 2, 6])).toEqual(3);
});

test("given array with single number, return that number", () => {
  expect(calculateMean([5])).toEqual(5);
});

test("given an array with positive and negative numbers, return the correct mean", () => {
  expect(calculateMean([5, 8, -2, 7, -9])).toBeCloseTo(1.8);
});

test("given an empty array, throw an error", () => {
  expect(() => calculateMean([])).toThrow(
    "calculateMean requires a non-empty array"
  );
});

test("given something that isn't an array, throw an error", () => {
  expect(() => calculateMean("banana")).toThrow(
    "calculateMean requires an array of numbers"
  );
});

test("given no argument, throw an error", () => {
  expect(() => calculateMean()).toThrow(
    "calculateMean requires an array of numbers"
  );
});

test("given an array with non-number values, throw an error", () => {
  expect(() => calculateMean([1, 5, 9, "hello", 4])).toThrow(
    "calculateMean requires an array of numbers"
  );
});
