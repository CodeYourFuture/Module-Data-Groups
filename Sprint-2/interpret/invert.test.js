const invert = require("./invert.js");

test("Given an empty object, return an empty object", () => {
  expect(invert({})).toEqual({});
});

test("Given a single key-value pair object, returns a swap value", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("Given multiple key-value pairs object, returns a swap value", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("Given an input that is not a plain object, throws an error", () => {
  expect(() => invert(null)).toThrowError(
    new TypeError("Invalid input: Input must be a plain object")
  );
});
