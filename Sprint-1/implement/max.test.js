/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("given an array with one number, returns that number", () => {
  expect(findMax([7])).toBe(7);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("given positive and negative numbers, returns the largest number", () => {
  expect(findMax([-3, 7, -2, 5])).toBe(7);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

test("given an array with only negative numbers, returns the closest to zero", () => {
  expect(findMax([-10, -3, -7])).toBe(-3);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("given an array with decimal numbers, returns the clargest decimal number", () => {
  expect(findMax([2.7, 6.9, 10.1])).toBe(10.1);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("given an array with non-number values, returns the max and ignore non-numeric values", () => {
  expect(findMax([3, "dogs", 1, "cat", null])).toBe(3);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["a", null, true, undefined])).toBe(-Infinity);
});

// Given an array with Nan
// When passed to the max function
// Then it should return the correct maximum value
test("given an array including Nan return correct maximum value", () => {
  expect(findMax([11, NaN, 5])).toBe(11);
});

// Given an array with numeric string value
// When passed to the max function
// Then it should ignore the numeric string and return correct maximum value
test("given an array with numeric string value, it should ignore the numeric string and return correct maximum value", () => {
  expect(findMax([8, "14", 2])).toBe(8);
});
