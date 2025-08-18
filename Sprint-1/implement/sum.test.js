/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  const currentValue = sum([]);
  const targetValue = 0;
  expect(currentValue).toBe(targetValue);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, it returns that number", () => {
  const currentValue = sum([2]);
  const targetValue = 2;
  expect(currentValue).toBe(targetValue);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, it returns the correct total sum", () => {
  const currentValue = sum([-1, -5, -10, -5]);
  const targetValue = -21;
  expect(currentValue).toBe(targetValue);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, it returns the correct total sum", () => {
  const currentValue = sum([1.2, 2.2, 3.3, 4.4]);
  const targetValue = 11.1;
  expect(currentValue).toBe(targetValue);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, it returns sum of numerical elements", () => {
  const currentValue = sum(["hello", "hi", "3", 1, 2, 3]);
  const targetValue = 6;
  expect(currentValue).toBe(targetValue);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array containing non-number values, it returns least suprising value", () => {
  const currentValue = sum(["h", "3", "w", "hello"]);
  const targetValue = NaN;
  expect(currentValue).toBe(targetValue);
});
