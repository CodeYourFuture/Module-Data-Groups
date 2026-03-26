const sum = require("./sum.js");

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, returns that number", () => {
    expect(sum([42])).toBe(42);
    expect(sum([-10])).toBe(-10);
    expect(sum([0])).toBe(0);
    expect(sum([3.14])).toBe(3.14);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, returns the correct total sum", () => {
    expect(sum([10, -5, 20, -3])).toBe(22);
    expect(sum([-10, -20, -30])).toBe(-60);
    expect(sum([5, -5, 10, -10])).toBe(0);
    expect(sum([-1, -2, -3, -4])).toBe(-10);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([1.5, 2.5, 3.0])).toBe(7);
    expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
    expect(sum([1.99, 2.99, 3.99])).toBeCloseTo(8.97);
    expect(sum([-1.5, 2.5, -1.0])).toBe(0);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, ignores non-numerical values and returns sum of numerical elements", () => {
    expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
    expect(sum([20, 'abc', 30, 'def', 40])).toBe(90);
    expect(sum(['x', 'y', 'z', 100, 50])).toBe(150);
    expect(sum([true, 5, false, 10, null, 15])).toBe(30);
    expect(sum([{}, [], 25, 'string', 35])).toBe(60);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns 0", () => {
    expect(sum(['hey', 'hi', 'hello'])).toBe(0);
    expect(sum([true, false, null])).toBe(0);
    expect(sum([{}, [], 'string', undefined])).toBe(0);
    expect(sum(['a', 'b', 'c'])).toBe(0);
});
