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


test("parses empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses single key=value", () => {
  expect(parseQueryString("name=John")).toEqual({ name: "John" });
});

test("parses multiple key=value pairs", () => {
  expect(parseQueryString("name=John&age=30")).toEqual({ name: "John", age: "30" });
});

test("handles missing value", () => {
  expect(parseQueryString("name=")).toEqual({ name: "" });
});

test("handles missing key", () => {
  expect(parseQueryString("=value")).toEqual({ "": "value" });
});

test("handles duplicate keys (last one wins)", () => {
  expect(parseQueryString("name=John&name=Jane")).toEqual({ name: "Jane" });
});
