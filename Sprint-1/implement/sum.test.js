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
// test.todo("given an empty array, returns 0")

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

// Test: Empty array
test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
});

// Test: Single number
test("given an array with one number, returns that number", () => {
    expect(sum([42])).toBe(42);
});

// Test: Array with positive and negative numbers
test("given an array with positive and negative numbers, returns the correct sum", () => {
    expect(sum([10, -5, 20, -10])).toBe(15);
});

// Test: Array with decimal numbers
test("given an array with decimal numbers, returns the correct sum", () => {
    expect(sum([1.5, 2.5, 3.5])).toBe(7.5);
});

// Test: Array with non-number values
test("given an array with non-number values, ignores them and returns the sum", () => {
    expect(sum(["a", 10, "b", 20, null, 30])).toBe(60);
});

// Test: Array with only non-number values
test("given an array with only non-number values, returns 0", () => {
    expect(sum(["hello", true, {}, null])).toBe(0);
});
