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
test("parses simple key=value pairs", () => {
  expect(parseQueryString("name=John&age=30")).toEqual({
    name: "John",
    age: "30",
  });
});

test("parses value containing '='", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("handles keys with no value", () => {
  expect(parseQueryString("flag&key=value")).toEqual({
    flag: "",
    key: "value",
  });
});

test("handles multiple '=' in value", () => {
  expect(parseQueryString("data=key=value=extra")).toEqual({
    data: "key=value=extra",
  });
});

test("handles keys with empty values", () => {
  expect(parseQueryString("name=")).toEqual({
    name: "",
  });
});
