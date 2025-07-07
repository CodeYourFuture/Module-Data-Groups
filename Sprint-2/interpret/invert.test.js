const invert = require("./invert.js");

test("inverts an object with one key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("inverts an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("handles an empty object", () => {
  expect(invert({})).toEqual({});
});

test("handles objects with numeric keys and string values", () => {
  expect(invert({ 1: "a", 2: "b" })).toEqual({ a: "1", b: "2" });
});