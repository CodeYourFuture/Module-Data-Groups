const invert = require("./invert.js");

describe("proof function is fixed", () => {
  test("Given an object, it should swap the keys and values in the object", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });
});
