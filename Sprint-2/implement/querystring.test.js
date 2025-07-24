// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses querystring with empty value", () => {
  expect(parseQueryString("key=")).toEqual({
    key: "",
  });
});

test("handles URL-encoded characters", () => {
  expect(
    parseQueryString("name=Halimatou%20Saddiyaa&country=United%20Kingdom")
  ).toEqual({
    name: "Halimatou Saddiyaa",
    country: "United Kingdom",
  });
});

test("handles key without equals sign", () => {
  expect(parseQueryString("name")).toEqual({
    name: "",
  });
});
