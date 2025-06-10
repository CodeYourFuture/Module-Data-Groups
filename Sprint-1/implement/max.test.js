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

test("given an empty array, returns -Infinity ", () => {
  const input = [];
  const expected = -Infinity;

  const result = findMax(input);

  expect(result).toBe(expected);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  const input = [1];
  const expected = 1;

  const result = findMax(input);
  expect(result).toBe(expected);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, returns largest number overall", () => {
  const input = [-5, 1, 3, 4];
  const expected = 4;

  const result = findMax(input);
  expect(result).toBe(expected);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, returns number closest to zero", () => {
  const input = [-10, -5, -2, -20];
  const expected = -2;

  const result = findMax(input);
  expect(result).toBe(expected);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest number", () => {
  const input = [1.2, 1.1, 4.3, 6.3];
  const expected = 6.3;

  const result = findMax(input);
  expect(result).toBe(expected);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns max and ignores non-numeric values", () => {
  const input = [1, 5, 1, "hi", 3, "hello"];
  const expected = 5;

  const result = findMax(input);
  expect(result).toBe(expected);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, return least surprising value", () => {
  const input = ["hi", "hello", "cool", null];
  const expected = undefined;

  const result = findMax(input);
  expect(result).toBe(expected);
});
