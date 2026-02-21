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

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test(`Should return the correct sum of the numerical elements of an array`, () => {
  expect(sum(["apple", "banana", 1, 10])).toEqual(11);
  expect(sum([1, -1, -100])).toEqual(-100);
  expect(sum([-10, -20, -3, -4])).toEqual(-37);
  expect(sum([1.5, 10.5, 0.5])).toBeCloseTo(12.5);
  expect(sum(["apple", "banana", "cherry"])).toEqual(-Infinity);
});
