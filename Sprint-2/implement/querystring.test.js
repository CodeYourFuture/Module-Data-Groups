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
test("parses querystring with multiple values", () => {
  expect(parseQueryString("humanleg=2&spider=6&dog=4")).toEqual({
    "humanleg": "2",
    "spider": "6",
    "dog": "4",
  });
});
test("parses querystring with empty values", () => {  
  expect(parseQueryString("a=&b=2&c=")).toEqual({
    "a": "",
    "b": "2",
    "c": "",
  });
});
test("parses querystring with special characters", () => {
  expect(parseQueryString("name=Mayowa%20Fadare&age=25")).toEqual({
    "name": "Mayowa Fadare",
    "age": "25",
  });
});