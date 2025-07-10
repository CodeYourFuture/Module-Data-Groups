// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

// Additional test cases to cover edge cases
test("parses empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Test for query string with no key-value pairs
test("parses query string with no key-value pairs", () => {
  expect(parseQueryString("key1=&key2=")).toEqual({
    key1: "",
    key2: "",
  });
}); 

// Test for query string with multiple values for the same key
test("parses query string with multiple values for the same key", () => {
  expect(parseQueryString("key=value1&key=value2")).toEqual({
    key: "value2", // Last value should overwrite previous ones
  });
});

// Test for query string with keys that are empty
test("parses query string with empty keys", () => {
  expect(parseQueryString("=value1&key2=value2&=value3")).toEqual({
    "": "value3", // Last empty key should overwrite previous ones
    key2: "value2",
  });
});

// Test for query string with keys that are only spaces
test("parses query string with keys that are only spaces", () => {
  expect(parseQueryString("   =value1&key2=value2&   =value3")).toEqual({
    "   ": "value3", // Last space key should overwrite previous ones
    key2: "value2",
  });
});