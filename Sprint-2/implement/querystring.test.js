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

test("parses a single  key-value pair", () => {
  expect(parseQueryString("country=UK")).toEqual({ country: "UK" });
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("firstName=Felix&lastName=Brown")).toEqual({
    firstName: "Felix",
    lastName: "Brown",
  });
});

test("parses querystring with encoded values", () => {
  expect(parseQueryString("name=John%20Doe&message=hello%3Dworld")).toEqual({
    name: "John Doe",
    message: "hello=world",
  });
});