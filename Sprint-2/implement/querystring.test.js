// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test("returns empty object for empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("returns empty value for key with no '='", () => {
  expect(parseQueryString("key1")).toEqual({ key1: "" });
});


test("parses multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    "key1": "value1",
    "key2": "value2",
  });
});


test("returns empty object for non-string input", () => {
  expect(parseQueryString(null)).toEqual({});
  expect(parseQueryString(undefined)).toEqual({});
  expect(parseQueryString(123)).toEqual({});
});


test("handles '=' in the key", () => {
  expect(parseQueryString("=value")).toEqual({
    "": "value",
  });
});