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

test("returns 0 for empty array", () => {
  const list = [];
  const currentOutput = sum(list);
  const targetOutput = 0;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("sum of 1 number", () => {
  const list = [1];
  const curretOutput = sum(list);

  const targetOutput = 1;
  expect(currenOutput).toEqual(targetOutput);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("sum of negative number in arrays", () => {
  const list = [-5];
  const curretOutput = sum(list);
  const targetOutput = -5;
  expect(currenOutput).toEqual(targetOutput);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("sum of decimal/float number in arrays", () => {
  const list = [4.5, 2.5];
  const curretOutput = sum(list);
  const targetOutput = 7;
  expect(currenOutput).toEqual(targetOutput);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("ignores non-number values", () => {
  const list = ["hey", 10, "hi", 60, 10];
  const currentOutput = sum(list);
  const targetOutput = 80;

  expect(currentOutput).toEqual(targetOutput);
});

test("ignores NaN values when calculating the sum", () => {
  const list = [4, NaN, 6];
  const currentOutput = sum(list);
  const targetOutput = 10;

  expect(currentOutput).toEqual(targetOutput);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
