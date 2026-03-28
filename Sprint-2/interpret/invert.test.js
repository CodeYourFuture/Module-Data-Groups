const invert = require("./invert");

test("inverts a simple object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("returns empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});

test("handles non-string values as keys in the inverted object", () => {
  expect(invert({ a: 1, b: true, c: null })).toEqual({
    1: "a",
    true: "b",
    null: "c",
  });
});
