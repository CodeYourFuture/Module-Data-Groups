const invert = require("./invert.js");

  test("inverts single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ "1": "a" });
  });

  test("inverts multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

  test("inverts different keys and values", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ "10": "x", "20": "y" });
  });

  test("inverts string value", () => {
    expect(invert({ name: "MO" })).toEqual({ "MO": "name" });
  });

  test("last key wins when duplicate values exist", () => {
    expect(invert({ a: 1, b: 2, c: 1, d: 1 })).toEqual({ "1": "d", "2": "b" });
  });
