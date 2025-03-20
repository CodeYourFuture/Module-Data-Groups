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
//implementing different test cases:
test("handles a normal query string", () => {
  expect(parseQueryString("name=John&age=25")).toEqual({ name: "John", age: "25" });
});
test("handles URL encoding", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York"
  });
});

test("handles missing values", () => {
  expect(parseQueryString("name=&age=")).toEqual({ name: "", age: "" });
});

test("handles missing keys", () => {
  expect(parseQueryString("=value")).toEqual({ "": "value" });
});

test("handles missing key and value", () => {
  expect(parseQueryString("=")).toEqual({ "": "" });
});

test("handles a single key with no =", () => {
  expect(parseQueryString("singleKey")).toEqual({ singleKey: "" });
});

test("handles an empty string", () => {
  expect(parseQueryString("")).toEqual({});
});
