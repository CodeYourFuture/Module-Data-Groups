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
test("given an empty array, returns -Infinity",() => {
  let emptyArray = []
  let result = findMax(emptyArray);
  expect(result).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("Given an array with one number, return that number", () => {
  let oneNumArray = [12];
  let result = findMax(oneNumArray);
  expect(result).toEqual(12);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with both positive and negative numbers, it should return the largest number overall", () => {
  let positiveAndNegativeNum= [-2, 3, 4,-5];
  let result = findMax(positiveAndNegativeNum);
  expect(result).toEqual(4);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with just negative numbers, return the closest one to zero", () => {
  let negativeNumArray = [-1, -2, -3];
  let result = findMax(negativeNumArray);
  expect(result).toEqual(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("Given an array with decimal numbers, return the largest decimal number", () => {
  let decimalNumArray = [1.5, 2.5, 2.2];
  let result = findMax(decimalNumArray);
  expect(result).toEqual(2.5);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("Given an array with non-number values, Then it should return the max and ignore non-numeric values", () => {
  let mixedArray = [4, "hello", "fruit", 2, 5];
  let result = findMax(mixedArray);
  expect(result).toEqual(5);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

