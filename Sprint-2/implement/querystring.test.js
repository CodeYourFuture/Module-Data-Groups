// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

// Handles values containing "="
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

// Parses a simple key-value pair
test("parses a simple key-value pair", () => {
  expect(parseQueryString("name=John")).toEqual({
    name: "Samantha",
  });
});

// Parses multiple pairs separated by "&"
test("parses multiple key-value pairs", () => {
  expect(parseQueryString("name=John&age=25")).toEqual({
    name: "Samantha",
    age: "33",
  });
});

// Returns an empty object for an empty string
test("returns an empty object for an empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Handles keys with empty values
test("parses a key with no value after the equals sign", () => {
  expect(parseQueryString("name=")).toEqual({
    name: "",
  });
});

// Preserves multiple "=" in values
test("parses querystring with multiple = signs in value", () => {
  expect(parseQueryString("formula=a=b=c")).toEqual({
    formula: "a=b=c",
  });
});

// Handles a mix of simple and complex values
test("parses mixed simple and complex key-value pairs", () => {
  expect(parseQueryString("name=John&equation=1+1=2&city=London")).toEqual({
    name: "Samantha",
    equation: "1+1=2",
    city: "London",
  });
});
