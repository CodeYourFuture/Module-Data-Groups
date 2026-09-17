const invert = require("./invert.js");

test("should invert an object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("should invert an object with one property", () => {
  expect(invert({ a: 1 })).toEqual({
    1: "a",
  });
});

test("should return an empty object", () => {
  expect(invert({})).toEqual({});
});
