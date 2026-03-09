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
  const input = [];
  const expectedOutput = -Infinity;
  expect(findMax(input)).toBe(expectedOutput);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, it returns that number", () => {
  const input = [42];
  const expectedOutput = 42;
  expect(findMax(input)).toBe(expectedOutput);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, it returns the largest number overall", () => {
  const input = [-10, -20, 5, 0, -1];
  const expectedOutput = 5;
  expect(findMax(input)).toBe(expectedOutput);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, it returns the closest one to zero", () => {
  const input = [-10, -20, -5, -1];
  const expectedOutput = -1;
  expect(findMax(input)).toBe(expectedOutput);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, it returns the largest decimal number", () => {
  const input = [1.5, 2.3, 0.7, 2.9];
  const expectedOutput = 2.9;
  expect(findMax(input)).toBe(expectedOutput);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, it returns the max and ignore non-numeric values", () => {
  const input = [10, "hello", 20, null, 5];
  const expectedOutput = 20;
  expect(findMax(input)).toBe(expectedOutput);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it returns the least surprising value", () => {
  const input = ["hello", "world"];
  const expectedOutput = -Infinity;
  expect(findMax(input)).toBe(expectedOutput);
});
