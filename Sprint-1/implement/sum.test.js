/* Sum the numbers in an array
In this kata, you will need to implement a function that sums the numerical elements of an array
E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/
//const sum = require("./sum.js");
// Acceptance Criteria:
// Given an empty array
// When passed to the sum function
// Then it should return 0
//test.todo("given an empty array, returns 0")

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

const sum = require('./sum'); // Make sure the path is correct

describe('sum function', () => {
  test('returns 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('returns the single number for an array with one number', () => {
    expect(sum([42])).toBe(42);
  });

  test('returns the correct sum for an array containing negative numbers', () => {
    expect(sum([-10, -5, -20])).toBe(-35);
  });

  test('returns the correct sum for an array with decimal/float numbers', () => {
    expect(sum([1.1, 2.2, 3.3])).toBeCloseTo(6.6);
  });

  test('ignores non-number values and returns the sum of numerical elements', () => {
    expect(sum(['a', 10, 'b', 20, null, 30])).toBe(60);
  });

  test('returns 0 for an array with only non-number values', () => {
    expect(sum(['a', 'b', {}, [], null])).toBe(0);
  });
});