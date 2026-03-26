const invert = require("./invert");

describe("invert function", () => {
  test("swaps keys and values for an object with numeric values", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  test("swaps keys and values for a single pair object", () => {
    expect(invert({ x: 99 })).toEqual({ 99: "x" });
  });

  test("returns an empty object when passed an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("handles string values correctly", () => {
    expect(invert({ 1: "one", 2: "two" })).toEqual({ one: "1", two: "2" });
  });

  test("handles mixed type values correctly", () => {
    expect(invert({ a: 1, b: "hello" })).toEqual({ 1: "a", hello: "b" });
  });
});
