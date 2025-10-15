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

test("Single Key with No Value", () => {
  expect(parseQueryString("key=")).toEqual({ key: "" });
});

test("Key Without = Sign", () => {
  expect(parseQueryString("aloneKey")).toEqual({ aloneKey: "" });
});

test("Multiple Parameters", () => {
  expect(parseQueryString("name=Brian&age=35&country=UK")).toEqual({
    name: "Brian",
    age: "35",
    country: "UK",
  });
});

test("Duplicate Keys", () => {
  expect(parseQueryString("tag=js&tag=node&tag=react")).toEqual({
    tag: "react",
  });
});

test("Values Containing Special Characters", () => {
  expect(parseQueryString("query=a%20b%26c%3Dd")).toEqual({ query: "a b&c=d" });
  expect(parseQueryString("a=1&b=2&")).toEqual({ a: "1", b: "2" });
});

test("Starting with ?", () => {
  expect(parseQueryString("?foo=bar")).toEqual({ foo: "bar" });
});

test("Mixed encoded and plain parts", () => {
  expect(parseQueryString("message=Hello%20World%21&debug=true")).toEqual({
    message: "Hello World!",
    debug: "true",
  });
});
