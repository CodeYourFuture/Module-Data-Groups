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
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with positive and negative numbers, returns the largest number", () => {
  expect(findMax([-10, 5, -3, 20, 8])).toBe(20);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with only negative numbers, returns the closest to zero", () => {
  expect(findMax([-8, -3, -15, -1])).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal", () => {
  expect(findMax([1.5, 3.14, 2.72, 3.13])).toBe(3.14);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, ignores them and returns the maximum number", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["hello", "world", true, null, {}])).toBe(-Infinity);
});
