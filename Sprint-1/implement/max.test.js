const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
    expect(findMax([42])).toBe(42);
    expect(findMax([-10])).toBe(-10);
    expect(findMax([0])).toBe(0);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, returns the largest number overall", () => {
    expect(findMax([30, 50, 10, 40])).toBe(50);
    expect(findMax([-5, 10, -20, 30])).toBe(30);
    expect(findMax([-100, -200, 0, 150])).toBe(150);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, returns the closest one to zero", () => {
    expect(findMax([-5, -10, -3, -8])).toBe(-3);
    expect(findMax([-1, -100, -50])).toBe(-1);
    expect(findMax([-0.5, -0.8, -0.1])).toBe(-0.1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.5, 2.7, 1.2, 3.8])).toBe(3.8);
    expect(findMax([-1.5, -2.7, -1.2, -0.5])).toBe(-0.5);
    expect(findMax([0.1, 0.01, 0.001])).toBe(0.1);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
    expect(findMax(['hey', 10, 'hi', 60, 10])).toBe(60);
    expect(findMax([20, 'abc', 30, 'def', 40])).toBe(40);
    expect(findMax(['x', 'y', 'z', 100, 50])).toBe(100);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -Infinity", () => {
    expect(findMax(['hey', 'hi', 'hello'])).toBe(-Infinity);
    expect(findMax([true, false, null])).toBe(-Infinity);
    expect(findMax([{}, [], 'string'])).toBe(-Infinity);
});
