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
test("if given empty array it should return Infinity", () => {
  const elements = [];
  expect(findMax(elements)).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("if given 1 number, it should return that number", () => {
  const elements = [8];
  expect(findMax(elements)).toEqual(8);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given positive and negative value, should return largest number overall", () => {
  const elements = [1, 3, 4, -3, -5];
  expect(findMax(elements)).toEqual(4);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("if given all negative number it should return closest to Zero", () => {
  const elements = [-1, -2, -4, -8];
  expect(findMax(elements)).toEqual(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("if given decimal number, should return largest decimal number", () => {
  const elements = [1.2, 5.5, 9.1];
  expect(findMax(elements)).toEqual(9.1);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("if given non-number values it should return only max number", () => {
  const elements = [2, 5, 7, "hi", "apple", 9];
  expect(findMax(elements)).toEqual(9);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("if given only non-number values it should return -Infinity ", () => {
  const elements = ["a", "n", "hi"];
  expect(findMax(elements)).toEqual(-Infinity);
});
