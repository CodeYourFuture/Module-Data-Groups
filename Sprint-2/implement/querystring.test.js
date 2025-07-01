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

test("handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});

test("handles key with empty value", () => {
  expect(parseQueryString("a=")).toEqual({ a: "" });
});

test("handles missing key", () => {
  expect(parseQueryString("=value")).toEqual({ "": "value" });
});

test("handles pair with no equal sign", () => {
  expect(parseQueryString("lonelyKey")).toEqual({ lonelyKey: undefined });
});

test("parses value containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({ equation: "x=y+1" });
});
