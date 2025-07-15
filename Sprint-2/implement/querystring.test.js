// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y 1",
  });
});
test("parses single key=value", () => {
  expect(parseQueryString("name=Rahwa")).toEqual({ name: "Rahwa" });
});

test("handles key with no value", () => {
  expect(parseQueryString("name")).toEqual({ name: "" });
});

test("handles key with empty value", () => {
  expect(parseQueryString("name=")).toEqual({ name: "" });
});

test("value contains URL-encoded characters", () => {
  expect(parseQueryString("note=Hello%2C+World%21")).toEqual({
    note: "Hello, World!",
  });
});

test("multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});

test("empty string returns empty object", () => {
  expect(parseQueryString("")).toEqual({});
});
