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
test("parses multiple parameters", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});
test("parses empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});
test("parses parameter without value", () => {
  expect(parseQueryString("flag")).toEqual({ flag: "" });
});
test("parses parameter with empty value", () => {
  expect(parseQueryString("empty=")).toEqual({ empty: "" });
}); 
test("parses parameter with multiple =", () => {
  expect(parseQueryString("data=a=b=c")).toEqual({ data: "a=b=c" });
});
test("parses parameter with special characters", () => {
  expect(parseQueryString("name=John%20Doe&age=30")).toEqual({ name: "John%20Doe", age: "30" });
});

