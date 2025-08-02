// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses empty queryString", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses queryString values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses queryString where value contains multiple '='", () => {
  expect(parseQueryString("a=b=c=d")).toEqual({ a: "b=c=d" });
});

test("parses queryString with only '='", () => {
  expect(parseQueryString("=")).toEqual({ "": "" });
});

test("parses queryString containing multiple pair values some with '=' and some without", () => {
  expect(parseQueryString("sum=a+b&equation&total=42-y")).toEqual({
    sum: "a+b",
    equation: "",
    total: "42-y",
  });
});

test("parses queryString with values that have no '=' in the them", () => {
  expect(parseQueryString("equation:y+1")).toEqual({ "equation:y+1": "" });
});
