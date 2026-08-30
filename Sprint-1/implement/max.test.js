/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the 
largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), 
target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("empty array returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("array with single element returns that element", () => {
  expect(findMax([3])).toEqual(3);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("array with positive and negative elements still returns correct value", () => {
  expect(findMax([-3, 3])).toEqual(3);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("array of all negative numbers returns closest value to zero", () => {
  expect(findMax([-5, -6, -3, -12])).toEqual(-3);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("array of decimal numbers returns correct value", () => {
  expect(findMax([3.3, 12.2, 4.3, 22.22])).toEqual(22.22);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("ignores non-numeric values in array and returns max", () => {
  expect(findMax([3, "asd", [22], { a: 12 }, 12])).toEqual(12);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("if all elements are non-numeric, return -Infinity", () => {
  expect(findMax(["67", "asd", [22], { a: 12 }, "ss"])).toEqual(-Infinity);
});
