// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

// testing when the query string with a value contains = signs
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

// testing when the query string has multiple ampersands
test("parses query string with multiple parameters", () => {
  expect(parseQueryString("name=Ben&age=45&city=new%20city")).toEqual({
    name: "Ben",
    age: "45",
    city: "new%20city",
  });
});

// testing when the query string has two ampersands in a row
test("parses query string with two ampersands in a row", () => {
  expect(parseQueryString("name=Ben&&age=45")).toEqual({
    name: "Ben",
    "": "",
    age: "45",
  });
});

// testing when the query string has no ampersands
test("parses query string with no ampersands", () => {
  expect(parseQueryString("name=Ben")).toEqual({
    name: "Ben",
  });
});

// testing when the query string has no ampersands and no equal signs
test("parses query string with no ampersands and no equal signs", () => {
  expect(parseQueryString("name")).toEqual({
    name: "",
  });
});

// testing when the query string is empty
test("parses query string with empty value", () => {
  expect(parseQueryString("")).toEqual({});
});

// testing when the query string is null
test("parses query string with null value", () => {
  expect(parseQueryString(null)).toEqual("invalid query string");
});

// testing when the query string is undefined
test("parses query string with undefined value", () => {
  expect(parseQueryString(undefined)).toEqual("invalid query string");
});

// testing when a pair ends with equal sign (no value)
test("parses query string with no equal sign", () => {
  expect(parseQueryString("name=Ben&age=&city=")).toEqual({
    name: "Ben",
    age: "",
    city: "",
  });
});

// testing when a pair starts with equal sign (no key)
test("parses query string starting with equal sign", () => {
  expect(parseQueryString("name=Ben&=45")).toEqual({
    name: "Ben",
    "": "45",
  });
});

// testing when a pair has no equal sign (no value and no key)
// the pair will be the key and the value will be an empty string
test("parses query string with no equal sign", () => {
  expect(parseQueryString("name&age=45&city")).toEqual({
    name: "",
    age: "45",
    city: "",
  });
});
