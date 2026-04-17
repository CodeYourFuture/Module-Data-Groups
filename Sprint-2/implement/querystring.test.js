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

  test("handles multiple parameters", () => {
    expect(parseQueryString("name=gemini&role=ai")).toEqual({
      name: "gemini",
      role: "ai",
    });
  });

  test("handles encoded special characters", () => {
    expect(parseQueryString("city=New%20York&greeting=hello%21")).toEqual({
      city: "New York",
      greeting: "hello!",
    });
  });

  test("handles keys with no values", () => {
    expect(parseQueryString("debug&verbose=true")).toEqual({
      debug: "",
      verbose: "true",
    });
  });

  test("returns empty object for empty or null input", () => {
    expect(parseQueryString("")).toEqual({});
    expect(parseQueryString(null)).toEqual({});
    expect(parseQueryString("   ")).toEqual({});
  });
});