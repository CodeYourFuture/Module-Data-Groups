const invert = require("./invert");

test("inverts valid keys and values", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("inverts last key if keys are duplicated", () => {
  expect(invert({ x: 10, x: 20 })).toEqual({ 20: "x" });
});

test("returns empty object if input has no keys", () => {
  expect(invert({})).toEqual({});
});

test("throws when input is not an object", () => {
  expect(() => invert("hello")).toThrow("Input must be an object");
});

test("throws when keys or values are not a string or number", () => {
  expect(() => invert({ a: {} })).toThrow(
    "Keys and values must be a string or a number"
  );
});

test("throws when values are duplicated", () => {
  expect(() => invert({ a: 1, b: 1 })).toThrow("Values cannot be duplicated");
});
