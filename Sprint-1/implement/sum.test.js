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
test("given an empty array, returns zero", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array of one number, returns number", () => {
  expect(sum([7])).toEqual(7);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
const testCaseNegativeNumbers = [
  { input: [-1, -2, -3], expected: -6 },
  { input: [-5, -10, -15], expected: -30 },
  { input: [-20, -8, -12], expected: -40 },
  { input: [-100, -50, -75], expected: -225 },
];
testCaseNegativeNumbers.forEach(({ input, expected }) => {
  test("given an array of negative numbers, returns total sum", () => {
    expect(sum(input)).toBeCloseTo(expected);
  });
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
const testCaseDecimalNumbers = [
  { input: [1.5, 2.7, 3.2], expected: 7.4 },
  { input: [4.25, 6.75, 8.5], expected: 19.5 },
  { input: [0.5, 1.25, 2.75], expected: 4.5 },
  { input: [-1.5, -2.25, -3.75], expected: -7.5 },
];
testCaseDecimalNumbers.forEach(({ input, expected }) => {
  test("given an array of decimal numbers, returns total sum", () => {
    expect(sum(input)).toBeCloseTo(expected);
  });
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

const testCaseNonNumerical = [
  { input: [1, "hello", 2, 3], expected: 6 },
  { input: [5, null, 10, undefined], expected: 15 },
  { input: ["apple", 4, 6, "banana"], expected: 10 },
  { input: [2, true, 3, {}, 5], expected: 10 },
  { input: ["10", 1, 2, 3], expected: 6 },
];
testCaseNonNumerical.forEach(({ input, expected }) => {
  test("given an array of non-numerical values, return sum of numerical values", () => {
    expect(sum(input)).toEqual(expected);
  });
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
const testNonNumberValues = [
  { input: ["hello", "world"], expected: 0 },
  { input: [null, undefined], expected: 0 },
  { input: [true, false, "apple"], expected: 0 },
  { input: [{}, "10", null], expected: 0 },
  { input: ["apple", null, undefined, false], expected: 0 },
];
testNonNumberValues.forEach(({ input, expected }) => {
  test("given an array of non number values, return zero", () => {
    expect(sum(input)).toEqual(expected);
  });
});
