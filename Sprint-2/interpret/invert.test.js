const invert = require("./invert");

test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("handles string values", () => {
  expect(invert({ x: "one", y: "two" })).toEqual({ one: "x", two: "y" });
});

test("handles empty object", () => {
  expect(invert({})).toEqual({});
});