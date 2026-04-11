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
// Empty query string: 
test("parses querystring with empty string", () => {
  expect(parseQueryString("")).toEqual({});
});
// Key without value:
test("parses querystring handles key without =", () => {
  expect(parseQueryString("flag")).toEqual({
    flag: true,
  });
});

// Empty value:
test("parses querystring with empty value", () => {
  expect(parseQueryString("key=")).toEqual({
    key: "",
  });
});

// Multiple params:
test("parses querystring with multiple params", () => {
  expect(parseQueryString("name=John&age=30&city=New+York")).toEqual({
    name: "John",
    age: "30",
    city: "New York"
  });
});

// Value containing = :
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

// Trailing ampersand:
test("parses querystring with trailing ampersand", () => {
  expect(parseQueryString("name=John&")).toEqual({
    name: "John"
  });
});
