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
  const currentValue = findMax([]);
  const TargetValue = -Infinity;
  expect(currentValue).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number i.e 20, returns that number", () => {
  const currentValue = findMax([20]);
  const targetValue = 20;
  expect(currentValue).toBe(targetValue);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers i.e [1,2,-3,-4], it returns the largest number", () => {
  const currentValue = findMax([1, 2, -3, -4]);
  const targetValue = 2;
  expect(currentValue).toBe(targetValue);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, it returns closest number to zero", () => {
  const currentValue = findMax([-1, -2, -3, -4, -5]);
  const targetValue = -1;
  expect(currentValue).toBe(targetValue);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers i.e[1.4,6.5,3.2,4.8], it returns the largest decimal i.e 6.5", () => {
  const currentValue = findMax([1.4, 6.5, 3.2, 4.8]);
  const targetValue = 6.5;
  expect(currentValue).toBe(targetValue);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, it returns max and ignores non numeric values", () => {
  const currentValue = findMax([1, 5, 10, "hello", "h", "."]);
  const targetValue = 10;
  expect(currentValue).toBe(targetValue);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it returns the least surprising value", () => {
  const currentValue = findMax(["hello", "world", "1", "/"]);
  const targetValue = NaN;
  expect(currentValue).toBe(targetValue);
});
