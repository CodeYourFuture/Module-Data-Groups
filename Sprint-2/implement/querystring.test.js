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

test("parses multiple querystring divided by &", () => {
  expect(parseQueryString("equation=x=y+1&color=blue")).toEqual({
    equation: "x=y+1",
    color: "blue",
  });
});

test("it returns the value as an empty string if the querystring has no =", () => {
  expect(parseQueryString("day")).toEqual({ day: "" });
});

test("it returns the key as an empty string if the querystring has no nothing before =", () => {
  expect(parseQueryString("=day")).toEqual({ "": "day" });
});
