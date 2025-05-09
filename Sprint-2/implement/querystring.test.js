const parseQueryString = require("./querystring.js");

test("parses querystring values containing '='", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses querystring with more than one pair", () => {
  expect(parseQueryString("equation=x=y+1&a=1")).toEqual({
    equation: "x=y+1",
    a: "1",
  });
});

test("parses decoded querystring values", () => {
  expect(parseQueryString("equation=x%3Dy%2B1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses querystring with empty values", () => {
  expect(parseQueryString("key1=&key2=")).toEqual({
    key1: "",
    key2: "",
  });
});

test("parses querystring with a single key without value", () => {
  expect(parseQueryString("key")).toEqual({
    key: "",
  });
});

test("parses querystring with URL-encoded key and value", () => {
  expect(parseQueryString("key%201=A%25B")).toEqual({
    "key 1": "A%B",
  });
});

test("parses querystring with one empty key", () => {
  expect(parseQueryString("key=")).toEqual({
    key: "",
  });
});

test("parses querystring with multiple keys having empty values", () => {
  expect(parseQueryString("key1=&key2=&key3=")).toEqual({
    key1: "",
    key2: "",
    key3: "",
  });
});

test("parses querystring with only a key and no '='", () => {
  expect(parseQueryString("key")).toEqual({
    key: "",
  });
});

test("parses querystring with an encoded space in a key", () => {
  expect(parseQueryString("key%20with%20spaces=somevalue")).toEqual({
    "key with spaces": "somevalue",
  });
});

test("parses querystring with encoded characters", () => {
  expect(parseQueryString("key%25A=A%2520B")).toEqual({
    "key%A": "A%20B",
  });
});

test("parses querystring with ampersand within value", () => {
  expect(parseQueryString("key=abc%26def")).toEqual({
    key: "abc&def",
  });
});

test("parses querystring with percent symbols encoded", () => {
  expect(parseQueryString("key=abc%25def")).toEqual({
    key: "abc%def",
  });
});
