const invert = require("./invert");

describe("testing invert function", () => {
  const errorMessage = "Input should be an object";
  it("should throw error message when input is not an object", () => {
    expect(() => invert("abc")).toThrow(errorMessage);
    expect(() => invert(123)).toThrow(errorMessage);
    expect(() => invert(null)).toThrow(errorMessage);
    expect(() => invert(undefined)).toThrow(errorMessage);
    expect(() => invert(true)).toThrow(errorMessage);
    expect(() => invert(["a", "1"])).toThrow(errorMessage);
  });

  it("should return a swapped object when an object is passed in the function", () => {
    expect(invert({ a: "1" })).toStrictEqual({ 1: "a" });
    expect(invert({ a: 1, b: 2, c: 3 })).toStrictEqual({
      1: "a",
      2: "b",
      3: "c",
    });
    expect(invert({ a: null, b: undefined, c: true })).toStrictEqual({
      null: "a",
      undefined: "b",
      true: "c",
    });
    expect(invert({ a: [1], b: [2] })).toStrictEqual({
      "[1]": "a",
      "[2]": "b",
    });
    expect(invert({ a: { b: 1 }, c: { d: 2 } })).toStrictEqual({
      '{"b":1}': "a",
      '{"d":2}': "c",
    });
    expect(invert({ "{a: b}": 1, "{c: d}": 2 })).toStrictEqual({
      1: "{a: b}",
      2: "{c: d}",
    });
  });
});
