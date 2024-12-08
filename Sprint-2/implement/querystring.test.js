// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.
const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({
    "a": "1",
    "b": "2",
  });
});

test("parses querystring with multiple equals in value", () => {
  expect(parseQueryString("a=1&b=x=y+1&c=3")).toEqual({
    "a": "1",
    "b": "x=y+1",
    "c": "3",
  });
});

test("parses querystring with empty value", () => {
  expect(parseQueryString("a=&b=2")).toEqual({
    "a": "",
    "b": "2",
  });
});

test("parses querystring with spaces in values", () => {
  expect(parseQueryString("a=hello world&b=foo bar")).toEqual({
    "a": "hello world",
    "b": "foo bar",
  });
});

test("parses querystring with special characters", () => {
  expect(parseQueryString("a=%20&b=123")).toEqual({
    "a": "%20",
    "b": "123",
  });
});

test("parses querystring with only one parameter", () => {
  expect(parseQueryString("a=1")).toEqual({
    "a": "1",
  });
});

test("parses empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});
