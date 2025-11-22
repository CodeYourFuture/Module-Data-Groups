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

test("parses basic single parameter", () => {
  expect(parseQueryString("name=John")).toEqual({
    "name": "John",
  });
});

test("parses multiple parameters", () => {
  expect(parseQueryString("name=John&age=30&city=London")).toEqual({
    "name": "John",
    "age": "30",
    "city": "London",
  });
});

test("handles empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles parameters with empty values", () => {
  expect(parseQueryString("name=&age=30")).toEqual({
    "name": "",
    "age": "30",
  });
});

test("handles parameters without values (no = sign)", () => {
  expect(parseQueryString("flag&name=John")).toEqual({
    "flag": undefined,
    "name": "John",
  });
});

test("handles multiple = signs in value", () => {
  expect(parseQueryString("formula=a=b=c&x=1")).toEqual({
    "formula": "a=b=c",
    "x": "1",
  });
});
