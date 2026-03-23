// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("the function should return object when a string parses querystring values containing = is passed", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
  expect(parseQueryString("equation")).toEqual({});
  expect(parseQueryString("name=ahmed&age=29")).toEqual({
    name: "ahmed",
    age: "29",
  });
  expect(parseQueryString("q=sa3")).toEqual({ q: "sa3" });
  expect(parseQueryString("code=future+codebetter")).toEqual({
    code: "future+codebetter",
  });
  expect(parseQueryString("location=london=x=+12=2")).toEqual({
    location: "london=x=+12=2",
  });
});
