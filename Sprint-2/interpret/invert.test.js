const invert = require("./invert.js");

describe("invert", () => {
  test("inverting key and value of object", () => {
    expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ 1: "a", 2: "b", 3: "c" });
  });

  test("inverting empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("inverting object with either key or value is empty", () => {
    expect(invert({ "": 1, b: "" })).toEqual({ 1: "", "": "b" });
  });

  test("inverting object with duplicate value", () => {
    expect(() => invert({ a: 1, b: 1 })).toThrow(
      'Duplicate key found after inversion: "1"'
    );
  });
});
