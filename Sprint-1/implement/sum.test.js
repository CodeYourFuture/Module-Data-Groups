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
  const expectedOutput = 0;
  expect(sum(input)).toBe(expectedOutput);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, returns that number", () => {
  const input = [5];
  const expectedOutput = 5;
  expect(sum(input)).toBe(expectedOutput);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, it returns the correct total sum", () => {
  const input = [10, -5, 20, -3];
  const expectedOutput = 22;
  expect(sum(input)).toBe(expectedOutput);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal numbers, it returns the correct total sum", () => {
  const input = [1.5, 2.3, 0.7];
  const expectedOutput = 4.5;
  expect(sum(input)).toBeCloseTo(expectedOutput);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, it ignores them and returns the sum of the numerical elements", () => {
  const input = [10, "hello", 20, null, 5];
  const expectedOutput = 35;
  expect(sum(input)).toBe(expectedOutput);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it returns the least surprising value", () => {
  const input = ["hello", "world"];
  const expectedOutput = 0;
  expect(sum(input)).toBe(expectedOutput);
});
