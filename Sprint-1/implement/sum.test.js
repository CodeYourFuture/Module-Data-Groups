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

test("given an empty array, return 0", () => {
  const input = [];
  const result = sum(input);
  expect(result).toEqual(0);
});
// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number", () => {
  const input = [10];
  const result = sum(input);
  expect(result).toEqual(10);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array a negative number", () => {
  const input = [-10, -20, -30, -40];
  const result = sum(input);
  expect(result).toEqual(-100);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal number", () => {
  const input = [0.1, 0.2, 0.3, 0.4];
  const result = sum(input);
  expect(result).toBeCloseTo(1);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number", () => {
  const input = [10,"glasgow", 30, "london", 50, "asmara", 60, "massawa"];
  const result = sum(input);
  expect(result).toEqual(150);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array containing non-number", () => {
  const input = ["Nairobi","Glasgow", "London", "Asmara","Edinburgh", "Massawa"];
  const result = sum(input);
  expect(result).toEqual(0);
});