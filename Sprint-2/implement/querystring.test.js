// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
  expect(parseQueryString("page=1")).toEqual({
    page: "1",
  });
  expect(parseQueryString("name=Ali")).toEqual({
    name: "Ali",
  });
});

test("parses querystring values containing &", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
  expect(parseQueryString("name=Ayub&colour=blue")).toEqual({
    name: "Ayub",
    colour: "blue",
  });
});

test.only("handles malformed querystrings", () => {
  // if value is empty, return empty string for value.
  expect(parseQueryString("key=")).toEqual({
    key: "",
  });
  // if key is empty don't return anything.
  expect(parseQueryString("=value")).toEqual({});
  // if there is a key but no equals, return empty string for value.
  expect(parseQueryString("key")).toEqual({ key: "" });
  // if key is empty and value is empty, don't return anything for that item
  expect(parseQueryString("key1=value1&=&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
  expect(parseQueryString("key1=value1&&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});
