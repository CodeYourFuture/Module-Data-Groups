// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("Parses key-value pair with '=' in the value", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("Parses multiple key-value pairs", () => {
  expect(parseQueryString("name=Ali&age=30")).toEqual({
    name: "Ali",
    age: "30",
  });
});

test("Handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("Handles value with multiple '=' characters", () => {
  expect(parseQueryString("code=a=b=c")).toEqual({
    code: "a=b=c",
  });
});

