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
    it("empty array should return -Infinity", () => {
        const value = findMax([]);
        expect(value).toEqual(-Infinity);
    });  
    // Given an array with one number
    // When passed to the max function 
    // Then it should return that number
    it("array with one number should return that number", () => {
        const value = findMax([7]);
        expect(value).toEqual(7);
    });  
    // Given an array with both positive and negative numbers
    // When passed to the max function
    // Then it should return the largest number overall
    it("array with with both positive and negative numbers should return the largest number", () => {
        const value = findMax([-7, 2, 13, -21]);
        expect(value).toEqual(13);
    }); 
    // Given an array with just negative numbers
    // When passed to the max function
    // Then it should return the closest one to zero
    it("array with just negative numbers should return the closest one to zero", () => {
        const value = findMax([-7, -2, -13, -21]);
        expect(value).toEqual(-2);
    }); 
    // Given an array with decimal numbers
    // When passed to the max function
    // Then it should return the largest decimal number
    it("array with decimal numbers should return the largest decimal number", () => {
        const value = findMax([1.2, 4.0, 0.7, 5.9]);
        expect(value).toEqual(5.9);
    }); 
    // Given an array with non-number values
    // When passed to the max function
    // Then it should return the max and ignore non-numeric value
    it("array with non-number values should return the max and ignore non-numeric value", () => {
        const value = findMax([1, 4,'non', null, '7', 0, 5]);
        expect(value).toEqual(5);
    }); 
    // Given an array with only non-number values
    // When passed to the max function
    // Then it should return the least surprising value given how it behaves for all other inputs
    it("array with only non-number values should return the least surprising value", () => {
        const value = findMax(['1', '4','non', null, '7', '0', '5']);
        expect(value).toEqual(7);
    }); 
});
