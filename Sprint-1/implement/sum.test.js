/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

describe("sum", () => {

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
// test.todo("given an empty array, returns 0")
    test("given an empty array, returns 0", () => {
        expect(sum([])).toEqual(0);
    });

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
    test("given an array with just one number, it returns that number", () => {
        expect(sum([2])).toEqual(2);
    });

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
    test("Given an array with negative numbers, it returns correct total sum", () => {
        expect(sum([-12, 4, -7, 4])).toEqual(-11);
    });

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
    test("Given an array with decimal/float numbers, it returns correct total sum", () => {
        expect(sum([6.50, 12.30, 3.50])).toEqual(22.30);
    });

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
    test("Given an array containing non-number values, it ignores non numeric and return correct total sum for numerical elements", () => {
        expect(sum([3, "12", 3, "hello", null])).toEqual(6);
    });

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

    test("given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
        expect(sum(["a", true, null, undefined])).toEqual(0);
    });
});