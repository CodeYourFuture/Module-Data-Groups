const sum = require("./sum");

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, returns that number", () => {
    expect(sum([42])).toBe(42);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, returns the correct sum", () => {
    expect(sum([-10, -20, 30])).toBe(0);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal numbers, handles precision correctly", () => {
    const result = sum([1.1, 1.1, 1.1]);
    const expected = 3.3;
    const epsilon = 0.00001; // Small tolerance for floating-point issues
    expect(Math.abs(result - expected)).toBeLessThan(epsilon);
});

// Given an array with a mix of numbers and non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with non-number values, ignores non-number values", () => {
    expect(sum(["hello", 10, "world", 20, 30])).toBe(60);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return 0
test("given an array with only non-number values, returns 0", () => {
    expect(sum(["foo", "bar", {}, []])).toBe(0);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with multiple decimal numbers, returns the correct sum", () => {
    expect(sum([1.5, 2.5, 3.5])).toBe(7.5);
});
