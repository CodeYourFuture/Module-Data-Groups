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
//test.tod("given [1, 2, 6], returns 3");

test("Given an array of numbers [1, 2, 6], it should return their mean", () => {
  expect(calculateMean([1, 2, 6])).toBe(3);
});

// Given an array with a single number
// When passed to calculateMean
// Then it should return that number

test("Given an array with a single number [8], it should return that number", () => {
  expect(calculateMean([8])).toBe(8);
});

// Given an array containing negative or decimal numbers
// When passed to calculateMean
// Then it should return the correct mean

test("Given an array containing negative or decimal numbers [11.09, -22, 76,-32], it should return the correct mean", () => {
  expect(calculateMean([11.09, -22, 76, -32])).toBe(8.2725);
});

// Given an empty array
// When passed to calculateMean
// Then it should throw Error("calculateMean requires a non-empty array")

test("Given an empty array, it should throw Error ('calculateMean requires a non-empty array')", () => { 
      expect(()=> calculateMean([])).toThrow("calculateMean requires a non-empty array") });
// Given a value that isn't an array, e.g. "banana", 42, null or {}
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")

test("Given a value that isn't an array, e.g. banana ,42 , null or {} then it should throw Error ('calculateMean requires an array of numbers')", () => {
  expect(() => calculateMean({})).toThrow(
    "calculateMean requires an array of numbers"
  );
});

// Given no argument at all
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")

test("Given no argument at all then it should throw Error ('calculateMean requires an array of numbers')", () => {
  expect(() => calculateMean()).toThrow(
    "calculateMean requires an array of numbers"
  );
});


// Given an array containing a non-number value, e.g. [1, "2", 3]
// When passed to calculateMean
// Then it should throw Error("calculateMean requires an array of numbers")

test("Given n array containing a non-number value, e.g. [1, '2', 3] it should throw Error('calculateMean requires an array of numbers')", () => {
   expect(() => calculateMean([1, "2", 3])).toThrow(
     "calculateMean requires an array of numbers"
   );
});


