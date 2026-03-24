const invert = require("./invert.js");
// testing time
test("Empty object returns empty object", () => {
  expect(invert({})).toEqual({});
});

test("Single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("Given an object, then it should swap the keys and values in the object", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});
