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

test("handles empty value", () => {
  expect(parseQueryString("username=")).toEqual({ username: "" });
});

test("handles empty key", () => {
  expect(parseQueryString("=value")).toEqual({ "": "value" });
});

test("handles only ampersands", () => {
  expect(parseQueryString("&&&&")).toEqual({});
});

test("handles repeated keys", () => {
  expect(parseQueryString("key=value1&key=value2")).toEqual({ key: "value2" });
});

test("handles ampersands at start and end", () => {
  expect(parseQueryString("&&name=Ali&&")).toEqual({ name: "Ali" });
});