// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({ equation: "x=y+1" });
});

test("parses empty string to empty object", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses single key-value pair", () => {
  expect(parseQueryString("name=Gina")).toEqual({ name: "Gina" });
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("name=Gina&age=23&city=Nottingham")).toEqual({
    name: "Gina",
    age: "23",
    city: "Nottingham",
  });
});

test("handles keys without values", () => {
  expect(parseQueryString("name=&age=23")).toEqual({ name: "", age: "23" });
});

test("handles values without keys", () => {
  expect(parseQueryString("=Gina&age=23")).toEqual({ "": "Gina", age: "23" });
});

test("handles missing equals sign", () => {
  expect(parseQueryString("nameGina&age23")).toEqual({
    nameGina: undefined,
    age23: undefined,
  });
});

test("handles repeated keys", () => {
  expect(parseQueryString("name=Gina&name=Jane")).toEqual({ name: "Jane" });
});
