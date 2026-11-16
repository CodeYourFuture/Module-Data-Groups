const sum = require("./sum.js");

describe("sum", () => {
  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
  });

  test("given an array with just one number, returns that number", () => {
    expect(sum([15])).toBe(15);
  });

  test("given an array containing negative numbers, returns the correct total sum", () => {
    expect(sum([-10, 25, -5, 10])).toBe(20);
  });

  test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([1.5, 2.25, 3.25])).toBeCloseTo(7);
  });

  test("given an array containing a value that isn't a number, throws an Error", () => {
    expect(() => sum(["hey", 10, "hi", 60, 10])).toThrow(
      new Error("sum requires an array of numbers")
    );
  });

  test("given something that isn't an array at all, throws an Error", () => {
    expect(() => sum("hey")).toThrow(
      new Error("sum requires an array of numbers")
    );
    expect(() => sum(42)).toThrow(
      new Error("sum requires an array of numbers")
    );
    expect(() => sum()).toThrow(
      new Error("sum requires an array of numbers")
    );
  });
});