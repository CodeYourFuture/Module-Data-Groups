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

test("parses simple querystring", () => {
  expect(parseQueryString("name=Arnav&age=13")).toEqual({
    name: "Arnav",
    age: "13",
  });
});

test("parses empty querystring  ", () => {
  expect(parseQueryString(" ")).toEqual({});
});

test("parses querystring with value missing", () => {
  expect(parseQueryString("key1=&key2=value")).toEqual({
    key1:"",
    key2: "value",
  });
});

test("parses querystring contains multiple '=' ", () => {
  expect(parseQueryString("key1=abc=123&key2=x=y=z")).toEqual({
    key1: "abc=123",
    key2: "x=y=z",
  });
});

test("parses querystring with encoded values", () => {
  expect(parseQueryString("name=John%20Doe&message=hello%3Dworld")).toEqual({
  name: "John Doe",
  message: "hello=world",
  });
});
