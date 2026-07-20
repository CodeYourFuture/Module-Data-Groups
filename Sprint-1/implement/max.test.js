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
  const currentOutput = (findMax([]));
  const targetOutput = -Infinity;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("should return the largest number", () => {
  const currentOutput = (findMax([30]));
  const targetOutput = 30;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("should return the largest number", () => {
  const currentOutput = (findMax([30, 50, -10, 40]));
  const targetOutput = 50;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("should also return the largest negative number", () => {
  const currentOutput = (findMax([-30, -50, -10, -40]));
  const targetOutput = -10;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("should return the largest number even if there are decimal numbers", () => {
  const currentOutput = (findMax([30.4, 30.9, 10, -40]));
  const targetOutput = 30.9;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("should skip the string and return the largest number", () => {
  const currentOutput = (findMax([30, "aa", 10, 40]));
  const targetOutput = 40;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

test("should skip all the string and return should be -Infinity", () => {
  const currentOutput = (findMax(["bb", "aa", "cc"]));
  const targetOutput = -Infinity;

  expect(currentOutput).toEqual(targetOutput);
});
