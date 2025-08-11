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
//test.todo("given an empty array, returns -Infinity");

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
    [
        { input: [30, 50, 10, 40], expected: [50]},
        { input: ['hey', 10, 'hi', 60, 10], expected: [60]},
        { input: [79], expected: [79]},


    ].forEach(({input, expected}) =>
        it(`return max number for [${input}]`,() => expect(findMax(input)).toEqual(expected))

    );
        [
        { input: [], expected: '-Infinity'},

    ].forEach(({input, expected}) =>
        it(`return -Infinity to empty array: [${input}]`,() => expect(findMax(input)).toEqual(expected))

    );
    [
        { input: [-3,5,8,34,-45,0], expected: [34]},

    ].forEach(({input, expected}) =>
        it(`an array with both positive and negative numbers should return the largest number overall [${input}]`,() => expect(findMax(input)).toEqual(expected))

    );
    [
        { input: [-34,-13,-65,-678,-45366], expected: [-13]},

    ].forEach(({input, expected}) =>
        it(`An array with just negative numbers should return the closest one to zero: [${input}]`,() => expect(findMax(input)).toEqual(expected))

    );
    [
        { input: [0.143,0.31426,0.81], expected: [0.81]},

    ].forEach(({input, expected}) =>
        it(`An array with decimal number should return the largest decimal number [${input}]`,() => expect(findMax(input)).toEqual(expected))

    );
    [
        { input: ['e','r','n','a','l','g','l'], expected: 'Family'},

    ].forEach(({input, expected}) =>
        it(`An array with only non-number values should return the least surprising value given how it behaves for all other inputs [${input}]`,() => expect(findMax(input)).toEqual(expected))

    );
}
);