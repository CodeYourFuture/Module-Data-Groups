const findMax = require("./max.js");

describe("findMax function", () => {

  // Test 1: empty array
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity);
  });

  // Test 2: array with one number
  test("given an array with one number, returns that number", () => {
    expect(findMax([42])).toBe(42);
  });

  // Test 3: array with positive and negative numbers
  test("returns the largest number from mixed positive and negative numbers", () => {
    expect(findMax([3, -2, 7, -10, 5])).toBe(7);
  });

  // Test 4: array with only negative numbers
  test("returns the closest number to zero for negative numbers", () => {
    expect(findMax([-10, -2, -30])).toBe(-2);
  });

  // Test 5: array with decimal numbers
  test("returns the largest decimal number", () => {
    expect(findMax([1.1, 2.5, 2.49])).toBe(2.5);
  });

  // Test 6: array with non-number values
  test("ignores non-numeric values and returns the largest number", () => {
    expect(findMax([10, "apple", 20, null, 5])).toBe(20);
  });

  // Test 7: array with only non-number values
  test("array with only non-number values returns -Infinity", () => {
    expect(findMax(["a", null, "b"])).toBe(-Infinity);
  });

});
