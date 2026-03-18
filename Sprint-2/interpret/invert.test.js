const invert = require("./invert.js");

describe("invert()", () => {
  test("inverts a single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({
      1: "a",
    });
  });

  test("inverts multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({
      1: "a",
      2: "b",
    });
  });

  test("returns an empty object for empty input", () => {
    expect(invert({})).toEqual({});
  });
});
