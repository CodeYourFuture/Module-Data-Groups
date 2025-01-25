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


  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      "equation": "x=y+1",
    });
  });

  test("handles multiple key-value pairs", () => {
    expect(parseQueryString("key1=value1&key2=value2")).toEqual({
      "key1": "value1",
      "key2": "value2",
    });
  });

  test("handles missing value", () => {
    expect(parseQueryString("key1=")).toEqual({
      "key1": "",
    });
  });

  test("handles missing key", () => {
    expect(parseQueryString("=value1")).toEqual({
      "": "value1",
    });
  });

  test("handles empty query string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("handles only separators", () => {
    expect(parseQueryString("&=&")).toEqual({});
  });

  test("handles keys and values with special characters", () => {
    expect(parseQueryString("key%20with%20space=value%20with%20space")).toEqual({
      "key with space": "value with space",
    });
  });

  test("handles duplicate keys (last one wins)", () => {
    expect(parseQueryString("key1=value1&key1=value2")).toEqual({
      "key1": "value2",
    });
  });
