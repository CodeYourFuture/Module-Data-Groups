// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses simple query strings", () => {
  expect(parseQueryString("key=value")).toEqual({
    key: "value",
  });
});

test("parses query strings with multiple key-value pairs", () => {
  expect(parseQueryString("key1=value1&key2=value2")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});

test("handles empty query strings", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles keys with no values", () => {
  expect(parseQueryString("key=")).toEqual({
    key: "",
  });
});

test("parses values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1", 
  });
});

test("parses keys and values with special characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});

test("parses keys with no values and multiple pairs", () => {
  expect(parseQueryString("key1=value1&key2=&key3=value3")).toEqual({
    key1: "value1",
    key2: "",
    key3: "value3",
  });
});

test("parses query strings with missing `=`", () => {
  expect(parseQueryString("key1=value1&key2&key3=value3")).toEqual({
    key1: "value1",
    key2: "",
    key3: "value3",
  });
});

test("parses keys and values with multiple `=`", () => {
  expect(parseQueryString("a===b")).toEqual({
    a: "==b",
  });
});
