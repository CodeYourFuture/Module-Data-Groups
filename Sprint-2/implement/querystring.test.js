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

test("parses querystring with multiple values", () => {
  expect(parseQueryString("name=John&age=30")).toEqual({
    "name": "John",
    "age": "30",
  });
});
test("parses querystring with multiple values with same key", () => {
  expect(parseQueryString("name=John&name=Jane")).toEqual({
    "name": "Jane", // Last value should overwrite previous ones
  });
});

test("parses querystring without key", () => {
  expect(parseQueryString("=Python")).toEqual({
    "": "Python", // Empty key should be handled
  });
});