// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.



const parseQueryString = require("./querystring.js")

test("parses querystring with single value", () => {
  expect(parseQueryString("a=1")).toEqual({"a": "1",
  });
});
test("parses querystring with multiple values", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({
    "a": "1",
    "b": "2",
  });
});

//other edge cases
test("handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});
test("handles query string with no key-value pairs", () => {
  expect(parseQueryString("&&")).toEqual({});
});
test("handles query string with only keys", () => {
  expect(parseQueryString("key1&key2")).toEqual({
    key1: undefined,
    key2: undefined
  });
});

test("handles missing value", () => {
  expect(parseQueryString("foo=")).toEqual({ foo: "" });
});

test("handles missing key", () => {
  expect(parseQueryString("=bar")).toEqual({ "": "bar" });
});
test("handles multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2"
  });
});
test("handles multiple key-value pairs with same key", () => {
  expect(parseQueryString("key=value1&key=value2")).toEqual({
    key: "value2" // last value should overwrite previous
  });
});
// Additional edge cases
test("handles leading question mark", () => {
  expect(parseQueryString("?a=1&b=2")).toEqual({ a: "1", b: "2" });
});

test("decodes percent-encoded characters", () => {
  expect(parseQueryString("a=%20b%20")).toEqual({ a: " b " });
});

test("handles key with no value and then with value", () => {
  expect(parseQueryString("key&key=value")).toEqual({
    key: [undefined, "value"],
  });
});

test("handles value with equals sign", () => {
  expect(parseQueryString("a=1=2")).toEqual({ a: "1=2" });
});
