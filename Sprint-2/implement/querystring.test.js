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

// Given a query string with multiple key-value pairs, it should correctly parse them
test('parseQueryString("a=b&&c=d")', () => {
  expect(parseQueryString("a=b&&c=d")).toEqual({ a: 'b', '': '', c: 'd' });
});

// Given a query string with percent-encoded characters, it should decode them correctly
test('parseQueryString("a%25b=c%26d")', () => {
  expect(parseQueryString("a%25b=c%26d")).toEqual({ 'a%b': 'c&d' });
});

// Given a query string with valid key-value pairs, it should correctly parse the pairs
test('parseQueryString("a=b&=&c=d")', () => {
  expect(parseQueryString("a=b&=&c=d")).toEqual({ a: 'b', '': '', c: 'd' });
});

// Given a query string with a key but no value, it should correctly handle an empty value
test('parseQueryString("a=")', () => {
  expect(parseQueryString("a=")).toEqual({ a: '' });
});

// Given a query string with an empty key and a value, it should correctly handle an empty key
test('parseQueryString("=b")', () => {
  expect(parseQueryString("=b")).toEqual({ '': 'b' });
});