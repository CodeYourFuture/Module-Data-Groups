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

test("parses empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses querystring with multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});

test("parses querystring with no value for a key", () => {
  expect(parseQueryString("key1=")).toEqual({
    key1: "",
  });
});

test("parses querystring with no '=' for a key", () => {
  expect(parseQueryString("key1")).toEqual({
    key1: null,
  });
});

test("parses querystring with special characters", () => {
  expect(parseQueryString("key1=hello%20world&key2=special%26chars")).toEqual({
    key1: "hello%20world",
    key2: "special%26chars",
  });
});

test("parses querystring with duplicated keys", () => {
  expect(parseQueryString("key1=value1&key1=value2")).toEqual({
    key1: "value2", // Last value overwrites previous ones
  });
});
