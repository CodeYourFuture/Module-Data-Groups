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
  expect(findMax([5])).toBe(5);
  expect(findMax([42])).toBe(42);
  expect(findMax([-10])).toBe(-10);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with positive and negative numbers, returns the largest", () => {
  expect(findMax([30, 50, 10, 40])).toBe(50);
  expect(findMax([10, -5, 20, -15, 8])).toBe(20);
  expect(findMax([-3, 5, -10, 2])).toBe(5);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, returns the closest to zero", () => {
  expect(findMax([-5, -10, -3, -20])).toBe(-3);
  expect(findMax([-100, -50, -1])).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal", () => {
  expect(findMax([3.5, 2.1, 4.8, 1.2])).toBe(4.8);
  expect(findMax([0.1, 0.9, 0.5])).toBe(0.9);
  expect(findMax([10.5, 10.7, 10.3])).toBe(10.7);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, ignores them and returns max", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60);
  expect(findMax([5, "hello", 15, null, 10, undefined])).toBe(15);
  expect(findMax([1, "test", 2, NaN, 3])).toBe(3);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns null", () => {
  expect(findMax(["hello", "world"])).toBe(null);
  expect(findMax([null, undefined, NaN])).toBe(null);
  expect(findMax(["a", "b", "c"])).toBe(null);
});
