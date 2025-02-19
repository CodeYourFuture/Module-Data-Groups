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
test.todo("given an empty array, returns 0")
describe('sum', () => {
    test('Given an empty array', () => {
        expect(sum([0])).toEqual(0)
    });

    test('Given an array with just one number', () => {
        expect(sum([1])).toEqual(1)
    });

    test('Given an array with decimal/float numbers', () => {
        expect(sum([0.1, 0.2, 0.3])).toEqual(0.6000000000000001)
    });
    
    test('Given an array containing non-number values', () => {
        expect(sum([1, 2, 'a',3])).toEqual(6)
    });

    test('Given an array with only non-number values', () => {
        expect(sum(['x', 'abc', 'a', 'hello'])).toEqual(0)
    });
});

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
