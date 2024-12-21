// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  const value = "equation=x=y+1"
  expect(parseQueryString(value)).toEqual({
    "equation": "x=y+1",
  });
});

test("parses multiple values for the same key", () => {
  const value = "key=value1&key=value2&key=value3";
  expect(parseQueryString(value)).toEqual({
      "key": ["value1", "value2", "value3"],
  });
});


test("parses empty keys and values", () => {
  const value = "=value&key=&key2=value2";
  expect(parseQueryString(value)).toEqual({
      "": "value",   
      "key": "",    
      "key2": "value2",
  });
});


