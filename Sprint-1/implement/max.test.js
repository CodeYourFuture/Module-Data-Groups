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

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
const max = require("./max"); // Ensure this points to the correct file with your max function implementation

// Test for an empty array
test("Given an empty array, returns -Infinity", () => {
  expect(max([])).toBe(-Infinity);
});

// Test for an array with one number
test("Given an array with one number, returns that number", () => {
  expect(max([5])).toBe(5);
});

// Test for an array with both positive and negative numbers
test("Given an array with both positive and negative numbers, returns the largest number", () => {
  expect(max([-10, 15, 3, -1, 7])).toBe(15);
});

// Test for an array with just negative numbers
test("Given an array with just negative numbers, returns the closest one to zero", () => {
  expect(max([-10, -3, -20, -5])).toBe(-3);
});

// Test for an array with decimal numbers
test("Given an array with decimal numbers, returns the largest decimal number", () => {
  expect(max([1.5, 3.8, 3.7, 0.9])).toBe(3.8);
});

// Test for an array with non-number values (mixed)
test("Given an array with non-number values, returns the max ignoring non-numeric values", () => {
  expect(max([1, "a", 5, null, 3, undefined])).toBe(5);
});

// Test for an array with only non-number values
test("Given an array with only non-number values, returns the least surprising value", () => {
  expect(max(["a", null, undefined, "string"])).toBe(-Infinity);
});
