/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

describe("sum", () => {
  test("Return 0 for empty array", () => {
    expect(sum([])).toEqual(0);
  });

  test("Return same number with one value array", () => {
    expect(sum([5])).toEqual(5);
  });

  test("Return sum for array containing negative numbers", () => {
    expect(sum([2, -5, 0, 9, -10, 15])).toEqual(11);
  });

  test("Return sum for decimal/float numbers array", () => {
    expect(sum([2, 5.5, 0, 9, 10.75])).toEqual(27.25);
  });

  test("Ignore non-numeric values with non-number values array", () => {
    expect(sum([-3, 6, "a", 1, "abc", 2])).toEqual(6);
  });

  test("return 0 with all non-number values", () => {
    expect(sum(["abc", "h", "a", "r", "b"])).toEqual(0);
  });
});

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
//test.todo("given an empty array, returns 0");

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
