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
test("an empty array should return -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("an array with one number should return the number", () => {
  expect(findMax([0])).toEqual(0);
  expect(findMax([-4])).toEqual(-4);
  expect(findMax([102])).toEqual(102);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("should return the largest number", () => {
  expect(findMax([-4, -12, 0, -100, 1, 60, 112])).toEqual(112);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("should return the closest number to zero", () => {
  expect(findMax([-42, -12, -40, -100, -65])).toBe(-12);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("should return the largest decimal number", () => {
  expect(findMax([1.2, -4.5, 6.89, -2.3])).toBe(6.89);
  expect(findMax([-1.8, -9.86, -60.7])).toBe(-1.8);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("non-numeric values should be ignored and ", () => {
  expect(findMax([-40.5, "hi", 0, 1.6, "NO"])).toEqual(1.6);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("for non-numeric values should return the max of added ASCII values", () => {
  expect(findMax(["hi", "NO", "byE"])).toEqual(-Infinity);
});
