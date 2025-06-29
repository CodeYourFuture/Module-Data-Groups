// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

describe("edge cases for parseQueryString function", () => {
  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("parses querystring values containing '=' and additional whitespaces around '=' sign", () => {
    expect(parseQueryString("equation = x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("parses empty querystring", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses querystring with duplicate keys", () => {
    expect(parseQueryString("equation=x&equation=y+1")).toEqual({
      equation: "x",
      equation: "y+1",
    });
  });

  test("parses querystring with leading or trailing &s", () => {
    expect(parseQueryString("&equation=x&")).toEqual({
      equation: "x",
    });
  });

  test("parses querystring with missing key", () => {
    expect(parseQueryString("=x")).toEqual({
      "": "x",
    });
  });

  test("parses querystring with missing value", () => {
    expect(parseQueryString("equation=")).toEqual({
      equation: "",
    });
  });

  test("parses querystring with missing '='", () => {
    expect(parseQueryString("equation&gh5")).toEqual({
      equation: "",
      gh5: "",
    });
  });
});
