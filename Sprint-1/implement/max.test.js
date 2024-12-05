/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");



// Test Case 1: Given an empty array, it should return -Infinity
test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity);
});

// Test Case 2: Given an array with one number, it should return that number
test("given an array with one number, returns that number", () => {
    expect(findMax([42])).toBe(42);
});

// Test Case 3: Given an array with positive and negative numbers, it should return the largest number
test("given an array with both positive and negative numbers, returns the largest number", () => {
    expect(findMax([-10, 20, 15, -5])).toBe(20);
});

// Test Case 4: Given an array with only negative numbers, it should return the closest one to zero
test("given an array with only negative numbers, returns the largest (closest to zero)", () => {
    expect(findMax([-30, -10, -20, -5])).toBe(-5);
});

// Test Case 5: Given an array with decimal numbers, it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([0.1, 2.5, 3.14, 1.618])).toBe(3.14);
});

// Test Case 6: Given an array with non-number values, it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max ignoring non-numeric values", () => {
    expect(findMax(["hello", 10, 50, null, 20])).toBe(50);
});

// Test Case 7: Given an array with only non-number values, it should return -Infinity
test("given an array with only non-number values, returns -Infinity", () => {
    expect(findMax(["hello", true, null])).toBe(-Infinity);
});

