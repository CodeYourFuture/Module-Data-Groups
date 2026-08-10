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
test("when given an empty array to the function it returns Infinity", () => {
  const elements = [];

  const result = findMax(elements);
  expect(result).toEqual(Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("when the given is array of one number it should return that number", () => {
  const elements = [30];
  const result = findMax(elements);
  expect(result).toEqual(30);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("should return the largest number when the array contains both negative and positive numbers", () => {
  const elements = [-10, -12, -7, 0, 2, 4];
  const result = findMax(elements);
  expect(result).toEqual(4);
});
test("should return the largest number when the array contains both negative and positive numbers", () => {
  const elements = [-20, -6, -2, 0, 7, 9, 5];
  const result = findMax(elements);
  expect(result).toEqual(9);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("should return number that is closest to zero when the array contains all negative numbers", () => {
  const elements = [-20, -6, -2, -4, -7, -9, -5];
  const result = findMax(elements);
  expect(result).toEqual(-2);
});
test("should return number that is closest to zero when the array contains all negative numbers", () => {
  const elements = [-20, -11, -1, 0, -7, -9, -5];
  const result = findMax(elements);
  expect(result).toEqual(0);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("should return the largest decimal number when the array contains decimal numbers", () => {
  const elements = [2.7, 6.3, 7.3, 4.9, 7.9, 4.5];
  const result = findMax(elements);
  expect(result).toEqual(7.9);
});
test("should return the largest decimal number when the array contains decimal numbers", () => {
  const elements = [11.8, 16.3, 27.3, 41.9, 0.9, 14.5];
  const result = findMax(elements);
  expect(result).toEqual(41.9);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("should return the largest number ignoring non-numerical values when the array contains non-numerical value", () => {
  const elements = [11, "apple", 27, "hi", 9, "zero"];
  const result = findMax(elements);
  expect(result).toEqual(27);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("should return only number value, when the array contains non-numerical value", () => {
  const elements = ["apple", "hi", "book", "zero"];
  const result = findMax(elements);
  expect(result).toEqual(undefined);
});
test("should return only number value, when the array contains non-numerical value", () => {
  const elements = ["apple"];
  const result = findMax(elements);
  expect(result).toEqual(undefined);
});
