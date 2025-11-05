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

test("given an empty array, it should return 0", () => {
  const currentOutput = sum ([]);
  const targetOutput = 0;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, it should return that number", () => {
  const currentOutput = sum ([1]);
  const targetOutput = 1;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, it should still return the correct total sum", () => {
  const currentOutput = sum ([-2, -3, -4, -5]);
  const targetOutput = -14;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, it should return the correct total sum", () => {
  const currentOutput = sum ([2.5, 3.1, 4.9]);
  const targetOutput = 10.5;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, it should return the sum of the numerical elements", () => {
  const currentOutput = sum (["a", "!", 3, 5, ","]);
  const targetOutput = 8;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it should return the least surprising value given how it behaves for all other inputs", () => {
  const currentOutput = sum (["a", "!", "3", "5", ","]);
  const targetOutput = 8;
  expect(currentOutput).toEqual(targetOutput);
});