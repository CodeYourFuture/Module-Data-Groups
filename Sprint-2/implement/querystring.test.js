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
test("An empty string should return an empty object", () => {
  expect(parseQueryString("")).toEqual({});
});
test("parses querystring parameters with an empty value", () => {
  expect(parseQueryString("name=")).toEqual({ name: "" });
});
test("handles querystring parameters that have no = sign", () => {
  expect(parseQueryString("flag")).toEqual({ flag: "" });
});
test("parses querystring values containing multiple = characters", () => {
  expect(parseQueryString("token=a=b=c=d")).toEqual({ token: "a=b=c=d" });
});
test("handles multiple querystring parameters when one value contains =", () => {
  expect(parseQueryString("a=1&equation=x=y+1")).toEqual({
    a: "1",
    equation: "x=y+1",
  });
});
