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

//  Duplicate keys, last one wins
test('duplicate keys overwrite previous', () => {
  expect(parseQueryString('color=blue&color=red')).toEqual({
    color: 'red'
  });
});

//  Empty string input
test('returns empty object for empty string', () => {
  expect(parseQueryString('')).toEqual({});
});

//  Null/invalid input
test('returns empty object for null or non-string', () => {
  expect(parseQueryString(null)).toEqual({});
  expect(parseQueryString(123)).toEqual({});
});

//  Missing value
test('handles keys with empty values', () => {
  expect(parseQueryString('empty=')).toEqual({ empty: '' });
});

// Missing key
test('ignores pairs without keys', () => {
  expect(parseQueryString('=novalue')).toEqual({ '': 'novalue' });
});
