const invert = require("./invert.js");

describe("invert", () => {
  test("inverts an empty object", () => {
    const input = {};
    const result = invert(input);
    expect(result).toEqual({});
  });

  test("inverts a single key-value pair", () => {
    const input = { a: 1 };
    const result = invert(input);
    expect(result).toEqual({ 1: "a" });
  });

  test("inverts multiple key-value pairs", () => {
    const input = { a: 1, b: 2 };
    const result = invert(input);
    expect(result).toEqual({ 1: "a", 2: "b" });
  });

  test("inverts an object with string values", () => {
    const input = { x: "hello", y: "world" };
    const result = invert(input);
    expect(result).toEqual({ hello: "x", world: "y" });
  });
});
