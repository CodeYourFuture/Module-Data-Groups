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
  expect(findMax([])).toEqual(-Infinity);
});

test("given an array with one number, returns that number", () => {
  expect(findMax([7])).toEqual(7);
});

test("given an array with positive and negative numbers, returns the largest", () => {
  expect(findMax([-3, 0, 5, -1])).toEqual(5);
});

test("given an array with just negative numbers, returns the closest to zero", () => {
  expect(findMax([-10, -3, -7])).toEqual(-3);
});

test("given an array with decimal numbers, returns the largest decimal", () => {
  expect(findMax([1.1, 2.9, 2.1])).toEqual(2.9);
});

test("given an array with non-number values, ignores them and returns the max", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toEqual(60);
});

test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["a", "b"])).toEqual(-Infinity);
});
