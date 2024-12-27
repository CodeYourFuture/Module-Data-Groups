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
// Test Case 2: Given an array with just one number, returns that number
test("given an array with just one number, returns that number", () => {
    expect(sum([42])).toBe(42);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
// Test Case 3: Given an array containing negative numbers, returns the correct total sum
test("given an array containing negative numbers, returns the correct total sum", () => {
    expect(sum([-10, -20, 30])).toBe(0);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
// Test Case 4: Given an array with decimal/float numbers, returns the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([10.5, 20.5, 30.0])).toBe(61.0);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
// Test Case 5: Given an array containing non-number values, ignores non-numerical values and returns the sum of numerical elements
test("given an array containing non-number values, ignores non-numerical values", () => {
    expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
// Test Case 1: Given an empty array, returns 0
// Test Case 6: Given an array with only non-number values, returns 0
test("given an array with only non-number values, returns 0", () => {
    expect(sum(['hey', 'hi', 'hello'])).toBe(0);
});








