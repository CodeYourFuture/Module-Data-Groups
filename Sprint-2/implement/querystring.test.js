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

test("decodes URL-encoded characters like spaces", () => {
  expect(parseQueryString("month=March%202026&user=John%20Doe")).toEqual({
    "month": "March 2026",
    "user": "John Doe"
  });
});
// no equals, treats flag as an invalid input so it needs to be fixed.
test("throws error when no equals sign is present", () => {
  expect(() => parseQueryString("flag")).toThrow("Invalid query string");
});

// Empty Values
test("handles keys with an equals sign but no value", () => {
  expect(parseQueryString("user=")).toEqual({
    "user": ""
  });
});

// Empty String Case
test("returns an empty object for an empty string", () => {
  expect(parseQueryString("")).toEqual({});
});