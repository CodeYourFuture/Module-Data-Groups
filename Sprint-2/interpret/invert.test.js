const invert = require("./invert.js");

describe("invert()", () => {
  test("inverts an object with a single property", () => {
    const object = { a: 1 };
    const result = invert(object);
    const output = { 1: "a" };
    expect(result).toEqual(output);
  });

  test("inverts an object with multiple properties", () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = invert(object);
    const output = { 1: "a", 2: "b", 3: "c" };
    expect(result).toEqual(output);
  });

  test("handles duplicate values (last key wins)", () => {
    const object = { a: 1, b: 1, c: 2 };
    const result = invert(object);
    const output = { 1: "b", 2: "c" };
    expect(result).toEqual(output);
  });

  test("handles non-string values as keys", () => {
    const object = { a: true, b: null, c: undefined };
    const result = invert(object);
    const output = { true: "a", null: "b", undefined: "c" };
    expect(result).toEqual(output);
  });

  test("handles empty object", () => {
    const object = {};
    const result = invert(object);
    const output = {};
    expect(result).toEqual(output);
  });

  test("throws error for non-object input", () => {
    expect(() => invert(null)).toThrow(
      "Parameter `obj` must be an object type"
    );
    expect(() => invert(42)).toThrow("Parameter `obj` must be an object type");
    expect(() => invert("string")).toThrow(
      "Parameter `obj` must be an object type"
    );
  });
});
