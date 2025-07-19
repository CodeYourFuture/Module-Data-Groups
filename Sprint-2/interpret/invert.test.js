const invert = require("./invert");

describe("invert function", () => {
  // Test for { a: 1 }
  test("inverts object with single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  // Test for { a: 1, b: 2 }
  test("inverts object with multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  // Given an empty object
  // When passed to invert
  // Then it should return an empty object
  test("returns empty object for empty input", () => {
    expect(invert({})).toEqual({});
  });

  // Given an object with duplicate values
  // When passed to invert
  // Then it should keep the last key for duplicate values
  test("handles duplicate values by keeping last key", () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
  });

  // Given invalid input
  // When passed to invert
  // Then it should return empty object
  test("handles non-object input gracefully", () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
    expect(invert("not an object")).toEqual({});
    expect(invert(123)).toEqual({});
    expect(invert(true)).toEqual({});
    expect(invert([])).toEqual({});
    expect(invert([1, 2, 3])).toEqual({});
  });
});
