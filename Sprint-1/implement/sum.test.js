/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

describe("sum", () => {
    // Given an empty array
    // When passed to the sum function
    // Then it should return 0
    it("empty array should return 0", () => {
        const value = sum([]);
        expect(value).toEqual(0);
    });
    // Given an array with just one number
    // When passed to the sum function
    // Then it should return that number
    it("array with one number should return this number", () => {
        const value = sum([7]);
        expect(value).toEqual(7);
    });
    // Given an array containing negative numbers
    // When passed to the sum function
    // Then it should still return the correct total sum
    it("array with negative numbers should return correct sum", () => {
        const value = sum([-7, -2, -1]);
        expect(value).toEqual(-10);
    });
    // Given an array with decimal/float numbers
    // When passed to the sum function
    // Then it should return the correct total sum
    it("array with decimal/float numbers should return correct sum", () => {
        const value = sum([7.1, 2.5, 0.6]);
        expect(value).toEqual(10.2);
    });
    // Given an array containing non-number values
    // When passed to the sum function
    // Then it should ignore the non-numerical values and return the sum of the numerical elements
    it("array with non-number values should return  sum of numerical elements only", () => {
        const value = sum([7, null, 2.5, 'string', 0]);
        expect(value).toEqual(9.5);
    });
    // Given an array with only non-number values
    // When passed to the sum function
    // Then it should return the least surprising value given how it behaves for all other inputs
    it("array with only non-number values should return  sum of  the least surprising values", () => {
        const value = sum(['7', null, '2.5', 'string', '0']);
        expect(value).toEqual(9.5);
    });
});
