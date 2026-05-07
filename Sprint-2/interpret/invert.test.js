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

// to avoid information loss
test("Throws erorr if trying to invert obj has multiple keys with same value", () => {
  expect(() => invert({ a: "x", b: "x" })).toThrow();
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
