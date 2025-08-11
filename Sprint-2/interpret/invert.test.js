// invert.test.js
const invert = require("./invert");

describe("invert function", () => {
  test("inverts basic key-value pairs", () => {
    const input = { a: 1, b: 2 };
    const expected = { 1: "a", 2: "b" };
    expect(invert(input)).toEqual(expected);
  });

  test("handles string values correctly", () => {
    const input = { x: "y", y: "z" };
    const expected = { y: "x", z: "y" };
    expect(invert(input)).toEqual(expected);
  });

  test("handles mixed types", () => {
    const input = { foo: 42, bar: "baz" };
    const expected = { 42: "foo", baz: "bar" };
    expect(invert(input)).toEqual(expected);
  });

  test("returns an empty object when input is empty", () => {
    const input = {};
    const expected = {};
    expect(invert(input)).toEqual(expected);
  });

  test("handles duplicate values (last one overwrites)", () => {
    const input = { a: 1, b: 1 };
    const expected = { 1: "b" }; // "b" overwrites "a"
    expect(invert(input)).toEqual(expected);
  });
});
