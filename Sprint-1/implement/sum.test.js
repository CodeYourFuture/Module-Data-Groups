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
  const array = [];
  const currentOutput = sum(array);
  const targetOutput = 0;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, return the number", () => {
  const array = [5];
  const currentOutput = sum(array);
  const targetOutput = 5;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containig negative numbers, return the total of the numbers", () => {
  const array = [-5, -9, -3];
  const currentOutput = sum(array);
  const targetOutput = -17;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array containig decimalnumbers, return the total of the numbers", () => {
  const array = [-5.5, 9, -3];
  const currentOutput = sum(array);
  const targetOutput = 0.5;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containig non-number values,ignore the non-numerical values and return the total of the numbers", () => {
  const array = [5, "s", null, NaN, -9, -3];
  const currentOutput = sum(array);
  const targetOutput = -7;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array containig only non-number values, return 0", () => {
  const array = ["s", null, NaN, "-3", true];
  const currentOutput = sum(array);
  const targetOutput = 0;
  expect(currentOutput).toEqual(targetOutput);
});
