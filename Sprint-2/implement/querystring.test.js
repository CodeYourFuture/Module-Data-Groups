// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("given an empty string the function, returns empty object", () => {
  const input = "";
  const expected = {};
  const result = parseQueryString(input);
  expect(result).toEqual(expected);
});

test("parses querystring values containing one key-value pair", () => {
  const input = "equation=x=y+1";
  const expected = { equation: "x=y+1" };
  const result = parseQueryString(input);
  expect(result).toEqual(expected);
});

test("parses multiple key-value pairs", () => {
  const input = "equation=x=y+1&equation2=2b-3a&equation3=y2+x2";
  const expected = {
    equation: "x=y+1",
    equation2: "2b-3a",
    equation3: "y2+x2",
  };
  const result = parseQueryString(input);
  expect(result).toEqual(expected);
});
