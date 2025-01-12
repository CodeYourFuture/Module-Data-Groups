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

test("empty query string", () => {
    expect(parseQueryString("")).toEqual({});
});

test("a simple query string", () => {
    expect(parseQueryString("name=pooriya")).toEqual({
        name : "pooriya"
    });
});

test("pairs of key-values", () => {
    expect(parseQueryString("name=pooriya&country=UK")).toEqual({
        name : "pooriya",
        country : "UK"
    });
});

test("query string with missing value", () => {
    expect(parseQueryString("name=")).toEqual({
        name : undefined
    });
});

test("query string without signs and value", () => {
    expect(parseQueryString("name&country")).toEqual({
        name : undefined,
        country : undefined
    });
});

test("query string with two value for one key (duplicate keys)", () => {
    expect(parseQueryString("name=pooriya&name=justin")).toEqual({
        name : "justin"
    })
})