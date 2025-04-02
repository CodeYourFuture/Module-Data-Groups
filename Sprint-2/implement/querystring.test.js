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


//MY RESPONSE:

// Function to parse query string with fixes to handle edge cases

function parseQueryString(queryString) {
  const queryParams = {}; // Initialize an empty object to store query parameters
  
  // If the query string is empty, return an empty object
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&"); // Split the query string into key-value pairs by '&'

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("="); // Split the pair by '=' but allow multiple '=' in the value part
    const value = valueParts.join("="); // Join any parts of the value that were split due to multiple '='
    queryParams[key] = value; // Assign the key-value pair to the queryParams object
  }

  return queryParams; // Return the query parameters object
}

module.exports = parseQueryString;

// Test cases

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1", // Handles '=' inside values correctly
  });
});

test("parses multiple querystring parameters", () => {
  const queryString = "name=JohnDoe&age=25&country=USA";
  const expected = { name: "JohnDoe", age: "25", country: "USA" };
  expect(parseQueryString(queryString)).toEqual(expected);
});

test("returns an empty object for an empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles query string with no values", () => {
  expect(parseQueryString("name=&age=")).toEqual({
    name: "",
    age: "",
  });
});

test("parses querystring with encoded values", () => {
  expect(parseQueryString("message=Hello%20World")).toEqual({
    message: "Hello World", // Tests for URL encoded values
  });
});

test("handles query string with duplicate keys", () => {
  expect(parseQueryString("color=blue&color=green")).toEqual({
    color: "green", // Only the last occurrence is kept for duplicate keys
  });
});

test("parses querystring with special characters", () => {
  expect(parseQueryString("param=foo%40bar&param2=hello%23world")).toEqual({
    param: "foo@bar", // Decodes the '%40' into '@'
    param2: "hello#world", // Decodes the '%23' into '#'
  });
});
