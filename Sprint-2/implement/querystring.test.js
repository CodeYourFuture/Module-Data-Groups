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

test("returns empty object for empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("name=John&age=30&city=NewYork")).toEqual({
    name: "John",
    age: "30",
    city: "NewYork",
  });
});

test("parses querystring with no value", () => {
  expect(parseQueryString("key=")).toEqual({
    key: "",
  });
});

test("parses querystring with multiple = in the value", () => {
  expect(parseQueryString("file=path/to/file=name=another")).toEqual({
    file: "path/to/file=name=another",
  });
});

test("parses querystring with key-value pair containing spaces", () => {
  expect(parseQueryString("search=hello world&lang=en")).toEqual({
    search: "hello world",
    lang: "en",
  });
});
