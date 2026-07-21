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
test(`given an empty array, it returns zero`, () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test(`given an array with one number, it should return that number`, () => {
  expect(sum([80])).toEqual(80);
  expect(sum([1])).toEqual(1);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test(`given an array with negative numbers, it should return the addition of them all`, () => {
  expect(sum([-80, -30, -50, -10, -20, -100, -40])).toEqual(-330);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test(`given an array with decimal numbers, it should return the total`, () => {
  expect(sum([-80.5, -30.1, 50.7, -10, 20.4, 10.3, 60.1])).toEqual(20.9);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test(`given an array of numeric and non-numeric values, it should return the total of the numeric values`, () => {
  expect(sum(['hey', 10, 'hi', 60, 10])).toEqual(80);
  expect(sum(['i', 'love', 10, 'code', 'hi', 80, 60, 'your', 'future', 10])).toEqual(160);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test(`given an array of non-numeric values, it should return zero`, () => {
  expect(sum(['i', 'love', 'code', 'your', 'future'])).toEqual(0);
})