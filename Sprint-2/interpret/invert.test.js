const invert = require("./invert");

// Let's define how invert should work
// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

describe("invert", () => {
  it("should swap the keys and values in an object", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
    expect(invert({ name: "Tom", age: 30 })).toEqual({
      Tom: "name",
      30: "age",
    });
  });

  it("should handle empty objects", () => {
    expect(invert({})).toEqual({});
  });
});
