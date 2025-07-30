const invert = require("./invert");

describe("invert function", () => {
  test("should invert an object with one key-value pair", () => {
    const input = { a: 1 };
    const output = { 1: "a" };
    expect(invert(input)).toEqual(output);
  });

  test("should invert an object with multiple key-value pairs", () => {
    const input = { a: 1, b: 2 };
    const output = { 1: "a", 2: "b" };
    expect(invert(input)).toEqual(output);
  });

  test("should handle an empty object", () => {
    const input = {};
    const output = {};
    expect(invert(input)).toEqual(output);
  });

  test("should handle a single value being swapped", () => {
    const input = { name: "John" };
    const output = { John: "name" };
    expect(invert(input)).toEqual(output);
  });

  test("should handle objects with numeric values", () => {
    const input = { x: 10, y: 20 };
    const output = { 10: "x", 20: "y" };
    expect(invert(input)).toEqual(output);
  });
});
