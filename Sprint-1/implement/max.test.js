const findMax = require("./max.js");

describe("findMax", () => {
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity);
  });

  test("given an array with one number, returns that number", () => {
    expect(findMax([42])).toBe(42);
  });

  test("given an array with both positive and negative numbers, returns the largest number overall", () => {
    expect(findMax([-10, 50, 0, -25, 30])).toBe(50);
  });

  test("given an array with just negative numbers, returns the closest one to zero", () => {
    expect(findMax([-30, -5, -100, -12])).toBe(-5);
  });

  test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.5, 3.75, 2.1, 3.74])).toBe(3.75);
  });

  test("given an array containing a value that isn't a number, throws an Error", () => {
    expect(() => findMax(["hey", 10, "hi", 60, 10])).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });

  test("given something that isn't an array at all, throws an Error", () => {
    expect(() => findMax("hey")).toThrow(
      new Error("findMax requires an array of numbers")
    );
    expect(() => findMax(42)).toThrow(
      new Error("findMax requires an array of numbers")
    );
    expect(() => findMax()).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });
});