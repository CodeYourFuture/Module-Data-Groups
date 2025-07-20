const parseQueryString = require("./querystring");

test("parses simple key-value pairs", () => {
  expect(parseQueryString("firstName=sisay&lastName=mehari")).toEqual({
    firstName: "sisay",
    lastName: "mehari",
  });
});

test("handles values containing '='", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses multiple keys and values with '='", () => {
  expect(parseQueryString("a=1&b=2=c")).toEqual({
    a: "1",
    b: "2=c",
  });
});

test("parses multiple values for the same key", () => {
  expect(parseQueryString("category=books&category=movies&category=music")).toEqual({
    category: ["books", "movies", "music"],
  });
});

test("parses key with empty value", () => {
  expect(parseQueryString("username=")).toEqual({
    username: "",
  });
});

test("parses key with no '=' (treat as empty value)", () => {
  expect(parseQueryString("hello")).toEqual({
    hello: "",
  });
});

test("parses full URL with query string", () => {
  expect(parseQueryString("https://example.com?name=John&age=30")).toEqual({
    name: "John",
    age: "30",
  });
});

test("parses querystring with multiple equal signs in value", () => {
  expect(parseQueryString("key=value1=value2")).toEqual({
    key: "value1=value2",
  });
});

test("handles trailing ampersands", () => {
  expect(parseQueryString("a=1&b=2&")).toEqual({
    a: "1",
    b: "2",
  });
});

test("handles empty input string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("handles non-string input", () => {
  expect(parseQueryString(123)).toEqual({});
  expect(parseQueryString(null)).toEqual({});
  expect(parseQueryString(undefined)).toEqual({});
  expect(parseQueryString([])).toEqual({});
  expect(parseQueryString({})).toEqual({});
});

test("decodes URL-encoded values", () => {
  expect(parseQueryString("name=Sisay%20Mehari&city=Addis%20Ababa")).toEqual({
    name: "Sisay Mehari",
    city: "Addis Ababa",
  });
});
