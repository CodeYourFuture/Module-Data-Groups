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
test("empty array should return 0", () => expect(sum([])).toEqual(0));

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("array of single value should return that value", () =>
  expect(sum([3])).toEqual(3));

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("should return correct sum for negative and positive numbers", () =>
  expect(sum([-2, -4, 6])).toEqual(0));

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// use toBeCloseTo to account for floating point
test("should sum floats", () => expect(sum([0.1 + 0.2])).toBeCloseTo(0.3));

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("ignores non-numerical values in array", () => {
  expect(sum(["asd", { a: 12 }, [22, 33], 3, 3])).toEqual(6);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("array of all non-numbers should return 0", () => {
  expect(sum(["asdf", { a: 12 }, [22, 33]])).toEqual(0);
});
