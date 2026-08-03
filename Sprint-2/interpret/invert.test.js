const invert = require("./invert.js");

describe("invert()", () => {
  test("swaps keys and values for a single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("swaps keys and values for multiple key-value pairs", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
    expect(invert({ a: "1", b: "2" })).toEqual({ 1: "a", 2: "b" });
  });

  test("handles empty objects", () => {
    expect(invert({})).toEqual({});
  });

  test("handles non-object invalid inputs gracefully", () => {
    expect(invert(null)).toEqual({});
    expect(invert(["a", "b"])).toEqual({});
    expect(invert("string")).toEqual({});
  });
});
