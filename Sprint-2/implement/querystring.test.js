// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  const query = "equation=x=y+1";
  expect(parseQueryString(query)).toEqual({
    "equation": "x=y+1",
  });
});


test("return empty object for empty query string", () => {
  const query = "";
  expect(parseQueryString(query)).toEqual({});
});

test("parses multiple key-value pairs", () => {
  const query = "a=1&b=2&c=3";
  expect(parseQueryString(query)).toEqual({
    a: "1",
    b: "2",
    c: "3"
  });
});

test("parses query string with empty value", () => {
  const query = "key1=&key2=value2";
  expect(parseQueryString(query)).toEqual({
    key1: "",
    key2: "value2"
  });
});



