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


test("parses querystring with missing value and multiple pairs", () => {
  expect(parseQueryString("a=1&b=2&c")).toEqual({
    a: "1", b: "2", c: ""
  });
});


test("parses querystring with a value and no key", () => {
  expect(parseQueryString("=valueOnly")).toEqual({
    "": "valueOnly",
  });
});


test("parses querystring with a key and no value", () => {
  expect(parseQueryString("name=")).toEqual({
    name: "",
  });
});


test("parses querystring with a value that includes multiple '=' characters", () => {
  expect(parseQueryString("query=a=b=c")).toEqual({
    query: "a=b=c",
  });
});


test("parses querystring with a standard multi-key query string", () => {
  expect(parseQueryString("name=Sunny&age=22&city=Bath")).toEqual({
    name: 'Sunny', age: '22', city: 'Bath',
  });
});


test("returns an empty object when query string is empty", () => {
  expect(parseQueryString("")).toEqual({});
});