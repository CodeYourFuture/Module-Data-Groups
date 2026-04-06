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

test("ignores a leading question mark", () => {
  expect(parseQueryString("?name=zadie&age=40")).toEqual({
    name: "zadie",
    age: "40",
  });
});

test("handles empty pairs caused by stray ampersands", () => {
  expect(parseQueryString("a=1&&&b=2&")).toEqual({
    a: "1",
    b: "2",
  });
});

test("handles keys that have no values", () => {
  expect(parseQueryString("active&sort=desc")).toEqual({
    active: "",
    sort: "desc",
  });
});
