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
const parseQueryString = require("./querystring.js");

test("parses a basic query string", () => {
  expect(parseQueryString("name=John&age=30")).toEqual({
    name: "John",
    age: "30",
  });
});


test("parses query string with missing values", () => {
  expect(parseQueryString("foo&bar=")).toEqual({
    foo: "",
    bar: "",
  });
});

test("parses query string with URL encoding", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});

test("handles empty query strings", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2&c=3")).toEqual({
    a: "1",
    b: "2",
    c: "3",
  });
});

test("handles keys with no values", () => {
  expect(parseQueryString("a=&b=&c")).toEqual({
    a: "",
    b: "",
    c: "",
  });
});

test("handles keys without `=`", () => {
  expect(parseQueryString("singleKey")).toEqual({
    singleKey: "",
  });
});

test("handles multiple `=` signs in a value", () => {
  expect(parseQueryString("token=a=b=c")).toEqual({
    token: "a=b=c",
  });
});
