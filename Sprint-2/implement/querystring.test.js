// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

// Empty string
test("empty string", () => {
  expect(parseQueryString("")).toEqual({});
});
// Single value
test("single key-value", () => {
  expect(parseQueryString("name=alice")).toEqual({ name: "alice" });
});

// Multiple pairs
test("multiple pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});

// Key with no value
test("key with no value", () => {
  expect(parseQueryString("flag")).toEqual({ flag: "" });
});

// Empty value
test("empty value", () => {
  expect(parseQueryString("name=")).toEqual({ name: "" });
});

// Multiple '=' in value
test("values with multiple =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({ equation: "x=y+1" });
});

// Special characters
test("special characters", () => {
  expect(parseQueryString("msg=hello%20world")).toEqual({ msg: "hello%20world" });
});

