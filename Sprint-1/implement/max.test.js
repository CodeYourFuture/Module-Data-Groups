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
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  expect(findMax([42])).toBe(42);
  expect(findMax([-5])).toBe(-5);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with positive and negative numbers, returns the largest", () => {
  expect(findMax([30, 50, 10, 40])).toBe(50);
  expect(findMax([-10, 5, -20, 15])).toBe(15);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with only negative numbers, returns closest to zero", () => {
  expect(findMax([-10, -5, -20])).toBe(-5);
  expect(findMax([-1, -2, -3])).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest", () => {
  expect(findMax([1.5, 2.7, 1.9])).toBe(2.7);
  expect(findMax([0.1, 0.3, 0.2])).toBe(0.3);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-numeric values, ignores them", () => {
  expect(findMax(['hey', 10, 'hi', 60, 10])).toBe(60);
  expect(findMax([true, 5, null, 25, 'hello'])).toBe(25);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-numeric values, returns -Infinity", () => {
  expect(findMax(['hello', 'world', true, null])).toBe(-Infinity);
});
