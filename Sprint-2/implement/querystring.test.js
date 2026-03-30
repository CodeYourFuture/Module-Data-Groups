// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")


// Given a querystring with a value that contains an = symbol
// When passed to parseQueryString
// Then it should treat everything after the first = as the value
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y%2B1")).toEqual({
    equation: "x=y+1",
  });
});

// Given an empty string 
// when 
