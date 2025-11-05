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

test("given an empty array, it should return -Infinity", () => {
  const currentOutput = findMax([]);
  const targetOutput = -Infinity;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("Given an array with one number, it should return that number", () => {
  const currentOutput = findMax([1]);
  const targetOutput = 1;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with both positive and negative numbers it should return the largest number overall", () => {
  const currentOutput = findMax([-2, 2, 3, -3]);
  const targetOutput = 3;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with just negative numbers, it should returnthe closest one to zero", () => {
  const currentOutput = findMax([-1, -2, -3, -4]);
  const targetOutput = -1;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, it should return the largest decimal number", () => {
  const currentOutput = findMax([0.2, 0.45, 5.3, 1.5]);
  const targetOutput = 5.3;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, it should return the max and ignore non-numeric values", () => {
  const currentOutput = findMax(["a", "!", 3, 5, "0"]);
  const targetOutput = 5;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it should return the least surprising value given how it behaves for all other inputs", () => {
  const currentOutput = findMax(["2", "3", "$", "%"]);
  const targetOutput = "3";
  expect(currentOutput).toEqual(targetOutput);
});