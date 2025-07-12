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

test("should handle empty string input", () => {
  expect(parseQueryString("")).toEqual({});
});

test("should handle keys without values", () => {
  expect(parseQueryString("a&b")).toEqual({
    a: null, // or undefined, depending on your desired behavior
    b: null,
  });
});

test("should handle URL encoded values", () => {
  expect(parseQueryString("city=New%20York")).toEqual({
    city: "New York", 
  });
});
