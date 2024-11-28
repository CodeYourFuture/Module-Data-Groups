// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test("parses keys without values", () => {
  expect(parseQueryString("key1&key2=")).toEqual({
    "key1": "",
    "key2": "",
  });
});

test("parses empty query strings", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    "key1": "value1",
    "key2": "value2",
  });
});

test("parses keys or values with special characters", () => {
  expect(parseQueryString("key%201=value%202&key=value")).toEqual({
    "key%201": "value%202",
    "key": "value",
  });
});

test("handles no '=' in a key-value pair", () => {
  expect(parseQueryString("key1&key2=value2")).toEqual({
    "key1": "",
    "key2": "value2",
  });
});
