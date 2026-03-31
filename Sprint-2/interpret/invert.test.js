const invert = require("./invert.js");

test("inverts an object with one property", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts an object with multiple properties", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("returns an empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});
