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
test("Should return 0 for empty array", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Should return the number itself for an array with one number", () => {
  expect(sum([5])).toEqual(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Should return the correct sum even when the array contains negative numbers", () => {
  expect(sum([-1, -2, -3])).toEqual(-6);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Should return the correct sum even when the array contains decimal numbers", () => {
    expect(sum([0.1, 0.2, 0.005])).toBeCloseTo(0.305);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("should return the sum of the numerical elements and ignore non-numerical values", () => {
    expect(sum(['hey', 10, 'hi', 60, 10])).toEqual(80);
})

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Should return 0 for an array with only non-numbers", () => {
    expect(sum(['hey', 'hi', 'hello'])).toEqual(0);
})

// Given an array with NaN and numbers
// When passed to the sum function
// Then it should ignore NaN and return the sum of the numbers
test("should ignore NaN and return the correct sum", () => {
  expect(sum([NaN, 1, 5])).toEqual(6);
});


// Given an array with Infinity and -Infinity
// When passed to the sum function
// Then it should return NaN (standard JS behavior for infinite subtraction)
test("should return NaN when summing Infinity and -Infinity", () => {
  expect(sum([Infinity, -Infinity])).toBeNaN();
});