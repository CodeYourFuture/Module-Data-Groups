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

test("parses keys with empty values", () => {
  expect(parseQueryString("a=&b=2")).toEqual({ a: "", b: "2" });
});

test("parses keys with no value", () => {
  expect(parseQueryString("a&b=2")).toEqual({ a: "", b: "2" });
});

test("parses empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses encoded characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});
