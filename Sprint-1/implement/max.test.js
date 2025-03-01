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
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("Given an array with one number, return that number", () => {
    expect(findMax([38])).toBe(38);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with both positive and negative numbers, return the largest number overall", () => {
    expect(findMax([-5, 40, 10, -32, 8])).toBe(40);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with just negative numbers, return the closest one to zero", () => {
    expect(findMax([-90, -20, -9, -34, -5])).toBe(-5);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.1, 3.3, 2.2, 4.4])).toBe(4.4);
  });

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max ignoring non-numeric values", () => {
    expect(findMax(["hello", 10, "world", 60, 5])).toBe(60);
  });

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -Infinity", () => {
    expect(findMax(["hello", "world", true, {}])).toBe(-Infinity);
  });
