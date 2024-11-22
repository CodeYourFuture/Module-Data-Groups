// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring with multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});

test("parses querystring with values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("handles querystring with empty value", () => {
  expect(parseQueryString("key1=")).toEqual({
    key1: "",
  });
});

test("handles querystring with empty key", () => {
  expect(parseQueryString("=value1")).toEqual({});
});

test("handles querystring with empty key and value", () => {
  expect(parseQueryString("=")).toEqual({});
});

test("handles querystring with no equals sign", () => {
  expect(parseQueryString("key1")).toEqual({
    key1: "",
  });
});

test("handles empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles querystring with spaces and plus signs", () => {
  expect(parseQueryString("key1=value+with+spaces")).toEqual({
    key1: "value+with+spaces",
  });
});
