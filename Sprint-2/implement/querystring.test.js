const parseQueryString = require("./querystring.js");

describe("parseQueryString()", () => {
  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("returns an empty object for an empty string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses a single key-value pair", () => {
    expect(parseQueryString("name=Richard")).toEqual({
      name: "Richard",
    });
  });

  test("parses multiple key-value pairs", () => {
    expect(parseQueryString("name=Richard&city=Sheffield")).toEqual({
      name: "Richard",
      city: "Sheffield",
    });
  });

  test("handles a key with an empty value", () => {
    expect(parseQueryString("name=")).toEqual({
      name: "",
    });
  });

  test("handles a key with no equals sign", () => {
    expect(parseQueryString("name")).toEqual({
      name: "",
    });
  });

  test("ignores an empty trailing pair", () => {
    expect(parseQueryString("name=Richard&")).toEqual({
      name: "Richard",
    });
  });

  test("decodes URL-encoded keys and values", () => {
    expect(parseQueryString("tags%5B%5D=hello%20world")).toEqual({
      "tags[]": "hello world",
    });
  });
});
