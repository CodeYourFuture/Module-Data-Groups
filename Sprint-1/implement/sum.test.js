/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const { sum, closeEnough } = require("./sum.js");
// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("Given an empty array, should return 0", () => {
    expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with just one number, should return that number", () => {
    expect(sum([1])).toEqual(1);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array containing negative numbers, should still return the correct total sum", () => {
    const input = [-1, -5, -3];
    const output = -9;
    expect(sum(input)).toEqual(output);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers, should return the correct total sum", () => {
    const input = [1.5, 2.4, 3.5];
    const result = sum(input);
    const expected = 7.4;
    expect(closeEnough(result, expected)).toBe(true);  
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array containing non-number values, should return the sum of the numerical elements only", () => {
    const input = [1.5, "2.4", 3.5, "hello", 2];
    const output = 7;
    expect(sum(input)).toEqual(output);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test("Given an array with only non-number values, should return Infinity", () => {
    const input = ["2.4", "hello", null, undefined];
    const output = Infinity;
    expect(sum(input)).toEqual(output);
});