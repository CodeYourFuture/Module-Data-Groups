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

test("parses querystring with missing value", () => {
  let currentOutput = parseQueryString("sort&colour=yellow");
  let targetOutput = { colour: "yellow" };
  expect(currentOutput).toEqual(targetOutput);
});

test("parses querystring with missing key", () => {
  let currentOutput = parseQueryString("=dark&colour=yellow");
  let targetOutput = { colour: "yellow" };
  expect(currentOutput).toEqual(targetOutput);
});
