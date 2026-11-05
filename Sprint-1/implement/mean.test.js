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

test("Given an array of numbers, should return their mean", () => {
  expect(calculateMean([3, 7, 50,40])).toEqual(25);
});

// Given an array with a single number
// When passed to calculateMean
// Then it should return that number
test("Given an array with a single number, should return that number", () => {
  expect(calculateMean([10])).toEqual(10);
});

// Given an array containing negative or decimal numbers
// When passed to calculateMean
// Then it should return the correct mean
test("Given an array containing negative numbers, should return the correct mean", () => {
  expect(calculateMean([-3, -50, -7, -40])).toEqual(-25);
});

test("Given an array containing decimal numbers, should return the correct mean", () => {
  expect(calculateMean([2.2, 1.9, 3.5, 4.1])).toBeCloseTo(2.925);
});

test("Given an array containing both negative and decimal numbers, should return the correct mean", () => {
  expect(calculateMean([2.2, -1.9, 3.5, -4.1])).toBeCloseTo(-0.075);
});

// Given an empty array
// When passed to calculateMean
// Then it should throw Error("calculateMean requires a non-empty array")
test("Throws an error when given an empty array", () => {
  expect(() => calculateMean([])).toThrow(
    new Error("calculateMean requires a non-empty array")
  );
});

// Given a value that isn't an array, e.g. "banana", 42, null or {}
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")
test("Throws an error when given a value that isn't an array", () => {
  expect(() => calculateMean(["banana"])).toThrow(
    new Error("calculateMean requires an array of numbers")
  );
});

// Given no argument at all
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")
test("Throws an error when given no argument at all", () => {
  expect(() => calculateMean()).toThrow(
    new Error("calculateMean requires an array of numbers")
  );
});

// Given an array containing a non-number value, e.g. [1, "2", 3]
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")
test("Throws an error when given an array containing a non-number value", () => {
  expect(() => calculateMean([1, "2", 3])).toThrow(
    new Error("calculateMean requires an array of numbers")
  );
});

test("Throws an error when array contains Infinity or -Infinity", () => {
  expect(() => calculateMean([Infinity, 0, -Infinity])).toThrow(
    new Error("calculateMean requires an array of numbers")
  );
});

test("Throws an error when array contains NaN", () => {
  expect(() => calculateMean([0, NaN])).toThrow(
    new Error("calculateMean requires an array of numbers")
  );
});
