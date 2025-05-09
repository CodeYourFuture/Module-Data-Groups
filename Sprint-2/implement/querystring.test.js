const parseQueryString = require("./querystring.js");


test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses querystring with multiple parameters", () => {
  expect(parseQueryString("a=1&b=2&c=3")).toEqual({
    a: "1",
    b: "2",
    c: "3",
  });
});

test("parses querystring with empty value", () => {
  expect(parseQueryString("a=1&b=&c=3")).toEqual({
    a: "1",
    b: "",
    c: "3",
  });
});

test("parses querystring with empty key", () => {
  expect(parseQueryString("a=1&=empty")).toEqual({
    a: "1",
    "": "empty",
  });
});

test("parses querystring with missing '='", () => {
  expect(parseQueryString("a=1&b&c=3")).toEqual({
    a: "1",
    b: "",
    c: "3",
  });
});


test("parses querystring with URL-encoded values", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    name: "John Doe",
    city: "New York",
  });
});


test("throws error for invalid query string", () => {
  expect(() => parseQueryString(null)).toThrow("Invalid query string");
  expect(() => parseQueryString(123)).toThrow("Invalid query string");
});

