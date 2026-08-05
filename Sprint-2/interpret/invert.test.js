const invert = require("./invert");

describe("invert", () => {
  test("inverts an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("inverts a single property", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("inverts multiple properties", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({
      1: "a",
      2: "b",
    });
  });

  test("works with other values", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({
      10: "x",
      20: "y",
    });
  });
});
