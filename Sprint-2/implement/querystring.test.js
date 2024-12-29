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

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});

test("parses querystring values containing multiple '='", () => {
  expect(parseQueryString("equation=x=y+1&other=abc=123")).toEqual({
    equation: "x=y+1",
    other: "abc=123",
  });
});

test('handles empty keys and values', () => {
  expect(parseQueryString("emptyKey=")).toEqual({ emptyKey: '' });
  expect(parseQueryString("=emptyValue")).toEqual({ '': 'emptyValue' });
});

test('parses simple query strings', () => {
  expect(parseQueryString("name=John%20Doe&value=5%25")).toEqual({ name: 'John Doe', value: '5%' });
});

test('handles special characters', () => {
  expect(parseQueryString("specialChars=!%40%23%24%25%5E%26*()")).toEqual({ specialChars: '!@#$%^&*()' });
});

test('returns empty object for null, undefined, or empty strings', () => {
  expect(parseQueryString(null)).toEqual({});
  expect(parseQueryString(undefined)).toEqual({});
  expect(parseQueryString("")).toEqual({});
});

test("handles duplicate keys by storing values in an array", () => {
  expect(parseQueryString("key=value1&key=value2")).toEqual({
    key: ["value1", "value2"],
  });
});