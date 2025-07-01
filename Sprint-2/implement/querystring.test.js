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

// An empty query string returns an empty object
test("returns empty object for empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Keys with empty values (e.g. 'a=') are parsed as empty strings
test("parses keys with empty values", () => {
  expect(parseQueryString("a=&b=")).toEqual({ a: "", b: "" });
});

// Empty key-value pairs caused by consecutive '&' are ignored
test("ignores empty pairs", () => {
  expect(parseQueryString("a=1&&b=2")).toEqual({ a: "1", b: "2" });
});

// Keys without '=' sign are treated as keys with empty string values
test("parses keys without equal sign as empty string", () => {
  expect(parseQueryString("a&b=2")).toEqual({ a: "", b: "2" });
});

// URL encoded keys and values are properly decoded
test("handles url encoded characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});

// When duplicate keys appear, the last key-value pair overrides previous ones
test("handles duplicate keys, last one wins", () => {
  expect(parseQueryString("a=1&a=2")).toEqual({ a: "2" });
});
