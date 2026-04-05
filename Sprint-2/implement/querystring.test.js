// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses querystring values containing duplicate keys", () => {
  expect(parseQueryString("a=3&a=4&a=1")).toEqual({
    a: "3",
    a: "4",
    a: "1",
  });
});

test("parses querystring values containing url encoding cases ", () => {
  expect(parseQueryString("city=New%20York")).toEqual({
    city: "New%20York",
  });
});

test("parses querystring values containing invalid type", () => {
  expect(parseQueryString({ "a=1": undefined })).toEqual("invalid input");
});

test("parses querystring values containing multiple strings", () => {
  expect(parseQueryString("user=alex&age=16&city=London")).toEqual({
    user: "alex",
    age: "16",
    city: "London",
  });
});

test("parses querystring values not containing =& strings in the correct order", () => {
  expect(parseQueryString("key1&key2&key3")).toEqual({});
  expect(parseQueryString("key1=&key2&key3")).toEqual({});
});
