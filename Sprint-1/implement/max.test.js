const findMax = require("./max.js");

describe("findMax", () => {
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
    expect(findMax([5])).toBe(5);
  });

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  test("returns the largest number from positive and negative numbers", () => {
    expect(findMax([-10, 20, -5, 15])).toBe(20);
  });

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
  test("returns the largest number among negative numbers", () => {
    expect(findMax([-10, -3, -50, -1])).toBe(-1);
  });

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
  test("returns the largest decimal number", () => {
    expect(findMax([1.2, 3.7, 2.5, 3.6])).toBe(3.7);
  });

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
  test("ignores non-number values (including numeric strings)", () => {
    expect(findMax(["hey", 10, "300", 60, 10])).toBe(60);
  });

  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs
  test("returns -Infinity when array has only non-number values", () => {
    expect(findMax(["a", "b", "c"])).toBe(-Infinity);
  });

  test("does not treat numeric strings as numbers", () => {
    expect(findMax([20, "300"])).toBe(20);
  });

  test("returns -Infinity when only numeric strings are present", () => {
    expect(findMax(["100", "200", "300"])).toBe(-Infinity);
  });

  test("ignores NaN and Infinity values", () => {
    expect(findMax([10, NaN, 50, Infinity, -Infinity])).toBe(50);
  });

  test("returns -Infinity when only NaN and Infinity are present", () => {
    expect(findMax([NaN, Infinity, -Infinity])).toBe(-Infinity);
  });
});
