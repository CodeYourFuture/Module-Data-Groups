// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

describe("parseQueryString", () => {
  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("parses empty querystring", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses multiple key-value pairs", () => {
    expect(parseQueryString("name=Jane&age=37&city=New+York")).toEqual({
      name: "Jane",
      age: "37",
      city: "New+York",
    });
  });

  test("parses key with empty value", () => {
    expect(parseQueryString("key1=&key2=value2")).toEqual({
      key1: "",
      key2: "value2",
    });
  });

  test("parses value with special characters", () => {
    expect(parseQueryString("greeting=Hello%2C+World%21")).toEqual({
      greeting: "Hello%2C+World%21",
    });
  });
});
