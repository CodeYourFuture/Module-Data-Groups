// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({"equation": "x=y+1",});  
});

test("parses querystring, if querystring is empty, return an empty object ", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses querystring, if querystring does not contain '='", () => {
  expect(parseQueryString("key")).toEqual({ key: "" });
});

test("parses querystring, if querystring contains encoded characters", () => {
  expect(parseQueryString("name=Tom%20Collin&age=27%20years")).toEqual({name: "Tom Collin", age: "27 years",});
});

test("parses querystring, if querystring contains mixed valid and invalid pairs", () => {
  expect(parseQueryString("key1=value1&&&=value2&key2=value2")).toEqual({key1: "value1", key2: "value2",});
});