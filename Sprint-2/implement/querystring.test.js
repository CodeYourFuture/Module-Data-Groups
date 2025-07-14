// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

// Test for parsing query strings with special characters
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

// Additional test cases for the query string parser
test("parses multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});

// Test for empty query string
test("handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Test for single key-value pair
test("handles string without equals (key only)", () => {
  expect(parseQueryString("flag")).toEqual({ flag: "" });
});

// Test for key with empty value
test("handles key with empty value", () => {
  expect(parseQueryString("key=")).toEqual({ key: "" });
});

// Test for empty key
test("handles empty key with value", () => {
  expect(parseQueryString("=value")).toEqual({});
});

// Test for multiple equals in value
test("handles multiple equals in value", () => {
  expect(parseQueryString("token=abc=123=xyz")).toEqual({
    token: "abc=123=xyz",
  });
});

// Test for URL encoded characters
test("decodes URL encoded characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});

// Test for repeated keys
test("handles repeated keys as arrays", () => {
  expect(parseQueryString("color=red&color=blue&color=green")).toEqual({
    color: ["red", "blue", "green"],
  });
});

// Test for empty query string
test("handles trailing ampersand", () => {
  expect(parseQueryString("a=1&b=2&")).toEqual({ a: "1", b: "2" });
});

// Test for empty key-value pairs
test("handles multiple empty entries", () => {
  expect(parseQueryString("a=1&&b=2&&&")).toEqual({ a: "1", b: "2" });
});

// Test for non-string input (null)
test("handles non-string input (null)", () => {
  expect(parseQueryString(null)).toEqual({});
});

// Test for non-string input (undefined)
test("handles non-string input (undefined)", () => {
  expect(parseQueryString(undefined)).toEqual({});
});

// Test for whitespace handling
test("handles plus signs as spaces", () => {
  expect(parseQueryString("q=search+term")).toEqual({
    q: "search term",
  });
});

// Test for numeric and boolean-looking values
test("handles numeric and boolean-looking values", () => {
  expect(parseQueryString("age=30&valid=false")).toEqual({
    age: "30",
    valid: "false",
  });
});
