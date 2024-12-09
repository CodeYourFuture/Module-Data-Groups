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

test("parses querystring with encoded characters", () => {
  expect(parseQueryString("name=John%20Doe&age=30")).toEqual({
    "name": "John Doe",
    "age": "30",
  });
});

test("parses querystring with missing values", () => {
  expect(parseQueryString("key=&empty")).toEqual({
    "key": "",
    "empty": "",
  });
});

test("parses querystring with duplicate keys", () => {
  expect(parseQueryString("hobby=reading&hobby=traveling")).toEqual({
    "hobby": ["reading", "traveling"],
  });
});

test("parses an empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses querystring with only & separators", () => {
  expect(parseQueryString("&&&")).toEqual({});
});
