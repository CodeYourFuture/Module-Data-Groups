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

//additional test cases
test("handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles single key-value pair", () => {
  expect(parseQueryString("key=value")).toEqual({ key: "value" });
});

test("handles multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});

test("handles keys without values", () => {
  expect(parseQueryString("key1&key2")).toEqual({
    key1: "",
    key2: "",
  });
});

test("handles empty values", () => {
  expect(parseQueryString("key1=&key2=")).toEqual({
    key1: "",
    key2: "",
  });
});

test("decodes URL-encoded values", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});

test("handles special characters in keys and values", () => {
  expect(parseQueryString("q=@%23%24%25%5E&z=!%2A()")).toEqual({
    q: "@#$%^",
    z: "!*()",
  });
});

test("handles duplicate keys by using the last value", () => {
  expect(parseQueryString("key=value1&key=value2")).toEqual({
    key: "value2",
  });
});
