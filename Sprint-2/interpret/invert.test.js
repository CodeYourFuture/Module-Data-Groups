const invert = require("./invert.js");

test("Given an empty object, return an empty object", () => {
  expect(invert({})).toEqual({});
});

test("Given a single key-value pair object, returns a swap value", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
  expect(invert({ 1: 1 })).toEqual({ 1: "1" });
  expect(invert({ key: true })).toEqual({ true: "key" });
});

test("Given multiple key-value pairs object, returns a swap value", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  expect(invert({ 1: "a", 2: "b" })).toEqual({ a: "1", b: "2" });
  expect(invert({ a: 1, b: "x", c: true })).toEqual({
    1: "a",
    x: "b",
    true: "c",
  });
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
  expect(invert({ a: 1, b: 1, c: 1 })).toEqual({ 1: "c" });
});

test("Given an input that is not a plain object, throws an error", () => {
  expect(() => invert(null)).toThrowError(
    new TypeError("Invalid input: Input must be a plain object")
  );
  expect(() => invert(undefined)).toThrowError(
    new TypeError("Invalid input: Input must be a plain object")
  );
  expect(() => invert(true)).toThrowError(
    new TypeError("Invalid input: Input must be a plain object")
  );
  expect(() => invert(null)).toThrowError(
    new TypeError("Invalid input: Input must be a plain object")
  );
});

test("handles nested objects and arrays as values", () => {
  const nestedObj = { a: { x: 1 } };
  const nestedArray = { b: [1, 2, 3] };
  // Nested object key becomes "[object Object]"
  expect(invert(nestedObj)).toEqual({ "[object Object]": "a" });
  // Array key becomes "1,2,3"
  expect(invert(nestedArray)).toEqual({ "1,2,3": "b" });
});