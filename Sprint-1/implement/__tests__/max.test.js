/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("../max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity

test("given an empty array, returns -Infinity", () => {
  expect(findMax([]).toBe(-Infinity));
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number", () => {
  expect(findMax([42]).toBe(42));
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers", () => {
  expect(findMax([-4, -5, 9, 2])).toBe(9);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with jus negative numbers", () => {
  expect(findMax([-8, -7, -2])).toBe(-2);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers", () => {
  expect(findMax([2.9, 7.8, 9.4])).toBe(9.4);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values", () => {
  expect(findMax(["hi", "luke", "ball", 9, 5, 19])).toBe(19);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values", () => {
  expect(findMax(["luke", "hi", "tom", null])).toBe(-Infinity);
});
