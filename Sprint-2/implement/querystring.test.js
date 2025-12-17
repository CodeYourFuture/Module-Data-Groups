// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parseQueryString receives an empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("if our function is passed 2 key - value pairs", () => {
  expect(parseQueryString("color=brown&width=100")).toEqual({
    color: "brown",
    width: "100",
  });
});

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("if our function is passed only one key - value pair", () => {
  expect(parseQueryString("color=brown")).toEqual({ color: "brown" });
});

test("parses querystring without an =, it should throw an error", () => {
  expect(() => parseQueryString("colorisequaltobrown")).toThrow(
    "error invalid format string, no = to separate key value pairs"
  );
});

test("if our function is passed only one string but there is no =", () => {
  expect(() => parseQueryString("color,brown")).toThrow(
    "error invalid format string, no = to separate key value pair"
  );
});
