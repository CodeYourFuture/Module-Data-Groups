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
test("should return -Infinity if input is empty array", () => {
  const arr = [];
  expect(findMax(arr)).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("if array contain only one number should return it", () => {
  const arr = [1];
  expect(findMax(arr)).toBe(1);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("should return the largest number if array contain positive and negative numbers", () => {
  const arr = [1, -2, 4, -5];
  expect(findMax(arr)).toBe(4);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("should return closest number to 0 if array contain only negative numbers", () => {
  const arr = [-1, -5, -6, -12];
  expect(findMax(arr)).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("should return largest decimal number if array contain decimal numbers", () => {
  const arr = [1, 5, 9, 7];
  expect(findMax(arr)).toBe(9);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("should return largest number and ignore non-numbers values if array contain non number values", () => {
  const arr = [`Apple`, "Dog", "sun", 12, "Horse", 22];
  expect(findMax(arr)).toBe(22);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("should return largest number and ignore non-numbers values if array contain non number values", () => {
  const arr = [`Apple`, "Dog", "sun", "Horse"];
  expect(findMax(arr)).toBe(`Error`);
});
