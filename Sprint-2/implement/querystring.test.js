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
test("handles URL encoding in keys and values", () => {
  expect(parseQueryString("search=hello%20world&sort=d%26a")).toEqual({
    search: "hello world",
    sort: "d&a",
  });
});
test("handles duplicate keys by creating an array of values", () => {
  expect(parseQueryString("color=red&color=blue&size=m")).toEqual({
    color: ["red", "blue"],
    size: "m",
  });
});
test("handles keys with empty or missing values", () => {
  expect(parseQueryString("key1=&key2=value&key3&key4=")).toEqual({
    key1: "",
    key2: "value",
    key3: "",
    key4: "",
  });
});
test("handles empty string, leading question mark, and malformed input", () => {
  expect(parseQueryString("")).toEqual({});
  expect(parseQueryString("?a=1")).toEqual({ a: "1" });
  expect(parseQueryString("a=1&&b=2")).toEqual({ a: "1", b: "2" });
});
