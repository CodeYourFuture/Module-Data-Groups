const parseQueryString = require("./querystring.js");

// Original test case - using %2B for literal plus sign
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y%2B1")).toEqual({
    "equation": "x=y+1",
  });
});

// Additional test cases for edge cases

test("parses basic query string", () => {
  expect(parseQueryString("name=John&age=30")).toEqual({
    name: "John",
    age: "30"
  });
});

test("handles empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles null or undefined input", () => {
  expect(parseQueryString(null)).toEqual({});
  expect(parseQueryString(undefined)).toEqual({});
});

test("handles query string with no value", () => {
  expect(parseQueryString("name=&age=30")).toEqual({
    name: "",
    age: "30"
  });
});

test("handles query string with no key", () => {
  expect(parseQueryString("=value&name=John")).toEqual({
    "": "value",
    name: "John"
  });
});

test("handles query string with no equals sign", () => {
  expect(parseQueryString("name&age=30")).toEqual({
    name: "",
    age: "30"
  });
});

test("handles multiple equals signs in value", () => {
  expect(parseQueryString("equation=x=y%2Bz&name=John")).toEqual({
    equation: "x=y+z",
    name: "John"
  });
});

test("handles multiple equals signs in key", () => {
  expect(parseQueryString("key=with=equals=sign=value")).toEqual({
    key: "with=equals=sign=value"
  });
});

test("handles URL encoded characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York"
  });
});

test("handles plus signs as spaces", () => {
  expect(parseQueryString("name=John+Doe&city=New+York")).toEqual({
    name: "John Doe",
    city: "New York"
  });
});

test("handles multiple values for same key", () => {
  expect(parseQueryString("color=red&color=blue&color=green")).toEqual({
    color: ["red", "blue", "green"]
  });
});

test("handles multiple values for same key with encoded characters", () => {
  expect(parseQueryString("tag=javascript&tag=node%20js&tag=testing")).toEqual({
    tag: ["javascript", "node js", "testing"]
  });
});

test("handles empty values for multiple same keys", () => {
  expect(parseQueryString("color=&color=blue&color=")).toEqual({
    color: ["", "blue", ""]
  });
});

test("handles trailing ampersand", () => {
  expect(parseQueryString("name=John&age=30&")).toEqual({
    name: "John",
    age: "30"
  });
});

test("handles leading ampersand", () => {
  expect(parseQueryString("&name=John&age=30")).toEqual({
    name: "John",
    age: "30"
  });
});

test("handles multiple ampersands", () => {
  expect(parseQueryString("name=John&&age=30")).toEqual({
    name: "John",
    age: "30"
  });
});

test("handles special characters in keys", () => {
  expect(parseQueryString("user[name]=John&user[age]=30")).toEqual({
    "user[name]": "John",
    "user[age]": "30"
  });
});

test("handles numeric values", () => {
  expect(parseQueryString("id=123&count=456")).toEqual({
    id: "123",
    count: "456"
  });
});

test("handles boolean-like values", () => {
  expect(parseQueryString("active=true&verified=false")).toEqual({
    active: "true",
    verified: "false"
  });
});

test("handles complex query string with multiple edge cases", () => {
  expect(parseQueryString("equation=x=y%3Dz%2B1&colors=red&colors=blue&name=John%20Doe&empty=&noValue&special=value%26amp%3Dtest")).toEqual({
    equation: "x=y=z+1",
    colors: ["red", "blue"],
    name: "John Doe",
    empty: "",
    noValue: "",
    special: "value&amp=test"
  });
});
