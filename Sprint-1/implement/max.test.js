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
test("returns the largest number from positive and negative values", () => {
  expect(findMax([-10, -3, 0, 5, 2])).toBe(5);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("returns the closest to zero when all numbers are negative", () => {
  expect(findMax([-5, -1, -3])).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("returns the largest decimal number", () => {
  expect(findMax([1.1, 2.5, 0.9, 2.4])).toBe(2.5);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("ignores non-numeric values and returns the max number", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60);

  // CJ's feedback: Ensure numeric strings like "300" are ignored.
  // The function should not coerce strings into numbers during comparison.
  // In this case, 10 is the maximum because "300" is a string and should be skipped.
  expect(findMax(["300", 10, 2])).toBe(10);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return -Infinity (same as empty array behaviour)
test("returns -Infinity when array contains only non-numeric values", () => {
  expect(findMax(["a", "b", null])).toBe(-Infinity);
});
