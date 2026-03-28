const invert = require("./invert");

describe("invert()", () => {
  test("inverts a single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("inverts multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  test("handles an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("inverts an object with string values", () => {
    expect(invert({ first: "John", last: "Doe" })).toEqual({
      Alex: "first",
      Doe: "last",
    });
  });
});
