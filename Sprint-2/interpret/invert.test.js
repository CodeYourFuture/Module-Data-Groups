const invert = require("./invert.js");

describe("invert", () => {
  test("should swap keys and values for a simple object", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
  });

  test("should work with a single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("should return an empty object when given an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("should overwrite earlier keys when two values are the same", () => {
    // if two keys share the same value, the later key wins after inversion
    expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
  });

  test("should coerce numeric and boolean values to string keys", () => {
    expect(invert({ a: true, b: false })).toEqual({ true: "a", false: "b" });
  });

  test("should not mutate the original object", () => {
    const original = { a: 1, b: 2 };
    invert(original);
    expect(original).toEqual({ a: 1, b: 2 });
  });
});
