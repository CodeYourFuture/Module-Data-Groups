const parseQueryString = require("./querystring.js");

describe("parseQueryString function", () => {
  test("parses a single key-value pair", () => {
    expect(parseQueryString("key=value")).toEqual({ key: "value" });
  });

  test("parses multiple key-value pairs", () => {
    expect(parseQueryString("key1=value1&key2=value2")).toEqual({
      key1: "value1",
      key2: "value2",
    });
  });

  test("parses values containing '='", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("handles keys without values", () => {
    expect(parseQueryString("key1=value1&key2=")).toEqual({
      key1: "value1",
      key2: null,  // Expect null for an empty value
    });
  });

  test("handles keys with no equals sign", () => {
    expect(parseQueryString("key1=value1&key2")).toEqual({
      key1: "value1",
      key2: null,  // Expect null for key without an equal sign
    });
  });

  test("handles empty query string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("decodes URL-encoded keys and values", () => {
    expect(parseQueryString("key1=hello%20world&key2=%3Dvalue")).toEqual({
      key1: "hello world",
      key2: "=value",
    });
  });

  test("parses complex query strings", () => {
    expect(
      parseQueryString("key1=value1&equation=x%3Dy%2B1&empty=&key3=3")
    ).toEqual({
      key1: "value1",
      equation: "x=y+1",
      empty: null, // Expect null for empty
      key3: "3",
    });
  });
});
