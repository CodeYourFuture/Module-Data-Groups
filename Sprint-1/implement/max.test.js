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
test("Given an empty array Then it should return -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  expect(findMax([2])).toEqual(2);
  expect(findMax([7])).toEqual(7);
  expect(findMax([-7])).toEqual(-7);
  expect(findMax([70000000])).toEqual(70000000);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with both positive and negative numbers Then it should return the largest number overall", () => {
  expect(findMax([2, -9])).toEqual(2);
  expect(findMax([2, -4, -2, 9])).toEqual(9);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with just negative numbers Then it should return the closest one to zero", () => {
  expect(findMax([-2, -4, -1, -99])).toEqual(-1);
  expect(findMax([2])).toEqual(2);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("Given an array with just negative numbers Then it should return the closest one to zero", () => {
  expect(findMax([3.7, 3.8, 3.9])).toEqual(3.9);
  expect(findMax([2.8, 2.6, 2.5, 2.1])).toEqual(2.8);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("Given an array with just negative numbers Then it should return the closest one to zero", () => {
  expect(findMax([-2, -4, -1, "p"])).toEqual(-1);
  expect(findMax([2, 5, "i", 3, "r"])).toEqual(5);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other input
test("Given an array with only non-number values Then it should return the least surprising value given how it behaves for all other input", () => {
  expect(findMax(["cat"])).toEqual(-Infinity);
  expect(findMax(["cat", "dog"])).toEqual(-Infinity);
  expect(findMax(["cat", "dog", "catdog"])).toEqual(-Infinity);
});
