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

describe('sum function', () => {
  test('should return the sum of all numeric elements in the array', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  test('should ignore non-numeric elements and return the sum of numeric values', () => {
    expect(sum([1, 2, 'a', 3, 'b'])).toBe(6);
  });

  test('should return 0 if the array is empty', () => {
    expect(sum([])).toBe(0);
  });

  test('should return 0 if the array contains no numeric elements', () => {
    expect(sum(['a', 'b', 'c'])).toBe(0);
  });

  test('should handle arrays with a single numeric element', () => {
    expect(sum([42])).toBe(42);
  });

  test('should handle arrays with negative numbers', () => {
    expect(sum([1, -1, 2, -2, 3])).toBe(3);
  });

  test('should handle arrays with decimal numbers', () => {
    expect(sum([1.5, 2.5, 3])).toBe(7);
  });
});


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
