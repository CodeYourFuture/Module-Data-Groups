const invert = require("./invert.js");

test("Inverts simple object with string key and string value", () => {
  expect(invert({ a: "x", b: "y", c: "z" })).toEqual({
    x: "a",
    y: "b",
    z: "c",
  });
});

test("Returns empty object if input is an empty object", () => {
  expect(invert({})).toEqual({});
});

test("Throws error for non-object inputs", () => {
  expect(() => invert("asdf")).toThrow(TypeError);
  expect(() => invert([1, "a", 2, "b"])).toThrow(TypeError);
  expect(() => invert()).toThrow();
  expect(() => invert(null)).toThrow();
});

test("Throws errors for non-string, non-numeric keys or values", () => {
  expect(() => invert({ a: { b: 12 } })).toThrow(TypeError);
});

test("Duplicate values become one key, where the last key in original becomes its new value", () => {
  expect(invert({ a: "x", b: "x" })).toEqual({ x: "b" });
});

test("numeric keys become string converted to value", () => {
  expect(invert({ 1: "a", 2: "b" })).toEqual({ a: "1", b: "2" });
});

test("invert twice returns original if all values are unique", () => {
  expect(invert(invert({ a: "x", b: "y", x: "z" }))).toEqual({
    a: "x",
    b: "y",
    x: "z",
  });
});

test("invert twice does not returns original if all values are not unique", () => {
  expect(invert(invert({ a: "x", b: "y", c: "y" }))).toEqual({
    a: "x",
    c: "y",
  });
});
