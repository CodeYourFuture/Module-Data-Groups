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
// test.todo("given an empty array, returns -Infinity");
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});
// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  expect(findMax([42])).toBe(42);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with positive and negative numbers, returns the largest", () => {
  expect(findMax([-10, 5, 20, -3])).toBe(20);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with only negative numbers, returns the closest to zero", () => {
  expect(findMax([-100, -20, -3, -50])).toBe(-3);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal", () => {
  expect(findMax([1.2, 3.5, 2.9, 3.6])).toBe(3.6);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max of valid numbers", () => {
  expect(findMax(["a", 10, "b", 20, null, undefined, NaN, 5])).toBe(20);
  expect(findMax([false, 3, true, 7, "hello"])).toBe(7);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["a", null, undefined, NaN, {}, [], "b"])).toBe(-Infinity);
  expect(findMax([false, true, "zero", "1", {}, []])).toBe(-Infinity);
});