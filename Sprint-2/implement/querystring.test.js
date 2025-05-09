// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

describe("querystring", () => {
  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({ equation: "x=y+1" });
  });
  test("parses multiple key-value pairs", () => {
    expect(parseQueryString("color1=blue&color2=red")).toEqual({
      color1: "blue",
      color2: "red",
    });
  });
});