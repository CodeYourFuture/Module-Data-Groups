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
  const maxElement = [];
  const currentOutput = findMax(maxElement);
  const targetOutput = -Infinity;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  const maxElement = [1];
  const currentOutput = findMax(maxElement);
  const targetOutput = 1;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with one both positive and negative numbers , return largest number", () => {
  const maxElement = [2, -4, 8, -1];
  const currentOutput = findMax(maxElement);
  const targetOutput = 8;
  expect(currentOutput).toEqual(targetOutput);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with negative  numbers, returns  the closest to zero", () => {
  const maxElement = [-1, -4, -12];
  const currentOutput = findMax(maxElement);
  const targetOutput = -1;
  expect(currentOutput).toEqual(targetOutput);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers returns the largest decimal number", () => {
  const maxElement = [2.5, 4.5, 9.8];
  const currentOutput = findMax(maxElement);
  const targetOutput = 9.8;
  expect(currentOutput).toEqual(targetOutput);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with one non-number return the max and ignore non-numeric value, ", () => {
  const maxElement = ["hello", 4, 8, 10];
  const currentOutput = findMax(maxElement);
  const targetOutput = 10;
  expect(currentOutput).toEqual(targetOutput);
});
// Given an array with numeric string values
// When passed to the max function
// Then it should ignore numeric strings and only consider real numbers
test("ignores numeric strings like '300'", () => {
  const maxElement = ["300", 10, 20];
  const currentOutput = findMax(maxElement);
  const targetOutput = 20;
  expect(currentOutput).toEqual(targetOutput);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values returns -Infinity", () => {
  const maxElement = ["history", "nation"];
  const currentOutput = findMax(maxElement);
  const targetOutput = -Infinity;
  expect(currentOutput).toEqual(targetOutput);
});
