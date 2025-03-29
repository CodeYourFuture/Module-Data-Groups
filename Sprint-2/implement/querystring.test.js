const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses querystring with no value", () => {
  expect(parseQueryString("key&key2")).toEqual({
    key: null,
    key2: null,
  });
});

test("parses querystring with empty key", () => {
  expect(parseQueryString("=value&key2=value2")).toEqual({
    key2: "value2",
  });
});

test("parses querystring with URL-encoded characters", () => {
  expect(parseQueryString("key=value%20with%20spaces&key2=value%3Dwith%3Dequals")).toEqual({
    key: "value with spaces",
    key2: "value=with=equals",
  });
});

test("parses querystring with duplicate keys", () => {
  expect(parseQueryString("key=value1&key=value2")).toEqual({
    key: ["value1", "value2"],
  });
});

test("parses empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});