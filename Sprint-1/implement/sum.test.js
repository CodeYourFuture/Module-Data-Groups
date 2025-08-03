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

describe('sum function', () => {
  // Test for empty array
  test('should return 0 for an empty array', () => {
    expect(sum([])).toEqual(0);
  });

  // Test for array with one number
  test('should return the number for an array with one number', () => {
    expect(sum([42])).toEqual(42);
  });

  // Test for array with negative numbers
  test('should correctly sum negative numbers', () => {
    expect(sum([-10, 20, -30])).toBe(-20);
  });

  // Test for array with decimal/float numbers
  test('should correctly sum decimal/float numbers', () => {
    expect(sum([1.5, 2.7, 3.2])).toBeCloseTo(7.4); // Using toBeCloseTo for floating-point precision
  });

  // Test for array with non-number values
  test('should ignore non-number values and sum numerical elements', () => {
    expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
  });

  // Test for array with only non-number values
  test('should return 0 for an array with only non-number values', () => {
    expect(sum(['hello', 'world', null, undefined])).toBe(0);
  });

  // Additional test for edge cases
  test('should handle mixed types including NaN and invalid numbers', () => {
    expect(sum([NaN, 10, undefined, '20', null, 5])).toBe(15);
  });
});