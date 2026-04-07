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

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("name=Alice&age=30&city=NY")).toEqual({
    name: "Alice",
    age: "30",
    city: "NY",
  });
});

test("returns an empty object for an empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles key without equals sign", () => {
  expect(parseQueryString("key1=value1&key2&key3=value3")).toEqual({
    key1: "value1",
    key2: "",
    key3: "value3",
  });
});

test("handles multiple '=' in value", () => {
  expect(parseQueryString("data=a=b=c")).toEqual({
    data: "a=b=c",
  });
});

test("handles empty key", () => {
  expect(parseQueryString("=value")).toEqual({
    "": "value",
  });
});

test("handles mixed querystring", () => {
  expect(parseQueryString("a=1&b&c=3=d")).toEqual({
    a: "1",
    b: "",
    c: "3=d",
  });
});
