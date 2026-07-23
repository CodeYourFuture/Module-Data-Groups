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
test("given an empty array, returns 0", function() {
    expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, returns that number", function() {
   expect(sum([1])).toBe(1);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given a negative array, returns the sum", function() {
    expect(sum([-4, -2, -1])).toBe(-7);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given a decimal array, returns the sum", function() {
  expect(sum([1.9, 3.1, 2.7])).toBe(7.7);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given a non-numeric array, returns the sum ignoring non-numerics", function() {
    expect(sum(["c", 3, 4, "hi", 7])).toBe(7);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test("given an array of non-numeric value, returns undefined", function() {
    expect(sum(["b", "hello", "y"])).toBe(undefined);
});