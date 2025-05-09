// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

describe("parseQueryString()", () => {
  test("parses querystring values containing multiple =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({ equation: 'x=y+1' });
  });

  test("given an empty string, it will return an empty object", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("given an a single query string, it will return a single key-value pair object", () => {
    expect(parseQueryString("colour=green")).toEqual({colour: 'green'});
  });

  test("given an a double query string, it will return a double key-value pair object", () => {
    expect(parseQueryString("colour=green&sort=newest")).toEqual({ colour: 'green', sort: 'newest' });
  });

  test("given an a three query string, it will return a three key-value pair object", () => {
    expect(parseQueryString("colour=green&sort=newest&car=latest")).toEqual({ colour: 'green', sort: 'newest', car: 'latest' });
  });

  test("given an invalid query string, it will return a key-value pair if found or undefined for a value", () => {
    expect(parseQueryString("equation=x=y+1&true-6+new")).toEqual({ equation: 'x=y+1', 'true-6+new': '' });
  });

  test("given a query string with a single property and a single =, it will return a key and an empty string '' for a value", () => {
    expect(parseQueryString("a=")).toEqual({ a: '' });
  });

});

