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
test("when an empty array push into the function it should return empty array", () => {
  let emptyArray = [];
  expect(findMax(emptyArray)).toEqual([]);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("When an array have only one number value", () => {
  let mixArray = ["Hello", "Hi", null, undefined, 5];
  expect(findMax(mixArray)).toBe(5);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("When an array have only one number value", () => {
  let mixArray = [-5, 3, 10, -11, -12, -20, 50];
  expect(findMax(mixArray)).toBe(50);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("When an array have only one number value", () => {
  let mixArray = [-1, -4, -5, -6 - 2, -3, -10];
  expect(findMax(mixArray)).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("When an array have decimal number value", () => {
  let decimalArray = [2.3, 1.5, 6.5, 10.2, 11.5];
  expect(findMax(decimalArray)).toBe(11.5);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("When an array have decimal number value", () => {
  let decimalArray = ["Hello", "Hi", 1, 12312321n, undefined];
  expect(findMax(decimalArray)).toBe(1);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("When an array have only non-number values ", () => {
  let nonNumberArray = ["Hello", "Hi", undefined, null, "23"];
  expect(findMax(nonNumberArray)).toBe(null);
});
