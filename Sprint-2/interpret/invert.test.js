const invert = require("./invert");

// Test cases for the invert function
describe("invert function", () => {
  test("should invert single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("should invert multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  test("should handle object with non-string values", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
  });
});
