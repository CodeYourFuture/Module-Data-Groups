// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toStrictEqual({
    equation: "x=y+1",
  });
});
test("parses querystring ", () => {
  expect(parseQueryString("string1=x+1&string2=x-1")).toStrictEqual({
    string1: "x+1",
    string2: "x-1",
  });
});
test("an empty querystring should return {} ", () => {
  expect(parseQueryString("")).toStrictEqual({});
});
test("parses querystring with empty value", () => {
  expect(parseQueryString("string1=x+1&string2=")).toStrictEqual({
    string1: "x+1",
    string2: "",
  });
});
test("parse query string with more than &",()=>{
  expect(parseQueryString("a=b&=&c=d")).toStrictEqual({a:"b","":"",c:"d"});
  expect(parseQueryString("a=b&&c=d")).toStrictEqual({a:"b","":"",c:"d"})
})
test("parse query string with no key",()=>{
  expect(parseQueryString("=b")).toStrictEqual({"":"b"})
})
test("parse query string with encoded charecters",()=>{
  expect(parseQueryString("a%25b=c%26d")).toStrictEqual({
    "a%b": "c&d"
  }
  )
})