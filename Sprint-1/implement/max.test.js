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

test("given an empty array, returns -Infinity", () => {
    const currentOutput = findMax([]);
    const targetOutput = -Infinity;

    expect(currentOutput).toEqual(targetOutput);
    });

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("given an array with one number, returns that number", () => {
    const currentOutput = findMax([42]);
    const targetOutput = 42;

    expect(currentOutput).toEqual(targetOutput);
});


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("given an array with positive and negative numbers, returns the largest", () => {
    const currentOutput = findMax([-25, 5, 20, -3, 15]);
    const targetOutput = 20;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

test("given an array of only negative numbers, returns the closest to zero", () => {
    const currentOutput = findMax([-50, -3, -20, -10]);
    const targetOutput = -3;

    expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

 test("given an array of decimal numbers, returns the largest decimal", () => {
    const currentOutput = findMax([1.1, 3.5, 2.9, 3.4]);
    const targetOutput = 3.5;

    expect(currentOutput).toEqual(targetOutput);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("given an array with non-number values, returns correct max (ignoring non-numbers)", () => {
    const currentOutput = findMax([10, "hi", 50, true, 3]);
    const targetOutput = 50;

    expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -Infinity", () => {
    const currentOutput = findMax(["a", null, undefined, {}, [], true]);
    const targetOutput = -Infinity;

    expect(currentOutput).toEqual(targetOutput);
});
