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

test("parses simple key-value pairs", () => {
  expect(parseQueryString("key=value")).toEqual({ key: "value" });
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1-5")).toEqual({
    equation: "x=y+1-5",
  });
});

test("parses empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses querystring with special characters", () => {
  expect(parseQueryString("name=John+Doe&city=New+York")).toEqual({
    name: "John+Doe",
    city: "New+York",
  });
});