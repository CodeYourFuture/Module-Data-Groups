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

test("given an empty array, returns 0", () => {
expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("given an array with one number, returns that number", () => {
expect(sum([5])).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("given an array with negative numbers, returns correct sum", () => {
expect(sum([-5, -10, 15])).toBe(0);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("given an array with decimal numbers, returns correct sum", () => {
expect(sum([1.5, 2.5, 3.0])).toBe(7.0);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("given an array with numbers and non-numbers, returns sum of numbers only", () => {
expect(sum(["hello", 10, "world", 20, null, 30])).toBe(60);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test("given an array with only non-number values, returns 0", () => {
expect(sum(["a", "b", null, undefined, {}, []])).toBe(0);
});


