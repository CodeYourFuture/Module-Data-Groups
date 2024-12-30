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

  test("handles an empty query string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses multiple key-value pairs", () => {
    expect(parseQueryString("a=1&b=2&c=3")).toEqual({
      a: "1",
      b: "2",
      c: "3",
    });
  });

  test("handles keys without values", () => {
    expect(parseQueryString("keyWithoutValue&key2=value2")).toEqual({
      keyWithoutValue: "",
      key2: "value2",
    });
  });

  test("decodes URI components", () => {
    expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
      name: "John Doe",
      city: "New York",
    });
  });

  test("handles keys and values with special characters", () => {
    expect(parseQueryString("key=va%26lue&key%2F=another%2Bvalue")).toEqual({
      key: "va&lue",
      "key/": "another+value",
    });
  });

  test("handles duplicate keys, keeping the last occurrence", () => {
    expect(parseQueryString("a=1&a=2")).toEqual({
      a: "2",
    });
  });

  test("handles values with leading and trailing spaces", () => {
    expect(parseQueryString("key=   value   ")).toEqual({
      key: "   value   ",
    });
  });
