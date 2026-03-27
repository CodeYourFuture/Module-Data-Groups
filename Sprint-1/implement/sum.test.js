const sum = require("./sum.js");

describe("sum", () => {
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
    expect(sum([5])).toBe(5);
  });

  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  test("sums negative numbers correctly", () => {
    expect(sum([-5, -10, 15])).toBe(0);
  });

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  test("sums decimal numbers correctly", () => {
    expect(sum([1.5, 2.5, 3.5])).toBeCloseTo(7.5, 5);
  });

  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values
  test("ignores non-number values", () => {
    expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
  });

  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value
  test("returns 0 when array contains only non-number values", () => {
    expect(sum(["a", "b", "c"])).toBe(0);
  });

  test("handles floating point precision issues", () => {
    expect(sum([1.2, 0.6, 0.005])).toBeCloseTo(1.805, 5);
  });

  test("returns consistent result regardless of order", () => {
    const a = sum([1.2, 0.6, 0.005]);
    const b = sum([0.005, 0.6, 1.2]);

    expect(a).toBeCloseTo(b, 10);
  });

  test("ignores NaN and Infinity values", () => {
    expect(sum([10, NaN, 20, Infinity, -Infinity])).toBe(30);
  });

  test("returns 0 when only NaN and Infinity are present", () => {
    expect(sum([NaN, Infinity, -Infinity])).toBe(0);
  });

  test("does not treat numeric strings as numbers", () => {
    expect(sum([10, "20", 30])).toBe(40);
  });
});
