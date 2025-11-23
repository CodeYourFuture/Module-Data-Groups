// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test("parses a simple key=value pair", () => {
  expect(parseQueryString("name=Ali")).toEqual({
    name: "Ali",
  });
});

test("parses multiple key=value pairs", () => {
  expect(parseQueryString("name=Ali&age=30")).toEqual({
    name: "Ali",
    age: "30",
  });
});

test("returns empty object for empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles keys without values", () => {
  expect(parseQueryString("flag")).toEqual({
    flag: "",
  });
});

test("decodes multiple URL-encoded pairs", () => {
  const query = "name%20first=Sophia&name%20last=Mohamed";
  const result = parseQueryString(query); 

  expect(result).toEqual({
    "name first": "Sophia",
    "name last": "Mohamed"
  });
});