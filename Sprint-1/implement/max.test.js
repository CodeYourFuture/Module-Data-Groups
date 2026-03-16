/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.p

We have set things up already so that this file can see your function from the other file.

Driven Development (BDD), format Given / When / Then. 
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test("should return -Infinity when given an empty array", () => {
  expect(findMax([])).toEqual(-Infinity);
});


// Given an array with one number
// When passed to the max function
// Then it should return that number
test("should return the number itself when the array has only one element", () => {
  expect(findMax([2])).toEqual(2);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("should return the largest number when given both positive and negative numbers", () => {
  expect(findMax([-1, -3, 0, 3])).toEqual(3);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("should return the closest number to zero when given only negative numbers", () => {
  expect(findMax([-1, -3, -2, 0])).toEqual(0);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("should return the largest decimal number correctly", () => {
  expect(findMax([1.5, 2.5, 0.5])).toEqual(2.5);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("should ignore non-numeric values (strings, etc.) and return the max", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toEqual(60);
});


// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it returns -Infinity", () => {
  expect(findMax(["abc", "def"])).toEqual(-Infinity);
});

