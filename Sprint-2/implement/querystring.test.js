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

  test("handles multiple key-value pairs", () => {
    expect(parseQueryString("name=John&age=30")).toEqual({
      name: "John",
      age: "30",
    });
  });

  test("handles keys with no value", () => {
    expect(parseQueryString("flag")).toEqual({ flag: null });
    expect(parseQueryString("A%20B")).toEqual({"A B": null});
  });

  test("handles empty query string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("handles keys and values as raw strings", () => {
    expect(parseQueryString("key%20with%20space=value%20with%20space")).toEqual({"key with space": "value with space"});
  });

  test("handles duplicate keys, keeping the last value", () => {
    expect(parseQueryString("key=value1&key=value2")).toEqual({ key: "value2" });
  });

