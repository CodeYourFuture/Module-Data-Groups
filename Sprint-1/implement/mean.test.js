const calculateMean = require("./mean.js");

describe("calculateMean", () => {
  test("given an array of numbers, returns their mean", () => {
    expect(calculateMean([1, 2, 6])).toBe(3);
  });

  test("given an array with a single number, returns that number", () => {
    expect(calculateMean([10])).toBe(10);
  });

  test("given an array containing negative or decimal numbers, returns the correct mean", () => {
    expect(calculateMean([-10, 20, -4])).toBe(2);
    expect(calculateMean([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
  });

  test("given an empty array, throws Error('calculateMean requires a non-empty array')", () => {
    expect(() => calculateMean([])).toThrow(
      new Error("calculateMean requires a non-empty array")
    );
  });

  test("given a value that isn't an array, throws Error('calculateMean requires an array of numbers')", () => {
    expect(() => calculateMean("banana")).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
    expect(() => calculateMean(42)).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
    expect(() => calculateMean(null)).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
    expect(() => calculateMean({})).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
  });

  test("given no argument at all, throws Error('calculateMean requires an array of numbers')", () => {
    expect(() => calculateMean()).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
  });

  test("given an array containing a non-number value, throws Error('calculateMean requires an array of numbers')", () => {
    expect(() => calculateMean([1, "2", 3])).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
  });
});