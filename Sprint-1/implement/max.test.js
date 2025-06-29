/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");
describe("findMax", () => {


    // Given an empty array
    // When passed to the max function
    // Then it should return -Infinity
    // Delete this test.todo and replace it with a test.{input: [], expected: Infinity `
    test('given an empty array, returns -Infinity', () => {
        expect(findMax([])).toBe(-Infinity);
    });


    // Given an array with one number
    // When passed to the max function
    // Then it should return that number
    test('given an array with one number, it should return that number ', () => {
        expect(findMax([1])).toBe(1);
    });


    // Given an array with both positive and negative numbers
    // When passed to the max function
    // Then it should return the largest number overall
    test('given an array with both positive and negative numbers, it should return the largest number overall', () => {
        expect(findMax([-5, 7, -12, -6, 1, 3, -20])).toBe(7);
    });


    // Given an array with just negative numbers
    // When passed to the max function
    // Then it should return the closest one to zero
    test('given an array with just negative numbers, it should return the closest one to zero', () => {
        expect(findMax([-10, -15, -28, -17, -21, -32, -35])).toBe(-10);
    });

    // Given an array with decimal numbers
    // When passed to the max function
    // Then it should return the largest decimal number
    test('given an array with decimal numbers, it should return the largest decimal number', () => {
        expect(findMax([1.66, 0.927, 3.11, 1.4, 1.75, 2.51, 3.523])).toBe(3.523);
    });

    // Given an array with non-number values
    // When passed to the max function
    // Then it should return the max and ignore non-numeric values
    test('given an array with non-number values, it should return the max and ignore non-numeric values', () => {
        expect(findMax(["catch", "=14", "#wd40", -1.2, "3em0", "!o"])).toBe(-1.2);
    });

    // Given an array with only non-number values
    // When passed to the max function
    // Then it should return the least surprising value given how it behaves for all other inputs
    test('given an array with only non-number values, it should return the least surprising value given how it behaves for all other inputs', () => {
        expect(findMax(["apple", "banana", null, undefined, {}, [], NaN])).toBe(-Infinity);
    });
});

