/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

describe("sum", () => {
  // Given an empty array
  // When passed to the sum function
  // Then it should return 0
  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
  });

  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number
  test("given an array with just one number, return that number", () => {
    expect(sum([2])).toBe(2);
  });
  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  test("given an array containing negative numbers, return the correct total sum", () => {
    expect(sum([-1, -7, -10])).toBe(-18);
  });
  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  test("given an array with decimal/float numbers, return the correct total sum", () => {
    expect(sum([1.0, 1.2, 1.5])).toBeCloseTo(3.7);
  });
  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements
  test("given an array containing non-number values, ignore the non-numerical values and return the sum of the numerical elements", () => {
    expect(sum([2, "hi", 8, true])).toBe(10);
  });
  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs
  test("given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    expect(sum(["hi", true, null, undefined])).toBe(0);
  });
  // Extreme Cases
  test("given an array with Infinity and a number, returns Infinity", () => {
    expect(sum([Infinity, 1])).toBe(Infinity);
  });

  test("given an array with multiple Infinities, returns Infinity", () => {
    expect(sum([Infinity, Infinity])).toBe(Infinity);
  });

  test("given an array with NaN and a number, skips NaN and returns the sum of valid numbers", () => {
    expect(sum([NaN, 1])).toBe(1);
  });

  test("given an array with Infinity and -Infinity, returns NaN", () => {
    expect(sum([Infinity, -Infinity])).toBeNaN();
  });
});