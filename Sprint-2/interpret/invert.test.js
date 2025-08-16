const invert = require("./invert");

describe("invert function", () => {
  test("should invert keys and values correctly", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  test("should return empty object for empty input", () => {
    expect(invert({})).toEqual({});
  });
});
