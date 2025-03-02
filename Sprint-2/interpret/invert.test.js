const invert = require("./invert");

test("inverts a simple object", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("inverts an object with multiple types", () => {
  expect(invert({ x: "y", y: "z" })).toEqual({ y: "x", z: "y" });
});

test("inverts an object with numeric keys", () => {
  expect(invert({ 10: "a", 20: "b" })).toEqual({ a: "10", b: "20" });
});

test("handles an empty object", () => {
  expect(invert({})).toEqual({});
});
