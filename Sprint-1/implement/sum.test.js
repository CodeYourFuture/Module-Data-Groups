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

test("An empty array, should return 0", () => {
    expect(sum([])).toBe(0);
});

// ---------------------------------------------------------------------------------------------
// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("An arrat with just one number, should return that number", () => {
    expect(sum([20])).toBe(20);
});

// ---------------------------------------------------------------------------------------------
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("An array with + and - numbers, should return correct total sum", () => {
    expect(sum([20, -8, 7, -11, 3, 6])).toBe(17);
});

// ---------------------------------------------------------------------------------------------
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("An array with decimal or float numbers, should return correct sum", () => {
    expect(sum([20.3, 15.6, 71.8, 54.7])).toBe(162.4);
});

// ---------------------------------------------------------------------------------------------
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("An array with numeric & non-numeric values, should ignore the non-numerics and return the sum of the numerical elements", () => {
    expect(sum([14, -3, "pooriya", 16.3, "Hello World"])).toBe(27.3);
});

// ---------------------------------------------------------------------------------------------
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test("An array with just non-numeric values, should return 0", () => {
    expect(sum(["hello", "World", "pooriya", true])).toBe(0);
});