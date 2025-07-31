const invert = require("./invert.js");
// invert.test.js

test("inverts a simple object with unique values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts object with string values", () => {
  expect(invert({ x: "one", y: "two" })).toEqual({ one: "x", two: "y" });
});

test("inverts object with numeric string values", () => {
  expect(invert({ a: "1", b: "2" })).toEqual({ 1: "a", 2: "b" });
});

test("last key overwrites if values are not unique", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
});

test("returns empty object when given empty object", () => {
  expect(invert({})).toEqual({});
});
