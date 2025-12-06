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

// Given an empty query string

test("Empty querystring returns empty object", () => {
  expect(parseQueryString("")).toEqual({});
});

// A single key with value not given

test("Single Key with No Value", () => {
  expect(parseQueryString("key=")).toEqual({ key: "" });
});

// A key without"=" sign 

test("Key Without = Sign", () => {
  expect(parseQueryString("KeyAlone")).toEqual({ KeyAlone: "" });
});

// Multiple parameters given

test("Multiple Parameters", () => {
  expect(parseQueryString("name=Smith&age=40&job=Teacher")).toEqual({
    name: "Smith",
    age: "40",
    job: "Teacher",
  });
});

// If values contain special characters

test("Values Containing Special Characters", () => {
  expect(parseQueryString("query=a%20b%26c%3Dd")).toEqual({ query: "a b&c=d" });
});

// Query starting with "?"

test("Starting with ?", () => {
  expect(parseQueryString("?foo=bar")).toEqual({ foo: "bar" });
});

// Given encoded key eg, %20  to " " 

test("Encoded keys, decoded correctly", () => {
  expect(parseQueryString("first%20name=John")).toEqual({
    "first name": "John",
  });
});

// Mixed encoded 

test("Mixed encoded and plain parts", () => {
  expect(parseQueryString("message=Hello%20World%21&Ans=Hello")).toEqual({
    message: "Hello World!",
    Ans: "Hello",
  });
});

// Ignore  repeated symbols  --- &&
test("Skips any empty parts that appear because of repeated symbols", () => {
  expect(parseQueryString("a=1&&b=2")).toEqual({
    a: "1",
    b: "2",
  });
});

// In querystring.test.js test edge cases added.