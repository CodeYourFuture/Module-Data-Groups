// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("colour=blue&sort=newest")).toEqual({
    colour: "blue",
    sort: "newest",
  });
});

test("Returns an empty object if queryString length is zero", () => {
  expect(parseQueryString("")).toEqual({});
});

test("Returns invalid input if the input's type is non string", () => {
  expect(() => parseQueryString(["avcava", 2342, "dfvdsv"])).toThrow(
    "invalid input"
  );
});


test("Throws error for numeric input", () => {
  expect(() => parseQueryString(123)).toThrow("invalid input");
});

test("Parses a valid query string", () => {
  expect(parseQueryString("name=John&age=30")).toEqual({
    name: "John",
    age: "30",
  });
});

test("Throws an error for an invalid query string format", () => {
  expect(() => parseQueryString("nameJohnage30")).toThrow(
    "invalid query string format"
  );
});

