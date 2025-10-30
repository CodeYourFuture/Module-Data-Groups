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

// Additional test cases to cover more edge cases
// query strings with multiple key-value pairs
test("parses querystring with multiple & and =", () => {
  expect(parseQueryString("a=1&b=2&c=3")).toEqual({
    "a": "1",
    "b": "2",
    "c": "3",
  });
});

// query strings with empty keys
test("parses querystring with empty value", () => {
  expect(parseQueryString("key=")).toEqual({
    "key": "",
  });
});

// query strings with no value
test("parses querystring with no value", () => {
  expect(parseQueryString("flag")).toEqual({
    "flag": null,
  });
});

// query strings with encoded characters
test("parses querystring with encoded characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    "name": "John Doe",
    "city": "New York",
  });
});

// query strings with repeated keys
test("parses querystring with repeated keys", () => {
  expect(parseQueryString("key=1&key=2")).toEqual({
    "key": "2", // assuming last value wins
  });
});

// query strings with trailing &
test("parses querystring with trailing &", () => {
  expect(parseQueryString("key1=value1&key2=value2&")).toEqual({
    "key1": "value1",
    "key2": "value2",
  });
});

