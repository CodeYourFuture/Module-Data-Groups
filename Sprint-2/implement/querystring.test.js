// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  const queryString = "equation=x=y+1";
  const currentOutput = parseQueryString(queryString);
  const targetOutput = { equation: "x=y+1" };
  expect(currentOutput).toEqual(targetOutput);
});

test("return empty object when queryString is empty", () => {
  expect(parseQueryString("")).toEqual({});
});

test("It will return an empty string when param is not a string", () => {
  expect(parseQueryString([1, 3, 4])).toEqual({});
});

test("parses querystring values starting with =", () => {
  expect(parseQueryString("=equation=x=y+1")).toEqual({});
});

test("parses querystring values ending with =", () => {
  expect(parseQueryString("equation=x=y+1=")).toEqual({});
});

test("parses querystring values with 2 params", () => {
  expect(parseQueryString("equation=x&equation1=y")).toEqual({
    equation: "x",
    equation1: "y",
  });
});
