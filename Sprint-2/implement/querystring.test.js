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

test("handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles empty key", () => {
  expect(parseQueryString("=value")).toEqual({
    "": "value",
  });
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2&c=3")).toEqual({
    a: "1",
    b: "2",
    c: "3",
  });
});

test("parses values with spaces or special characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New+York")).toEqual({
    name: "John Doe",
    city: "New+York",
  });
  expect(parseQueryString("tags%5B%5D=hello%20world")).toEqual({
    "tags[]": "hello world",
  });
});

test("throws TypeError for non-string input", () => {
  expect(() => parseQueryString(null)).toThrow(TypeError);
  expect(() => parseQueryString(null)).toThrow(
    "Invalid input: Input must be a string"
  );

  expect(() => parseQueryString(undefined)).toThrow(TypeError);
  expect(() => parseQueryString(undefined)).toThrow(
    "Invalid input: Input must be a string"
  );

  expect(() => parseQueryString(123)).toThrow(TypeError);
  expect(() => parseQueryString(123)).toThrow(
    "Invalid input: Input must be a string"
  );

  expect(() => parseQueryString({})).toThrow(TypeError);
  expect(() => parseQueryString({})).toThrow(
    "Invalid input: Input must be a string"
  );
});

test("handles repeated keys, last value wins", () => {
  expect(parseQueryString("a=1&a=2")).toEqual({
    a: "2",
  });
});

test("handles trailing '&'", () => {
  expect(parseQueryString("a=1&b=2&")).toEqual({
    a: "1",
    b: "2",
    "": "", // empty pair after trailing &
  });
});

test("handles leading '&'", () => {
  expect(parseQueryString("&a=1&b=2")).toEqual({
    "": "", // empty pair before leading &
    a: "1",
    b: "2",
  });
});
