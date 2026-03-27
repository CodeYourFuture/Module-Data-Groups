const invert = require("./invert.js");

test("inverts object with single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts object with string values", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});
