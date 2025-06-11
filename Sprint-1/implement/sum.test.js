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
test("given empty array, returns 0", () => {
  const input = [];
  const expected = 0;
  const result = sum(input);
  expect(result).toBe(expected);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  const input = [1];
  const expected = 1;
  const result = sum(input);
  expect(result).toBe(expected);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, returns sum", () => {
  const input = [-1, -4, -2, -6];
  const expected = 11;
  const result = sum(input);
  expect(result).toBe(expected);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal or float numbers, returns sum", () => {
  const input = [1.3, 1.6, 1.4, 2.1];
  const expected = 6.4;
  const result = sum(input);
  expect(result).toBe(expected);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with non numeric numbers, returns sum of numbers", () => {
  const input = [1, 3, "hi", "hello", null, 2];
  const expected = 3.3;
  const result = sum(input);
  expect(result).toBe(expected);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with non numeric values, returns undefined", () => {
  const input = ["hi", "hello", null, "hello-you"];
  const expected = undefined;
  const result = sum(input);
  expect(result).toBe(expected);
});
