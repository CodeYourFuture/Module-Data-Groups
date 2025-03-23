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
test.todo("given an array with just one number, return that number");

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test.todo("given an array with negative numbers, return correct total sum");

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test.todo(
  "given an array with decimal/float numbers, return correct total sum"
);

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test.todo(
  "given an array containing non-number values, ignore non numeric and return correct total sum for numerical elements"
);

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test.todo(
  "given an array with only number values, return the least surprising value given how it behaves for all other inputs"
);

describe("sum", () => {
  test("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
  });

  test("given an array with just one number, return that number", () => {
    expect(sum([5])).toEqual(5);
    expect(sum([-3])).toEqual(-3);
  });

  test("given an array with negative numbers, return correct total sum", () => {
    expect(sum([-1, -2, -3])).toEqual(-6);
    expect(sum([-10, 5, -5])).toEqual(-10);
  });

  test("given an array with decimal/float numbers, return correct total sum", () => {
    expect(sum([1.5, 2.5, 3.5])).toEqual(7.5);
    expect(sum([-1.1, -2.2, 3.3])).toBeCloseTo(0); //using to be close to to fix issue with unpredicted decimal points
  });

  test("given an array containing non-number values, ignore non numeric and return correct total sum for numerical elements", () => {
    expect(sum([1, "a", 2, null, 3])).toEqual(6);
    expect(sum([true, false, 4, "5", 6])).toEqual(10);
  });

  test("given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    expect(sum(["a", true, null, undefined])).toEqual(0);
  });
});
