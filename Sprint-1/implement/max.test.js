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
test("returns -Infinity for an empty array", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("returns the number itself for a single-element array", () => {
  expect(findMax([42])).toBe(42);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("returns the largest number from a mixed array of positive and negative numbers", () => {
  expect(findMax([30, -10, 20, -50])).toBe(30);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("returns the closest number to zero from an array of negative numbers", () => {
  expect(findMax([-30, -10, -50])).toBe(-10);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("returns the largest decimal number from the array", () => {
  expect(findMax([1.5, 2.7, 2.1])).toBe(2.7);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("ignores non-numeric values and returns the maximum number", () => {
  expect(findMax(["hello", 10, true, 60, null])).toBe(60);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("returns -Infinity for an array with only non-numeric values", () => {
  expect(findMax(["hello", true, null, undefined])).toBe(-Infinity);
});