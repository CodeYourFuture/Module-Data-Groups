const invertObj = require("./invert.js");

test("invert function", () => {
  expect(invertObj({ a: 1 })).toEqual({ 1: "a" });
  expect(invertObj({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  expect(invertObj({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});
