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
test(`should return 0, when array is empty`, () => {
  const arr = [];
  expect(sum(arr)).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test(`if array contain one number it should return this number`, () => {
  const arr = [1];
  expect(sum(arr)).toEqual(1);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test(`if array contain negative numbers it should return correct total sum`, () => {
  const arr = [1, 2, -2, 4];
  expect(sum(arr)).toEqual(5);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test(`if array contain decimal numbers it should return correct total sum`, () => {
  const arr = [1.5, 2.1, 2, 4.8];
  expect(sum(arr)).toEqual(10.4);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test(`if array contain non-numerical values it should ignore them and return correct total sum`, () => {
  const arr = [`dog`, 2.1, `Ivan`, 2, 4.8];
  expect(sum(arr)).toEqual(8.9);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test(`if array contain only non-numerical values it should return Error`, () => {
  const arr = [`dog`, `House`, `Ivan`];
  expect(sum(arr)).toEqual(`Error`);
});
