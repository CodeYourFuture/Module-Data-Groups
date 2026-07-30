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
test("should return -Infinity for an empty array", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("should return the number when array contains one number ", () => {
  expect(findMax([5])).toEqual(5);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("should return the largest number when passed negative and positive numbers", () => {
  expect(findMax([-5, 5, -2, 2])).toEqual(5);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("should return the number closest to 0, when the numbers are all negative in the array", () => {
  expect(findMax([-5, -3, -1, -9])).toEqual(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("should return the largest number among decimals", () => {
  expect(findMax([2.3, 1.6, 9.4, 11.25])).toEqual(11.25);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("should ignore non-numeric values, and calculate the max of the numbers", () => {
  expect(findMax(["all", null, true, [2, 3], 3, 7])).toEqual(7);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("should return undefined if all the elements are non-numbers", () => {
  expect(findMax(["nope", null, []])).toEqual(-Infinity);
});
