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
  test("given an array with one number, returns that number", () => {
    expect(sum([15])).toBe(15);
  });

  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  test("given an array with negative numbers, returns the correct sum", () => {
    expect(sum([10, -6, 18, -10])).toBe(12);
  });

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([65.5, 8.45, 32.4, 97.36, 10])).toBe(213.71);
  });

  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements
  test("given an array with non-number values, ignores them and returns the sum of numerical elements", () => {
    expect(sum([10, "hello", 25, null, 5, undefined, {}, 15])).toBe(55);
  });

  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs
  test("given an array with only non-number values, returns 0", () => {
    expect(sum(["Great!", "hi", null, undefined, {}, []])).toBe(0);
  });
});
