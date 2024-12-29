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
test.todo("given an empty array, returns 0")

describe("sum", () => {
    test("returns 0 for an empty array", () => {
      expect(sum([])).toBe(0);
    });
// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("returns the number when the array has one number", () => {
    expect(sum([10])).toBe(10);
  });
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other input


  test("returns the correct sum for an array with negative numbers", () => {
    expect(sum([10, -20, 30, -10])).toBe(10);
  });

  test("returns the correct sum for an array with decimal/float numbers", () => {
    expect(sum([1.5, 2.5, 3.5])).toBe(7.5);
  });

  test("ignores non-number values and sums only numerical elements", () => {
    expect(sum(['hello', 10, 'world', 20, 30])).toBe(60);
  });

  test("returns 0 for an array with only non-number values", () => {
    expect(sum(['hello', 'world', true, {}])).toBe(0);
  });
});
