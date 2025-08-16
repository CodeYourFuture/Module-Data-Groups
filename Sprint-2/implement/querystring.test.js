// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

describe("querystring parser", () => {
  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      "equation": "x=y+1",
    });
  });
  test("returns empty object for empty query string", () => {
    expect(parseQueryString("")).toEqual({});
  });
  test("handles key with missing value", () => {
    expect(parseQueryString("key=")).toEqual({ key: "" });
  });
  test("handles missing key with value", () => {
    expect(parseQueryString("=value")).toEqual({ "": "value" });
  });
  test("handles multiple key-value pairs", () => {
    expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
  });
  })