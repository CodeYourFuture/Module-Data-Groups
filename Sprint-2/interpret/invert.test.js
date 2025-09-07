const invert = require("./invert.js");

test("inverts an object with unique values", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  expect(invert({ x: 10, y: 20 })).toEqual({ "10": "x", "20": "y" });
});

test("inverts an object with string values", () => {
  expect(invert({ first: "one", second: "two" })).toEqual({
    one: "first",
    two: "second",
  });
});

test("handles empty object", () => {
  expect(invert({})).toEqual({});
});
