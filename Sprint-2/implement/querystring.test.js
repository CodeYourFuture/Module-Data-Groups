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

test("decodes percent-encoded values", () => {
  expect(parseQueryString("city=New%20York")).toEqual({ city: "New York" });
});

test("handles plus signs as spaces", () => {
  expect(parseQueryString("name=John+Doe")).toEqual({ name: "John Doe" });
});

test("handles missing value", () => {
  expect(parseQueryString("foo=")).toEqual({ foo: "" });
});

test("handles missing key", () => {
  expect(parseQueryString("=bar")).toEqual({ "": "bar" });
});

test("handles key with no equals sign", () => {
  expect(parseQueryString("flag")).toEqual({ flag: "" });
});

test("handles multiple equals signs in value", () => {
  expect(parseQueryString("x=1=2=3")).toEqual({ x: "1=2=3" });
});