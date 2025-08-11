/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

describe('find max', () => {
    // Given an empty array
    // When passed to the max function
    // Then it should return -Infinity
    test('given an empty array, it returns -Infinity', () => {
        expect(findMax([])).toEqual(-Infinity);
    });

// Given an array with one number
// When passed to the max function
// Then it should return that number
    test('given an array with one number, it returns that number', () => {
        expect(findMax([1])).toEqual(1)
    });
// // Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
    test('given an array with positive and negative integers, it returns the largest number overall', () => {
        expect(findMax([-1, 1])).toEqual(1)
    })
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
    test('given an array of negative integers, it returns the closes one to 0', () => {
        expect(findMax([-2,-1])).toEqual(-1)
    })
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
    test('given an array with decimal numbers, it returns the largest decimal number', () => {
        expect(findMax([0.97, 0.48, 0.2])).toEqual(0.97)
    })


// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
    test('given an array with non-number values, it returns the max and ignore non-numbers', () => {
        expect(findMax(['cat', 1, 5])).toEqual(5)
    })


    
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
    test('given an array with non-number values, it returns the max and ignore non-numbers', () => {
        expect(findMax(['cat', 1, 5])).toEqual(5)
    })
});










