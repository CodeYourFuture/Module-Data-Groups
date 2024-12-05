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
test("handles keys with no values", () => {
  expect(parseQueryString("key=")).toEqual({ key: "" });
});
test("handles values with =", () => {
  expect(parseQueryString("key=x=y=z")).toEqual({ key: "x=y=z" });
});
test("parses multiple key-value pairs with complex values", () => {
  expect(parseQueryString("key1=a&key2=b=c=d")).toEqual({
    key1: "a",
    key2: "b=c=d",
  });
});
