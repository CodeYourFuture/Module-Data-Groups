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
  const elements = [];
  const answer = findMax(elements);
  expect(answer).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("Given an array with one number the function should just return that number", () => {
  const elements = [9];
  const answer = findMax(elements);
  expect(answer).toEqual(9);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with negative and positive numbers, function should be able to return the largest number overall", () => {
  const elements = [10, 23, -23, -50, 16];
  const answer = findMax(elements);
  expect(answer).toEqual(23);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with negative numbers, the function must return the number closest to zero", () => {
  const elements = [-2, -1, -5, -9, -8];
  const answer = findMax(elements);
  expect(answer).toEqual(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("Given an array with decimal numbers it should return the largest decimal number", () => {
  const elements = [0.2, 2.3, 8.9, 5.62];
  const answer = findMax(elements);
  expect(answer).toEqual(8.9);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("Given an array with non - number valuesit should return the largest and ignore the non", () => {
  const elements = ["number", 8, "string", 9];
  const answer = findMax(elements);
  expect(answer).toEqual(9);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("The function should be able to handle an array with non numbers", () => {
  const elements = ["numbers", "cat", "dog"];
  const answer = findMax(elements);
  expect(answer).toBe(-Infinity);
});
