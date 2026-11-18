const invert = require("./invert.js");

it("should invert one key-value pair properly", () => {
    expect(invert({ a: 1 })).toEqual({"1": "a"});
});

it("should invert several key-value pairs properly", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  expect(invert({ x: 10, y: 20, z: 25 })).toEqual({ 10: "x", 20: "y", 25: "z" });
});