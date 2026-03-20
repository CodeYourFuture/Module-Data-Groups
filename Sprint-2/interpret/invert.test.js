const invert = require("./invert.js");

test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({
    1: "a",
  });
});

test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("returns empty object when given empty object", () => {
  expect(invert({})).toEqual({});
});
