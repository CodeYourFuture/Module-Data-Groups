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
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, it should return that number", () => {
  expect(findMax([12])).toBe(12);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, it should return the largest overall", () => {
  expect(findMax([99, 86])).toBe(99);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with negative numbers, it should return the closest number to zero", () => {
  expect(findMax([-14, -24, -1120, -7])).toBe(-7);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, it should return the largest decimal number", () => {
  expect(findMax([0.8, 1.3, 1.79, 1.8])).toBe(1.8);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-numeric values, it should return the max without non-numeric values", () => {
  expect(findMax(["yay", 12, "yey", 7, "yonatan", 31])).toBe(31);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it should return the least suprising value given", () => {
  expect(findMax(["f", "r", {}, null, "$"])).toBe(-Infinity);
});
