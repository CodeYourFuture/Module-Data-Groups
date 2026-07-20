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
  const currentOutput = sum([]);
  const targetOutput = 0;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an only one number the test should return that number", () => {
  const currentOutput = sum([20]);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an only one number the test should return that number", () => {
  const currentOutput = sum([-20, -30, -2, 4]);
  const targetOutput = -48;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal numbers the test should return the total", () => {
  const currentOutput = sum([2.0, 3.3, 1.2, 4.4]);
  const targetOutput = 10.9;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-numbers the test should skip the string and return the total", () => {
  const currentOutput = sum([3, 3.3, "aa", "4.4"]);
  const targetOutput = 6.3;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-numbers the test should return the least surprising value given how it behaves for all other inputs", () => {
  const currentOutput = sum(["cc", "3", "aa", "4.4"]);
  const targetOutput = 0;

  expect(currentOutput).toEqual(targetOutput);
});