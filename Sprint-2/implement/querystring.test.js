// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

describe("parseQueryString edge cases", () => {
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

  test("returns an empty object for an empty query string", () => {
    expect(parseQueryString("")).toEqual({}); 
  });

  test("handles keys with no assigned value", () => {
    expect(parseQueryString("key_no_value")).toEqual({
      "key_no_value": undefined
    });
  });

  test("handles keys with an empty string value (e.g., 'key=')", () => {
    expect(parseQueryString("key_empty_value=")).toEqual({
      "key_empty_value": ""
    });
  });

  test("handles multiple '&' by returning correct object and no empty keys", () => {
    expect(parseQueryString("a=1&&b=2")).toEqual({
      "a": "1",
      "b": "2"
    });
    expect(Object.keys(result)).not.toContain("")
  });

  test("parses querystring values containing '='", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      "equation": "x=y+1",
    });
  });
});
