const invert = require("./invert.js");

describe("invert()", () => {
  test("swaps the keys and values in an object", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ "10": "x", "20": "y" });
    expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

  test("returns an empty object when passed an empty object", () => {
    expect(invert({})).toEqual({});
  });
});