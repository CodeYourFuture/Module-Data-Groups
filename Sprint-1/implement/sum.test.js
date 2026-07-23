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
test.todo("given an empty array, returns 0");

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

describe("sum function", () => {
  // Given an empty array
  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
  });

  // Given an array with just one number
  test("given an array with just one number, returns that number", () => {
    expect(sum([42])).toBe(42);
  });

  // Given an array containing negative numbers
  test("given an array containing negative numbers, returns the correct total sum", () => {
    expect(sum([10, -5, 20, -15])).toBe(10);
  });

  // Given an array with decimal/float numbers
  test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([1.5, 2.25, 3.25])).toBe(7);
  });

  // Given an array containing non-number values
  test("given an array containing non-number values, ignores non-numerical values", () => {
    expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
    expect(sum([10, true, null, undefined, NaN, 20])).toBe(30);
  });

  // Given an array with only non-number values
  test("given an array with only non-number values, returns 0", () => {
    expect(sum(["apple", "banana", true, null])).toBe(0);
  });

  // Edge case: Non-array inputs
  test("given non-array inputs, returns 0", () => {
    expect(sum(null)).toBe(0);
    expect(sum("not an array")).toBe(0);
  });
});
