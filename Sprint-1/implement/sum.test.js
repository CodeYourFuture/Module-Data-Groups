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


const sum = require("./sum");

describe("sum", () => {
  // Test for empty array
  test("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
  });

  // Test for array with just one number
  test("given an array with just one number, returns that number", () => {
    expect(sum([10])).toEqual(10);
    expect(sum([-5])).toEqual(-5);
  });

  // Test for an array with negative numbers
  test("given an array containing negative numbers, returns the correct total sum", () => {
    expect(sum([10, -5, 5])).toEqual(10); // 10 + (-5) + 5 = 10
    expect(sum([-10, -20, -30])).toEqual(-60); // -10 + (-20) + (-30) = -60
  });

  // Test for an array with decimal/float numbers
  test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([1.5, 2.5, 3.5])).toEqual(7.5); // 1.5 + 2.5 + 3.5 = 7.5
    expect(sum([1.1, -0.2, 3.2])).toEqual(4.1); // 1.1 + (-0.2) + 3.2 = 4.1
  });

  // Test for an array with non-number values
  test("given an array containing non-number values, it should ignore the non-numerical values and return the sum of the numerical elements", () => {
    expect(sum([10, 'hey', 20, 'hi', 30])).toEqual(60); // 10 + 20 + 30 = 60
    expect(sum([5, 'apple', 10, 'banana', 15])).toEqual(30); // 5 + 10 + 15 = 30
  });

  // Test for an array with only non-number values
  test("given an array with only non-number values, it should return 0", () => {
    expect(sum(['hey', 'hi', 'hello'])).toEqual(0);
    expect(sum(['a', 'b', 'c'])).toEqual(0);
  });
});
