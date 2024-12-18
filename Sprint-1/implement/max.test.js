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
// Delete this test.todo and replace it with a test.
test.todo("given an empty array, returns -Infinity"), () => {
    const arr = [];
    const maxNumber = findMax(numbers, numbers.length)

    expect(maxNumber).toEqual(-Infinity)
}

// Given an array with one number
// When passed to the max function
// Then it should return that number 

test.todo("given an with one number"), () => {
    const arr = [a, b, c, d, 56];
    const maxNumber = findMax(numbers, numbers.length)

    expect(maxNumber).toEqual(-56)
}

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test.todo("returns absolute values of an array"), () => {
    const arr = [-3, 7, 4, -89, -90];

    const maxNumber = findMax(numbers, numbers.length)

    expect(maxNumber).toEqual(-80)
}

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

test.todo("given an array with negative numbers"), () => {
    const arr = [-30, -45, -3, -60, 56];
    const maxNumber = findMax(numbers, numbers.length)

    expect(maxNumber).toEqual(-60)
}


// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test.todo("given an array with decimal numbers"), () => {
    const arr = [3.4, 4.5, 8.9, 7.8, 5.6];
    const maxNumber = findMax(numbers, numbers.length)

    expect(maxNumber).toEqual(-7.8)
}


// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test.todo("given an array with non-number values"), () => {
    const arr = [a, b, c, d, 56];
    const maxNumber = findMax(numbers, numbers.length)

    expect(maxNumber).toEqual(56)
}


// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

test.todo("given an array with only non-number values"), () => {
    const arr = [a, b, c, d, r];
    const maxNumber = findMax(numbers, numbers.length)

    expect(maxNumber).toEqual(-null)
}

