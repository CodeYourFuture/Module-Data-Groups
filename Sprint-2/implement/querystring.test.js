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

test("parses querystring values containing multiple =", () => {
  expect(parseQueryString("equation=x=y+1&another=2=3")).toEqual({
    "equation": "x=y+1",
    "another": "2=3",
  });
});

test("parses querystring with no values", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses querystring with multiple values", () => {
  expect(parseQueryString("a=1&b=2&c=3")).toEqual({
    "a": "1",
    "b": "2",
    "c": "3",
  });
});

test("parses querystring with empty values", () => {
  expect(parseQueryString("a=&b=&c=")).toEqual({
    "a": "",
    "b": "",
    "c": "",
  });
});

test("parses querystring with special characters", () => {
  expect(parseQueryString("a=1&b=2%20with%20spaces&c=3%40email.com")).toEqual({
    "a": "1",
    "b": "2 with spaces",
    "c": "3@email.com",
  });
});

test("parses querystring with encoded characters", () => {
  expect(parseQueryString("a=1&b=%C3%A9%20%C3%A0%20%C3%A9")).toEqual({
    "a": "1",
    "b": "é à é",
  });
});
