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

//Test: Handles URL-encoded characters (e.g. space encoded as %20)
test("decodes percent-encoded characters", () => {
  expect(parseQueryString("note=hello%20world")).toEqual({
    note: "hello world",
  });
});

// Test: Key without a value (e.g. justKey)
// Should treat missing value as an empty string

test("parses key without value", () => {
  expect(parseQueryString("justKey")).toEqual({
    justKey: "",
  });
});

// Test: Empty query string

test("returns empty object for empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});


// Test: Handles multiple pairs including one with no value

test("handles mixed keys with and without values", () => {
  expect(parseQueryString("name=Alice&flag")).toEqual({
    name: "Alice",
    flag: "",
  });
});