// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses multiple query parameters", () => {
  expect(parseQueryString("genre=mystery&year=1947")).toEqual({
    genre: "mystery",
    year: "1947",
  });
});

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("returns an empty object for an empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles keys with empty values", () => {
  expect(parseQueryString("name=&position=developer")).toEqual({
    name: "",
    position: "developer",
  });
});

test("treats parameters without = as empty values", () => {
  expect(parseQueryString("name&position=developer")).toEqual({
    name: "",
    position: "developer",
  });
});

test("handles parameters with a missing key", () => {
  expect(parseQueryString("=value")).toEqual({
    "": "value",
  });
});

test("ignores empty parameters created by consecutive ampersands", () => {
  expect(parseQueryString("key1=value1&&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});
