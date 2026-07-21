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

test("should return empty object for empty input", () => {
  expect(parseQueryString("")).toEqual({});
});

test("throws an error for invalid input", () => {
  expect(() => parseQueryString(null)).toThrow("Invalid input");
  expect(() => parseQueryString({})).toThrow("Invalid input");
  expect(() => parseQueryString([])).toThrow("Invalid input");
  expect(() => parseQueryString(undefined)).toThrow("Invalid input");
  expect(() => parseQueryString(123)).toThrow("Invalid input");
  expect(() => parseQueryString(true)).toThrow("Invalid input");
});

test("should work on duplicate empty keys", () => {
  expect(parseQueryString("=one&=two")).toEqual({
    "": ["one", "two"],
  });
});
test("should work on duplicate empty values", () => {
  expect(parseQueryString("key=&key=")).toEqual({
    key: ["", ""],
  });
});

test("should work on & inside values", () => {
  expect(parseQueryString("text=Tom%26Jerry")).toEqual({
    text: "Tom&Jerry",
  });
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

// Stretch exercise: Handling query strings that contain identical keys

// Delete this test if you are not working on this optional case
test("should store values of a key in an array when the key has 2 or more values", () => {
  expect(parseQueryString("key=value1&key=value2&key=value3&foo=bar")).toEqual({
    key: ["value1", "value2", "value3"],
    foo: "bar",
  });
});
