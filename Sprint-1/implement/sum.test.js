const sum = require("./sum.js");

describe("sum function", () => {

  // Test 1: empty array
  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
  });

  // Test 2: array with one number
  test("given an array with one number, returns that number", () => {
    expect(sum([42])).toBe(42);
  });

  // Test 3: array with positive and negative numbers
  test("returns the correct total sum for positive and negative numbers", () => {
    expect(sum([10, -5, 15, -3])).toBe(17);
  });

  // Test 4: array with decimal numbers
  test("returns the correct total sum for decimal/float numbers", () => {
    expect(sum([1.5, 2.3, 3.2])).toBeCloseTo(7.0); // Use toBeCloseTo for floating points
  });

  // Test 5: array with non-number values
  test("ignores non-numeric values and sums numerical elements", () => {
    expect(sum([10, "a", 20, null, 5])).toBe(35);
  });

  // Test 6: array with only non-number values
  test("returns 0 if there are no numeric elements", () => {
    expect(sum(["a", null, "b"])).toBe(0);
  });

});
