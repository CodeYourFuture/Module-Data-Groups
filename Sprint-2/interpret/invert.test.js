const invert = require("./invert.js");

test("inverts simple object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts multiple keys", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts x,y coordinates", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("empty object returns empty", () => {
  expect(invert({})).toEqual({});
});
