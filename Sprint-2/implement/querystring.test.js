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
test("parses multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});
test("parses empty string as empty object", () => {
  expect(parseQueryString("")).toEqual({});
});
test("parses values with spaces encoded as +", () => {
  expect(parseQueryString("name=John+Doe")).toEqual({ name: "John Doe" });
});

test("parses URL encoded special characters", () => {
  expect(parseQueryString("text=Hello%2C%20World%21")).toEqual({ text: "Hello, World!" });
});

test("parses values containing equals sign for any key", () => {
  expect(parseQueryString("formula=a=b+c")).toEqual({ formula: "a=b+c" });
  expect(parseQueryString("expression=x=5&result=y=10")).toEqual({ expression: "x=5", result: "y=10" });
});
