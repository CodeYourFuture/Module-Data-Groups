// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});
test("parses empty values", () =>{
  expect(parseQueryString("a=&b=2")).toEqual({a:"",b:"2"})
});

test("parses containing =",() => {
  expect(parseQueryString("equation=x=y+1")).toEqual({equation: "x=y+1"})
});


test("parses empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses multiple pairs including empty value", () => {
  expect(parseQueryString("a=1&b=&c=3")).toEqual({ a: "1", b: "", c: "3" });
});

test("parses repeated keys (last one wins)", () => {
  expect(parseQueryString("a=1&a=2")).toEqual({ a: "2" });
});
