/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

describe("sum", () => {

    test("Given an empty array, it should returns 0", () => {
        expect(sum([])).toEqual(0);
    });

    test("Given an array with just one number, it should return that number", () => {
        expect(sum([10])).toEqual(10);
    });

    test("Given an array containing negative numbers, it should still return the correct total sum", () => {
        expect(sum([-3, -10, -60, -10])).toEqual(-83);
    });

    test("Given an array with decimal/float numbers, it should return the correct total sum", () => {
        expect(sum([2.1, 34.9, 13.8, 4.7])).toEqual(55.5);
    });

    test("Given an array containing non-number values, it should ignore the non-numerical values and return the sum of the numerical elements", () => {
        expect(sum(['hey', 10, 'hi', 60, 10])).toEqual(80);
    });

    test("Given an array with only non-number values, it should return the least surprising value given how it behaves for all other inputs", () => {
        expect(sum(['A', '@', '&', 'd', '%'])).toEqual(0);
    });


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
