const invert = require("./invert.js");

describe("invert", () => {
  // Given an object with one key-value pair
  // When invert is called with this object
  // Then it should return an object with the key and value swapped
  test("invert swaps key and value for single pair", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  // Given an object with multiple key-value pairs
  // When invert is called with this object
  // Then it should return an object with the keys and values swapped
  test("invert swaps keys and values for multiple pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  // Given an object with string values
  // When invert is called with this object
  // Then it should return an object with the keys and values swapped
  test("invert swaps keys and values for string values", () => {
    expect(invert({ x: "apple", y: "banana" })).toEqual({
      apple: "x",
      banana: "y",
    });
  });

  // Given an object with mixed value types
  // When invert is called with this object
  // Then it should return an object with the keys and values swapped
  test("invert swaps keys and values for mixed value types", () => {
    expect(invert({ a: 1, b: "two", c: 3 })).toEqual({
      1: "a",
      two: "b",
      3: "c",
    });
  });
});
