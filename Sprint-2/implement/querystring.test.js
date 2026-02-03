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

test("parses querystring values containing repetitive keys", () => {
  expect(parseQueryString("a=1&b=6&a=2&a=3&b=7")).toEqual({
    a: ["1", "2", "3"],
    b: ["6", "7"],
  });
});

test("parses querystring values containing repetitive keys with same values", () => {
  expect(parseQueryString("a=1&b=6&a=2&a=3&b=6")).toEqual({
    a: ["1", "2", "3"],
    b: "6",
  });
});

test("parses querystring values containing no key and value but only =", () => {
  expect(parseQueryString("=&b=6&a=2&=&=")).toEqual({
    a: "2",
    b: "6",
  });
});

test("parses querystring values missing = sign", () => {
  expect(parseQueryString("id=5&name=mohsen&age")).toEqual({
    id: "5",
    name: "mohsen",
    age: "",
  });
});
