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
test.todo("given an empty array, returns -Infinity");
test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test.todo("given an array with one number, returns that number");
test("given an array with one number, returns that number", () => {
    expect(findMax([7842])).toBe(7842);
    expect(findMax([337])).toBe(337);
    expect(findMax([1])).toBe(1);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test.todo("given an array with both positive and negative numbers, returns the largest number overall");
test("given an array with both positive and negative numbers, returns the largest number overall", () => {
    expect(findMax([-10, 0, 5, -3, 8, 2])).toBe(8);
    expect(findMax([-20, -5, -1, -15])).toBe(-1);
    expect(findMax([3, 7, 2, 9, 4])).toBe(9);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test.todo("given an array with just negative numbers, returns the closest one to zero");
test("given an array with just negative numbers, returns the closest one to zero", () => {
    expect(findMax([-8, -3, -15, -1, -7])).toBe(-1);
    expect(findMax([-50, -20, -30, -10])).toBe(-10);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test.todo("given an array with decimal numbers, returns the largest decimal number");
test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.5, 2.3, 0.7, 3.9, 2.8])).toBe(3.9);
    expect(findMax([-1.2, -0.5, -3.4, -0.1])).toBe(-0.1);
    expect(findMax([0.1, 0.01, 0.001, 0.0001])).toBe(0.1);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test.todo("given an array with non-number values, returns the max and ignores non-numeric values");
test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
    expect(findMax([10, 'hello', 25, null, 15])).toBe(25);
    expect(findMax(['world', -5, -10, undefined, -2])).toBe(-2);
    expect(findMax([3.5, 'test', 4.2, {}, 2.8])).toBe(4.2);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test.todo("given an array with only non-number values, returns -Infinity");
test("given an array with only non-number values, returns -Infinity", () => {
    expect(findMax(['a', 'b', 'c'])).toBe(-Infinity);
    expect(findMax([null, undefined, {}])).toBe(-Infinity);
    expect(findMax([true, false, []])).toBe(-Infinity);
});