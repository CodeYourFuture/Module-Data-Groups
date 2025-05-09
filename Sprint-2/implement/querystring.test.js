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

// Test for empty query string
test("returns empty object for empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Multiple parameters with values containing "="
test("parses multiple querystring parameters", () => {
  expect(parseQueryString("equation=x=y+1&answer=2=3")).toEqual({
    "equation": "x=y+1",
    "answer": "2=3"
  });
});

// Multiple & with empty values
test("parses querystring with empty values", () => {
  expect(parseQueryString("key1=&key2=value2&key3=")).toEqual({
    "key1": "",
    "key2": "value2",
    "key3": ""
  });
});

// Key with no value (empty string after =):
test("parses querystring with empty value for a key", () => {
  expect(parseQueryString("key=")).toEqual({
    "key": ""
  });
});

// Keys without = sign (invalid or malformed query strings):
test("handles keys without values gracefully", () => {
  expect(parseQueryString("key1&key2=value2")).toEqual({
    "key1": undefined,  // This should be undefined
    "key2": "value2"    // This should be the value "value2"
  });
});

// Handling encoded characters (like %20 for space):
test("parses querystring with encoded characters", () => {
  expect(parseQueryString("key1=value%20with%20spaces")).toEqual({
    "key1": "value with spaces"
  });
});

// Multiple `&` symbols and empty keys
test("handles querystrings with multiple & symbols and empty keys", () => {
  expect(parseQueryString("&key1=value1&&key2=value2&key3=")).toEqual({
    "key1": "value1",
    "key2": "value2",
    "key3": ""
  });
});

// Handling query strings where the key has no value (e.g., "key1&key2=value2")
test("handles keys without values correctly", () => {
  expect(parseQueryString("key1&key2=value2")).toEqual({
    "key1": undefined,  // key1 has no value, so it should be undefined
    "key2": "value2"
  });
});

// Decoding of special characters (e.g., '%20' for space, '%25' for '%')
test("parses querystring with multiple encoded characters", () => {
  expect(parseQueryString("key1=value%20with%20spaces&key2=percent%25")).toEqual({
    "key1": "value with spaces",
    "key2": "percent%"
  });
});
