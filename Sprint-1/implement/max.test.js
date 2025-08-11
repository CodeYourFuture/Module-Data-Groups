/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");



// Given an empty array
// When passed to the max function
// Then it should return -Infinity

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

describe("findMax", () => {
    test("Given an empty array,it should return -Infinity", () =>{
        expect(findMax([])).toEqual(Infinity)
    });
    test("Given an array with one number,it should return that number", () => {
        expect(findMax([10])).toEqual(10)
    })
    test("Given an array with both positive and negative numbers,it should return the largest number overall",() => {
        expect(findMax([2, -3, 6, -8])).toEqual(6)
    })
    test("Given an array with just negative numbers,it should return the closest one to zero", () => {
        expect(findMax([-2,-10,-4])).toEqual(-2)
    })
    test("Given an array with decimal numbers,it should return the largest decimal number", () => {
        expect(findMax([0.4, 1.5, 0.9])).toEqual(1.5)
    })
    test("Given an array with non-number values,it should return the max and ignore non-numeric values", () => {
        expect(findMax([10, "h", "hello", 9, 22, "world"])).toEqual(22)
    })
    test("Given an array with only non-number values,it should return the least surprising value given how it behaves for all other inputs", () => {
        expect(findMax(['hello'])).toEqual(undefined)
    })
})