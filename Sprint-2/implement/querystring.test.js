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

test("handles keys without values", () => {
  expect(parseQueryString("key1=&key2")).toEqual({ key1: "", key2: null });
});

test("handles repeated keys, last value wins", () => {
  expect(parseQueryString("a=1&a=2")).toEqual({ a: "2" });
});

test("decodes URI components", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});

test("handles values containing special characters", () => {
  expect(parseQueryString("param=%26%3D%3F")).toEqual({ param: "&=?" });
});