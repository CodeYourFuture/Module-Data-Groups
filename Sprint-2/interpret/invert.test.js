const invert = require("./invert.js");

test("should swap keys and values in an object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("should invert an object with a single key-value pair", () => {
  expect(invert({ x: 10 })).toEqual({
    10: "x",
  });
});

test("should return an empty object when passed an empty object", () => {
  expect(invert({})).toEqual({});
});