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
  const input = [];
  const result = sum(input);
  expect(result).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, it should return that number", () => {
  const input = [5];
  const result = sum(input);
  expect(result).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, it should return the correct total sum", () => {
  const input = [5, -6, 10, -12];
  const result = sum(input);
  expect(result).toBe(-3);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, it should return the correct total sum", () => {
  const input = [5, 6.6, 10, 5.12];
  const result = sum(input);
  expect(result).toBeCloseTo(26.72);
});



// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, it should ignore the numerical values and return sum of numeric element", () => {
  const input = [4, 5, "arr", 2, [], " ", 15, 8];
  const result = sum(input);
  expect(result).toBe(34);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it should return least surprising value given how it behaves for all other inputs", () => {
  const input = [true, {}, "arr", null, [], " ", NaN];
  const result = sum(input);
  expect(result).toBe(0);
});
