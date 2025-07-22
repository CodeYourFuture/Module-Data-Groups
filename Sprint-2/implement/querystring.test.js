// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

// Values containing equal signs and plus signs
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

// Empty string
test("returns empty object for empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Multiple key-value pairs
test("parses multiple key-value pairs", () => {
  expect(parseQueryString("name=alice&age=30")).toEqual({
    name: "alice",
    age: "30",
  });
});

// Key with no value
test("handles keys with no value", () => {
  expect(parseQueryString("empty=")).toEqual({
    empty: "",
  });
});

// Key without =
test("treats standalone key as having empty value", () => {
  expect(parseQueryString("justkey")).toEqual({
    justkey: "",
  });
});

/*
I reviewed and fixed the parseQueryString function to correctly handle query string edge cases.
Originally, the function incorrectly split key-value pairs on every =, 
which caused values containing = (like "x=y+1") to be truncated.  I updated the implementation to split only on
 the first = using indexOf and slice, which preserves the full value even when = appears within it.
I also added logic to support:
- Empty query strings ("" → {})
- Keys with no values (e.g., "foo=" → { foo: "" })
- Standalone keys (e.g., "foo" → { foo: "" })
- Multiple key-value pairs
*/



