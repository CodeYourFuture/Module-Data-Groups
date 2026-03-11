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
test("given an array with one number", () => {
  expect(findMax([5])).toBe(5);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given positive and negative numbers", () => {
  expect(findMax([-10, 20, 5, -2])).toBe(20);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given only negative numbers", () => {
  expect(findMax([-10, -3, -50, -1])).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given decimal numbers", () => {
  expect(findMax([1.2, 5.7, 3.3])).toBe(5.7);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("ignores non-number values", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value
test("only non-number values returns -Infinity", () => {
  expect(findMax(["a", "b", "c"])).toBe(-Infinity);
});