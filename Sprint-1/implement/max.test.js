/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

describe("findMax", () =>{

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
// test.todo("given an empty array, returns -Infinity");
    test("given an empty array, returns -Infinity", () => {
        expect(findMax([])).toEqual(-Infinity);
    });

// Given an array with one number
// When passed to the max function
// Then it should return that number
    test("Given an array with one number, it returns that number", () => {
        expect(findMax([7])).toEqual(7);
        expect(findMax([-3])).toEqual(-3);
    });

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
    test("Given an array with both positive and negative numbers, it returns the largest number overall", () => {
        expect(findMax([-1, 3, 1, 10, -4, 6])).toEqual(10);
    });

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
    test("Given an array with negative numbers, it returns the closest one to zero", () => {
        expect(findMax([-51, -12, -22, -8, -13])).toEqual(-8);
    });

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
    test("Given an array with decimal numbers, it returns the largest decimal number", () => {
        expect(findMax([14.7, 1.43, 87.45, 6.432])).toEqual(87.45);
    });

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
    test("Given an array with non-number values, It returns the max and ignores non-numeric values", () => {
        expect(findMax([5, "hello", null, 10, undefined, 3])).toEqual(10);
    });

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
    test("Given an array with only non-number values, it returns the least surprising value", () => {
        expect(findMax(["Hello", {}, null, undefined])).toEqual(-Infinity);
    });

});