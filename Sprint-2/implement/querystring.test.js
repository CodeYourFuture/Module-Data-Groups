// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

describe("parseQueryString", () => {
  test("returns an empty object when query is empty", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses query string values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("checks for keys without values", () => {
    expect(parseQueryString("foo&bar=2")).toEqual({
      foo: "",
      bar: "2",
    });
  });
});
