/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

const sum = require("./sum.js");
describe("sum.js", () => {

    // Given an empty array
    // When passed to the sum function
    // Then it should return 0
    test('given an empty array, returns 0', () => {
        expect(sum([])).toBe(0);
    });

    // Given an array with just one number
    // When passed to the sum function
    // Then it should return that number
    test('given an array with just one number, it should return that number', () => {
        expect(sum([100])).toBe(100);
    });

    // Given an array containing negative numbers
    // When passed to the sum function
    // Then it should still return the correct total sum
    test('given an array containing negative numbers, it should still return the correct total sum', () => {
        expect(sum([-5, 7, -12, -6, 1, 3, -20])).toBe(-32);
    });

    // Given an array with decimal/float numbers
    // When passed to the sum function
    // Then it should return the correct total sum
    test('given an array with decimal/float numbers, it should return the correct total sum', () => {
        expect(sum([1.4, 1.75, 2.51, 3.523])).toBeCloseTo(9.183);
    });

    // Given an array containing non-number values
    // When passed to the sum function
    // Then it should ignore the non-numerical values and return the sum of the numerical elements
    test('given an array containing non-number values, it should ignore the non-numerical values and return the sum of the numerical elements', () => {
        expect(sum(["=14", "#wd40", -1.2, "3em0", 10, "!o"])).toBe(8.8);
    });

    // Given an array with only non-number values
    // When passed to the sum function
    // Then it should return the least surprising value given how it behaves for all other inputs
    test('given an array with only non-number values, it should return the least surprising value given how it behaves for all other inputs', () => {
        expect(sum(["banana", null, undefined, Infinity, -Infinity, {}, []])).toBe(0);
    });
});

test('correctly compares floating point sum within a small margin using toBeCloseTo', () => {
    expect(1.2 + 0.6 + 0.005).toBeCloseTo(1.805, 3);
    expect(0.005 + 0.6 + 1.2).toBeCloseTo(1.805, 3);
});