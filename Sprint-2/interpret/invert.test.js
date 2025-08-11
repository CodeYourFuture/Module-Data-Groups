const invert = require("./invert");

describe("invert function", () => {
  test("should invert object with a single key-value pair", () => {
    const input = { a: 1 };
    const expected = { 1: "a" };
    expect(invert(input)).toEqual(expected);
  });

  test("should invert object with multiple key-value pairs", () => {
    const input = { a: 1, b: 2 };
    const expected = { 1: "a", 2: "b" };
    expect(invert(input)).toEqual(expected);
  });

  test("should handle an object with numeric values", () => {
    const input = { x: 10, y: 20 };
    const expected = { 10: "x", 20: "y" };
    expect(invert(input)).toEqual(expected);
  });

  test("should return an empty object when input is empty", () => {
    const input = {};
    const expected = {};
    expect(invert(input)).toEqual(expected);
  });

  test("should return an object with string values as keys", () => {
    const input = { x: "hello", y: "world" };
    const expected = { hello: "x", world: "y" };
    expect(invert(input)).toEqual(expected);
  });
});
