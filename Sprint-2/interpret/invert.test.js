const invert = require("./invert.js");

describe("invert function", () => {
  test("invert on an object with one key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ "1": "a" });
  });

  test("invert on an object with multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

  test("invert on an object with string values", () => {
    expect(invert({ x: '10', y: '20' })).toEqual({ "10": "x", "20": "y" });
  });

  test("invert on an empty object", () => {
    expect(invert({})).toEqual({});
  });
});

