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
  const array = [];
  const currentOutput = findMax(array);
  const targetOutput = -Infinity;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an  array with one number, returns -that number", () => {
  const array = [3];
  const currentOutput = findMax(array);
  const targetOutput = 3;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, returns -the largest number overall ", () => {
  const array = [3.5, -5, 7, -9];
  const currentOutput = findMax(array);
  const targetOutput = 7;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, return the closest one to 0", () => {
  const array = [-5, -1, -7.6, -3];
  const currentOutput = findMax(array);
  const targetOutput = -1;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, return the largest decimal", () => {
  const array = [-5.9, -1.8, -7.6, -3.2];
  const currentOutput = findMax(array);
  const targetOutput = -1.8;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max number", () => {
  const array = [-5, -1, "k", -7.6, null, -3];
  const currentOutput = findMax(array);
  const targetOutput = -1;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-numbers, returns -Infinity", () => {
  const array = [false, "k", "-7.6", null, {}, NaN];
  const currentOutput = findMax(array);
  const targetOutput = -Infinity;
  expect(currentOutput).toEqual(targetOutput);
});
