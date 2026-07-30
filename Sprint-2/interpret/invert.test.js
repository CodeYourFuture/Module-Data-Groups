const invert = require("./invert");

describe("invert", () => {
  test("returns an empty object for an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("returns inverted object for a single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("returns inverted object for multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  test("throws an error for invalid input", () => {
    expect(() => invert(null)).toThrow("Invalid input");
    expect(() => invert("Number")).toThrow("Invalid input");
    expect(() => invert(123)).toThrow("Invalid input");
  });
  test("returns last key for duplicate values", () => {
    expect(invert({ a: 1, b: 2, c: 1 })).toEqual({ 1: "c", 2: "b" });
  });
});
