// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below are some test cases the implementation doesn't handle well.
// Fix the implementation for these tests, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("should parse values containing '='", () => {
  expect(parseQueryString("equation=a=b-2")).toEqual({
    equation: "a=b-2",
  });
});

test("should ignore empty key-value pairs", () => {
  expect(parseQueryString("key1=value1&&key2=value2&")).toEqual({
    key1: "value1",
    key2: "value2",
  });
});

test("should accept empty string as key or as value", () => {
  expect(parseQueryString("=value")).toEqual({ "": "value" });
  expect(parseQueryString("key")).toEqual({ key: "" });
  expect(parseQueryString("key=")).toEqual({ key: "" });
  expect(parseQueryString("=")).toEqual({ "": "" });
});

test("should decode percent-encoded characters", () => {
  expect(parseQueryString("%24half=1%2F2")).toEqual({
    $half: "1/2",
  });
});

test("should replace '+' by ' '", () => {
  expect(parseQueryString("full+name=John+Doe")).toEqual({
    "full name": "John Doe",
  });
});

test("should return an empty object for an empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("should handle multiple equals signs", () => {
  expect(parseQueryString("a=b=c=d")).toEqual({
    a: "b=c=d",
  });
});

test("should handle multiple values with empty values", () => {
  expect(parseQueryString("name=&age=25")).toEqual({
    name: "",
    age: "25",
  });
});

test("should decode spaces", () => {
  expect(parseQueryString("first%20name=Abakar%20Souleyman")).toEqual({
    "first name": "Abakar Souleyman",
  });
});
test("should handle multiple plus signs", () => {
  expect(parseQueryString("full+user+name=A+M+S")).toEqual({
    "full user name": "A M S",
  });
});
