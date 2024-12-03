// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

describe("parseQueryString function", () => {
  test("parses query string values containing '='", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("returns an empty object for an empty string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses a query string with one key-value pair", () => {
    expect(parseQueryString("key=value")).toEqual({
      key: "value",
    });
  });

  test("parses a query string with multiple key-value pairs", () => {
    expect(parseQueryString("key1=value1&key2=value2")).toEqual({
      key1: "value1",
      key2: "value2",
    });
  });

  test("handles query strings with empty values", () => {
    expect(parseQueryString("key1=value1&key2=")).toEqual({
      key1: "value1",
      key2: "",
    });
  });

  test("ignores pairs without '='", () => {
    expect(parseQueryString("key1=value1&key2")).toEqual({
      key1: "value1",
    });
  });

  test("handles query strings with special characters", () => {
    expect(parseQueryString("key1=%40%23%24%25&key2=value%20with%20spaces")).toEqual({
      key1: "@#$%",
      key2: "value with spaces",
    });
  });
});