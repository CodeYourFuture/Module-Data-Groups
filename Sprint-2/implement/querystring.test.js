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

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});

test("handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles string without equals (key only)", () => {
  expect(parseQueryString("flag")).toEqual({ flag: "" });
});

test("handles key with empty value", () => {
  expect(parseQueryString("key=")).toEqual({ key: "" });
});

test("handles empty key with value", () => {
  expect(parseQueryString("=value")).toEqual({});
});

test("handles multiple equals in value", () => {
  expect(parseQueryString("token=abc=123=xyz")).toEqual({
    token: "abc=123=xyz",
  });
});

test("decodes URL encoded characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});

test("handles repeated keys as arrays", () => {
  expect(parseQueryString("color=red&color=blue&color=green")).toEqual({
    color: ["red", "blue", "green"],
  });
});

test("handles trailing ampersand", () => {
  expect(parseQueryString("a=1&b=2&")).toEqual({ a: "1", b: "2" });
});

test("handles multiple empty entries", () => {
  expect(parseQueryString("a=1&&b=2&&&")).toEqual({ a: "1", b: "2" });
});

test("handles non-string input (null)", () => {
  expect(parseQueryString(null)).toEqual({});
});

test("handles non-string input (undefined)", () => {
  expect(parseQueryString(undefined)).toEqual({});
});

test("handles plus signs as spaces", () => {
  expect(parseQueryString("q=search+term")).toEqual({
    q: "search term",
  });
});

test("handles numeric and boolean-looking values", () => {
  expect(parseQueryString("age=30&valid=false")).toEqual({
    age: "30",
    valid: "false",
  });
});
