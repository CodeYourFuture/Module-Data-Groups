// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible
//  - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test("parses querystring with multiple parameters", () => {
  expect(parseQueryString("name=John&age=30&city=New+York")).toEqual({
    "name": "John",
    "age": "30",
    "city": "New+York",
  });
});

test("returns an empty object for an empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses querystring with missing values", () => {
  expect(parseQueryString("key1=&key2=value2")).toEqual({
    "key1": "",
    "key2": "value2",
  });
});

test("parses querystring with missing keys", () => {
  expect(parseQueryString("=value1&key2=value2")).toEqual({
    "": "value1",
    "key2": "value2",
  });
});

test("parses querystring with no = sign", () => {
  expect(parseQueryString("key1&key2=value2")).toEqual({
    "key1": undefined,
    "key2": "value2",
  });
});
