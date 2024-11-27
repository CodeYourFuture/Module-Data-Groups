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
    // Delete this test.todo and replace it with a test.
    test("given an empty array, returns -Infinity", () => {
        expect(findMax([])).toBe(-Infinity);
    });

    // Given an array with one number
    // When passed to the max function
    // Then it should return that number
    test("given an array with one number, return that number", () => {
        expect(findMax([7])).toBe(7);
        expect(findMax([49])).toBe(49);
    });

    // Given an array with both positive and negative numbers
    // When passed to the max function
    // Then it should return the largest number overall
    test("given an array with both positive and negative numbers, return the largest number overall", () => {
        expect(findMax([7, -7, 58, 0, 23, -100])).toBe(58);
    });

    // Given an array with just negative numbers
    // When passed to the max function
    // Then it should return the closest one to zero
    test("given an array with just negative numbers, return the closest one to zero", () => {
        expect(findMax([-600, -7, -2, -4, -100])).toBe(-2);
        expect(findMax([-78, -13, -2, -1, -160])).toBe(-1);
    });

    // Given an array with decimal numbers
    // When passed to the max function
    // Then it should return the largest decimal number

    test("given an array with decimal numbers, return the largest decimal number", () => {
        expect(findMax([2.30, 5.9, 41.1, 9.9, 3.7])).toBe(41.1);
        expect(findMax([6.30, 3.3, 77.1, 9.2, 8.70])).toBe(77.1);
    });

    // Given an array with non-number values
    // When passed to the max function
    // Then it should return the max and ignore non-numeric values

    test("given an array with decimal numbers, return the largest decimal number", () => {
        expect(findMax([7, 5.9, 41.1, 4, "hello"])).toBe(41.1);
        expect(findMax([8, 4, "world", 9.2, 8.30])).toBe(9.2);
    });

    // Given an array with only non-number values
    // When passed to the max function
    // Then it should return the least surprising value given how it behaves for all other inputs
    test("given an array with only non-number values, the least surprising value given how it behaves for all other inputs", () => {
        expect(findMax(["Tom", "Red", "hello"])).toBe("hello");
        expect(findMax(["6", "Green", "hello", "World"])).toBe("World");
    });
});
