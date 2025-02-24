/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

test("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
});

test("given an array with only one number, returns that number", () => {
    expect(sum([1])).toEqual(1);
});

test("given an array containing negative integers, returns the correct sum", () => {
    expect(sum([1,-4,2])).toEqual(-1);
});

test("given an array with decimal/float elements, returns the correct value", () => {
    expect(sum([1.2,1.8,3,-2,0.5])).toEqual(4.5);
});

test("given an array containing non number value, returns the correct value by skipping the non numeric values", () => {
    expect(sum(['a',false,3,-2,0.5])).toEqual(1.5);
});

test("given an array with only non numeric value, returns 0", () => {
    expect(sum(['bob','x'])).toEqual(0);
});






// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

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
