const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses basic key/value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});

test("handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
  expect(parseQueryString("?")).toEqual({});
});

test("handles keys without value and keys with empty value", () => {
  expect(parseQueryString("noValue")).toEqual({ noValue: "" });
  expect(parseQueryString("empty=")).toEqual({ empty: "" });
});

test("decodes percent-encoding and plus signs", () => {
  expect(parseQueryString("name=John%20Doe&query=hello+world")).toEqual({
    name: "John Doe",
    query: "hello world",
  });
});

test("collects duplicate keys into arrays in order", () => {
  expect(parseQueryString("a=1&a=2&a=3")).toEqual({ a: ["1", "2", "3"] });
});

