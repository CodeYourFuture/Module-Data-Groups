// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

// Verifies that raw '+' characters are interpreted as spaces by URLSearchParams
test("parses query string values with unencoded '+' as spaces", () => {
  const result = parseQueryString("equation=x=y+1");
  const output = { equation: "x=y 1" }; // because URLSearchParams decodes '+' as a space according to URL encoding rules
  expect(result).toEqual(output);
});

// Verifies that properly URL-encoded '=' and '+' characters are preserved correctly
test("parses query string values with encoded '=' and '+' correctly", () => {
  const result = parseQueryString("equation=x%3Dy%2B1"); // '%3D' => '=', '%2B' => '+'
  const output = { equation: "x=y+1" }; // because URLSearchParams decodes percent-encoded characters but preserves literal '+' when encoded as '%2B'
  expect(result).toEqual(output);
});

test("returns empty object for empty string", () => {
  const result = parseQueryString();
  const output = {};
  expect(result).toEqual(output);
});

test("handles undefined input", () => {
  const result = parseQueryString(undefined);
  const output = {};
  expect(result).toEqual(output);
});

test("handles null input", () => {
  const result = parseQueryString(null);
  const output = {};
  expect(result).toEqual(output);
});

test("handles key without value", () => {
  const result = parseQueryString("name=");
  const output = { name: "" };
  expect(result).toEqual(output);
});

test("handles missing key", () => {
  const result = parseQueryString("=John");
  const output = { "": "John" };
  expect(result).toEqual(output);
});

test("handles multiple key-value pairs", () => {
  const result = parseQueryString("name=John&age=30&city=London");
  const output = {
    name: "John",
    age: "30",
    city: "London",
  };
  expect(result).toEqual(output);
});

test("handles duplicate keys by overwriting previous value", () => {
  const result = parseQueryString("tag=js&tag=web");
  const output = { tag: "web" };
  expect(result).toEqual(output);
});

test("handles URL-encoded characters", () => {
  const result = parseQueryString("city=New%20York");
  const output = { city: "New York" };
  expect(result).toEqual(output);
});

test("handles unencoded special characters", () => {
  const result = parseQueryString("greeting=hello world");
  const output = { greeting: "hello world" };
  expect(result).toEqual(output);
});

test("handles keys containing '='", () => {
  const result = parseQueryString("a=b=c=d");
  const output = { a: "b=c=d" };
  expect(result).toEqual(output);
});

test("ignores leading and trailing ampersands", () => {
  const result = parseQueryString("&name=John&age=30&");
  const output = { name: "John", age: "30" };
  expect(result).toEqual(output);
});

test("ignores empty pairs", () => {
  const result = parseQueryString("name=John&&age=30&");
  const output = { name: "John", age: "30" };
  expect(result).toEqual(output);
});

test("handles equals sign only", () => {
  const result = parseQueryString("=");
  const output = { "": "" };
  expect(result).toEqual(output);
});
