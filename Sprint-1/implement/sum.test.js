/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:
describe("sum", () => {
    // Given an empty array
    // When passed to the sum function
    // Then it should return 0
    test("given an empty array, returns 0", () => {
        expect(sum([])).toBe(0);
    });

    // Given an array with just one number
    // When passed to the sum function
    // Then it should return that number

    test("given an array with just one number", () => {
        expect(sum([7])).toBe(7);
    });

    // Given an array containing negative numbers
    // When passed to the sum function
    // Then it should still return the correct total sum

    test("given an array containing negative numbers", () => {
        expect(sum([7, -6, 0, 8, 10, -5 ])).toBe(14);
        expect(sum([-7, -20, 8, 8, 10, -7])).toBe(-8);
    });

    // Given an array with decimal/float numbers
    // When passed to the sum function
    // Then it should return the correct total sum

    test("given an array containing negative numbers", () => {
        expect(sum([7, -6, 0, 8, 10, -5])).toBe(14);
        expect(sum([-7, -20, 8, 8, 10, -7])).toBe(-8);
    });

    // Given an array containing non-number values
    // When passed to the sum function
    // Then it should ignore the non-numerical values and return the sum of the numerical elements

        test("given an array containing non-number values, ignore the non-numerical values and return the sum of the numerical elements", () => {
        expect(sum([7, -6, , "Hello", "world", 0, 8, 10, -5])).toBe(14);
        expect(sum(["Seven", 2, 20, 8, 8, "Green", 10, -7])).toBe(41);
    });

    // Given an array with only non-number values
    // When passed to the sum function
    // Then it should return the least surprising value given how it behaves for all other inputs
    test("given an array containing non-number values, return the least surprising value given how it behaves for all other inputs", () => {
        expect(sum(["Hello", "world", "Happy"])).toBe("Happy");
        expect(sum(["Seven", "Odd", "True", "Love"])).toBe("Love");
    });
});