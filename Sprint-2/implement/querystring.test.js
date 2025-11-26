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

test("parses multiple key=value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});

test("handles empty value (a=)", () => {
  expect(parseQueryString("a=")).toEqual({ a: "" });
});

test("handles key with no '=' (a)", () => {
  expect(parseQueryString("a")).toEqual({ a: "" });
});

test("last value wins for repeated keys", () => {
  expect(parseQueryString("a=1&a=2")).toEqual({ a: "2" });
});

test("supports leading question mark", () => {
  expect(parseQueryString("?a=1&b=2")).toEqual({ a: "1", b: "2" });
});

test("ignores empty pairs from trailing or consecutive &", () => {
  expect(parseQueryString("a=1&&b=2&")).toEqual({ a: "1", b: "2" });
});

test("handles empty key (=value) producing empty-string key", () => {
  expect(parseQueryString("=value")).toEqual({ "": "value" });
});