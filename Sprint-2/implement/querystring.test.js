// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")


// Given a querystring with a value that contains an = symbol ( + URL encoded as %2B and spaces encoded as + )
// When passed to parseQueryString
// Then it should treat everything after the first = as the value
test('parses querystring values containing (=, +, " ")', () => {
  expect(parseQueryString("equation=x=y%2B1")).toEqual({
    equation: "x=y+1",
  });
});

// Given an querystring string with spaces encoded as (%20 and +)
// when passed to parseQueryString
// then it should return the string with real spaces in both cases
test("decodes spaces correctly from both %20 and +", () => {
  expect(parseQueryString("name=John%20Doe&city=New+York")).toEqual({
    "name": "John Doe",
    "city": "New York", 
  });
});


// Given a URL-encoded key like like %5B%5D = []
// When passed to parseQueryString
// Then it should decode the key to 'tags[]'
test("Handles URL-Encoded keys", () =>{
  expect(parseQueryString("tags%5B%5D=javascript")).toEqual({
    "tags[]": "javascript",
  });
})

// Given a string with multiple ampersands like a=1&&b=2&c=3&&
// When passed to parseQueryString 
// Then it should ignore the empty segments and return valid pairs
test("Should ignore empty ampersand", () => {
  expect(parseQueryString("a=1&&b=2")).toEqual({
    a: "1",
    b: "2",

  });
})

// Given a key without a value like 'flag' or 'empty='
// When passed to parseQueryString
// Then it should return the key with an empty string as value
test("handles keys with no values", () => {
  expect(parseQueryString("empty=&flag")).toEqual({
    "empty": "",
    "flag": ""
  });
});