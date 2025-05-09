const invert = require("./invert.js");

describe("invert", () => {
  test("inverts a simple object", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("inverts an object with multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  test("handles an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("overwrites duplicate values", () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" }); // "b" overwrites "a"
  });

  test("throws an error if input is not an object", () => {
    expect(() => invert(null)).toThrow();
    expect(() => invert(123)).toThrow();
    expect(() => invert("test")).toThrow();
  });
});
