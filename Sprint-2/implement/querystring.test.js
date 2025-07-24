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



test(" when invalid strings are passed, should throw an error", () => {
  expect(() => parseQueryString(123)).toThrow("Your input is not valid");
  expect(() => parseQueryString({})).toThrow("Your input is not valid");
  expect(() => parseQueryString([])).toThrow("Your input is not valid");
});

// When empty strings are passed, should return empty object

test("When empty strings are passed, should return empty object", () => {
  expect(parseQueryString("")).toEqual({});
});
