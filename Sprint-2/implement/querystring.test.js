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

test("returns an empty object for an empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses multiple key value pairs", () => {
  expect(parseQueryString("name=dan&age=20")).toEqual({
    name: "dan",
    age: "20",
  });
});

test("handles a key with an empty value", () => {
  expect(parseQueryString("name=")).toEqual({
    name: "",
  });
});

test("handles a key with no equals sign", () => {
  expect(parseQueryString("name")).toEqual({
    name: "",
  });
});
