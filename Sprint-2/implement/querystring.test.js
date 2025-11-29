// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("returns empty object for empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});
test("handles key with no value", () => {
  expect(parseQueryString("flag")).toEqual({
    flag: "",
  });
});
test("parses multiple pairs when one value contains '='", () => {
  expect(parseQueryString("user=ahmad&equation=x=y+1&mode=advanced")).toEqual({
    user: "ahmad",  equation: "x=y+1",   mode: "advanced",
  });
});