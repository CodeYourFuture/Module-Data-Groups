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
test(`given an empty array, it returns -Infinity`, () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test(`given an array with one number, it should return that number`, () => {
  expect(findMax([80])).toEqual(80);
  expect(findMax([1])).toEqual(1);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test(`given an array with both positive numbers and negative numbers, it should return the largest number overall`, () => {
  expect(findMax([80, -30, 50, -10, 20, 100, 40])).toEqual(100);
  expect(findMax([-90, 30, 250, 1, 120, -100, -40])).toEqual(250);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test(`given an array with negative numbers, it should return the addition of them all`, () => {
  expect(findMax([-80, -30, -50, -10, -20, -100, -40])).toEqual(-10);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test(`given an array with decimal numbers, it should return the largest decimal number`, () => {
  expect(findMax([-80.5, -30.1, 50.7, -10, 20.4, 10.3, 60.1])).toEqual(60.1);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test(`given an array of numeric and non-numeric values, it should return the largest numeric`, () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toEqual(60);
  expect(
    findMax(["i", "love", 10, "code", "hi", 80, 60, "your", "future", 10])
  ).toEqual(80);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test(`given an array of non-numeric values, it should return -Infinity`, () => {
  expect(findMax(["i", "love", "code", "your", "future"])).toEqual(-Infinity);
});
