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
  expect(parseQueryString("a=1&b=2=c")).toEqual({
    "a": "1",
    "b": "2=c",
  });
});
test("parses querystring Multiple values for the same key", () =>{
  expect(parseQueryString("category=books&category=movies&category=music")).toEqual({
    "category": ["books", "movies", "music"]
  })
});
test("parses querystring with empty values", () => {
  expect(parseQueryString("username=")).toEqual({
    username: ""
  });
});
test("parses querystring key with no values", () => {
  expect(parseQueryString("hello=")).toEqual({ hello: "" });
});
test ("parses querystring with no equal sign", () => {
  expect(parseQueryString("bye")).toEqual({
    bye: ""
  });
});
test ("parses full URL with query strings", () => {
  expect(parseQueryString("https://example.com?name=John&age=30")).toEqual({
    name: "John",
    age: "30"
  });
});
