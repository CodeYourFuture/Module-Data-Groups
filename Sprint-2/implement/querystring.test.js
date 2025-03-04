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
test("handles multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});

test("handles values with spaces and special characters", () => {
  expect(parseQueryString("greeting=hello%20world&symbol=%26")).toEqual({
    greeting: "hello world",
    symbol: "&",
  });
});

test("handles duplicate keys by storing values in an array", () => {
  expect(parseQueryString("key=value1&key=value2")).toEqual({
    key: ["value1", "value2"],
  });
});

test("handles missing values correctly", () => {
  expect(parseQueryString("key1=&key2")).toEqual({
    key1: "",
    key2: "",
  });
});

test("handles an empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});
