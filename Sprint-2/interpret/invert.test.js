const invert = require("./invert");

describe("invert", () => {
  test("object with numbers as values", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  });

  test("1 pair in object", () => {
    expect(invert({ x: 99 })).toEqual({ 99: "x" });
  });

  test("number keys with string values", () => {
    expect(invert({ 1: "one", 2: "two" })).toEqual({ one: "1", two: "2" });
  });

  test("empty object returns empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("mixed types", () => {
    expect(invert({ a: 1, b: "hello" })).toEqual({ 1: "a", hello: "b" });
  });
});
