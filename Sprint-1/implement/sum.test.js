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

describe("sum function", () => {
  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
    expect(sum([null, undefined])).toBe(0);
  });

  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number

  test("given an array with one number, returns that number", () => {
    expect(sum([42])).toBe(42);
    expect(sum([-10])).toBe(-10);
  });

  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum

  test("given an array with negative numbers, returns the correct total sum", () => {
    expect(sum([-10, -20, -30])).toBe(-60);
    expect(sum([-10, 20, -30])).toBe(-20);
  });

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum

  test("given an array with decimal numbers, returns the correct total sum", () => {
    expect(sum([1.5, 2.5, 3.0])).toBe(7.0);
    expect(sum([1.1, 2.2, -3.3])).toBeCloseTo(0.0);
  });

  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements

  test("given an array with non-number values, ignores them and returns the sum of numerical elements", () => {
    expect(sum([10, "hello", 20, null, 30])).toBe(60);
    expect(sum(["text", undefined, 5, 15])).toBe(20);
  });

  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs

  test("given an array with only non-number values, returns 0", () => {
    expect(sum(["hello", null, undefined])).toBe(0);
    expect(sum([])).toBe(0);
  });
});
