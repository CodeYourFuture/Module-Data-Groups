const invert = require("./invert.js");

describe("invert", () => {
  test("swaps keys and values for a simple object", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

  test("handles single key-value pair", () => {
    expect(invert({ x: 10 })).toEqual({ "10": "x" });
  });

  test("handles empty objects", () => {
    expect(invert({})).toEqual({});
  });

  test("overwrites duplicate values with last key", () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" }); // "b" overwrites "a"
  });

  test("handles non-string keys and values", () => {
    expect(invert({ a: true, b: false })).toEqual({ "true": "a", "false": "b" });
  });
});
