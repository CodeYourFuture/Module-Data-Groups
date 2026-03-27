// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

describe("parseQueryString edge cases", () => {
  test("returns empty object for empty string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("handles multiple key value pairs", () => {
    expect(parseQueryString("a=1&b=2")).toEqual({
      a: "1",
      b: "2",
    });
  });

  test("handles missing value", () => {
    expect(parseQueryString("a=")).toEqual({
      a: "",
    });
  });

  test("handles missing equals sign", () => {
    expect(parseQueryString("a")).toEqual({
      a: "",
    });
  });

  test("handles multiple equals signs in value", () => {
    expect(parseQueryString("a=1=2=3")).toEqual({
      a: "1=2=3",
    });
  });

  test("ignores empty pairs", () => {
    expect(parseQueryString("a=1&&b=2")).toEqual({
      a: "1",
      b: "2",
    });
  });

  test("overwrites duplicate keys with last value", () => {
    expect(parseQueryString("a=1&a=2")).toEqual({
      a: "2",
    });
  });

  test("returns empty object for invalid input", () => {
    expect(parseQueryString(null)).toEqual({});
    expect(parseQueryString(undefined)).toEqual({});
  });
});
