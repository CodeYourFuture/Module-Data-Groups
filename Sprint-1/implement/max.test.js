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

test("Empty array, should return `-Infinity`",() => {
    expect(findMax([])).toBe(-Infinity);
});

// ---------------------------------------------------------------------------------------------
// Given an array with one number
// When passed to the max function
// Then it should return that number

test("An array with one number, should return that number", () => {
    expect(findMax([92])).toBe(92);
});

// ---------------------------------------------------------------------------------------------
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("An array with both + and - numbers, should return the largest number overall", () => {
    expect(findMax([12, -20, 30, 0])).toBe(30);
});

// ---------------------------------------------------------------------------------------------
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

test("An array with just negative numbers, should return closest one to zero", () => {
    expect(findMax([-11, -21, -20, -7, -32, -10])).toBe(-7);
});

// ---------------------------------------------------------------------------------------------
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("An array with decimal numbers, should return the largest one", () => {
    expect(findMax([20.1, 30.2, 20.3, 30.70, 30.5, 20.82])).toBe(30.70);
});

// ---------------------------------------------------------------------------------------------
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("An array with non-numeric values, should return the max & ignore non-numerics", () => {
    expect(findMax([20, "pooriya", 52, "hello world", 76])).toBe(76);
});

// ---------------------------------------------------------------------------------------------
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

test("Given an array with only non-number values, it should return -Infinity", () => {
  expect(findMax(["hey", "hi", "hello", true])).toBe(-Infinity);
});