// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

describe("parseQueryString function", () => {
  // Provided test case: Values containing '='
  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  // Empty query string
  test("returns empty object for empty query string", () => {
    expect(parseQueryString("")).toEqual({});
    expect(parseQueryString("?")).toEqual({});
  });

  // Leading '?'
  test("handles leading ? in query string", () => {
    expect(parseQueryString("?key=value")).toEqual({ key: "value" });
    expect(parseQueryString("?key1=val1&key2=val2")).toEqual({
      key1: "val1",
      key2: "val2",
    });
  });

  // Empty values
  test("handles empty values", () => {
    expect(parseQueryString("key=")).toEqual({ key: "" });
    expect(parseQueryString("key")).toEqual({ key: "" });
  });

  // Multiple keys (overwrites duplicate keys)
  test("handles multiple keys, keeping last value", () => {
    expect(parseQueryString("key=val1&key=val2")).toEqual({ key: "val2" });
  });

  // Malformed pairs
  test("handles malformed pairs gracefully", () => {
    expect(parseQueryString("&&")).toEqual({});
    expect(parseQueryString("=value")).toEqual({});
  });

  // Invalid input
  test("handles invalid input gracefully", () => {
    expect(parseQueryString(null)).toEqual({});
    expect(parseQueryString(undefined)).toEqual({});
    expect(parseQueryString(123)).toEqual({});
    expect(parseQueryString({})).toEqual({});
  });

  // Multiple key-value pairs
  test("parses multiple key-value pairs", () => {
    expect(parseQueryString("key1=val1&key2=val2")).toEqual({
      key1: "val1",
      key2: "val2",
    });
  });
});
