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
    expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, should return that number", () => {
    expect(findMax([5])).toEqual(5);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("an array with both positive and negative numbers, it should return the largest number overall", () => {
    expect(findMax([12, -3, -20, 0, 7])).toEqual(12);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, it should return the closest one to zero", () => {
    expect(findMax([-12, -3, -20, -10, -7])).toEqual(-3);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, it should return the largest decimal number", () => {
    expect(findMax([0.1, -0.5, 7.4, -8.9])).toEqual(7.4);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given aan array with non-number values, it should return the max and ignore non-numeric values", () => {
    expect(findMax([12, -3, {}, "33", true, -20, 0, "q", 7, null])).toEqual(12);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it should return the least surprising value given how it behaves for all other inputs", () => {
    expect(findMax(["12", "-3", {}, "33", true, "-20", "0", "q", "7", null])).toEqual(33);
});
