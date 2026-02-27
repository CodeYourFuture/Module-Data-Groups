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

test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
});
// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, return that number", () => {
    expect(sum([5])).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, return the correct total sum", () => {
    expect(sum([5, -3, 9, 2, -1])).toBe(12);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array containing decimal/float numbers the correct total sum", () => {
    expect(sum([5.1, 3.2, 6.5])).toBe(14.8);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, return the sum of the numerical elements", () => {
    expect(sum([5, null, '6', 3])).toBe(8);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, return return the least surprising value given how it behaves for all other inputs", () => {
    expect(sum(['5', undefined, true])).toBe(0);
});
