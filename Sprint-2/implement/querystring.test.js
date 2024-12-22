// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});
describe("parseQueryString", () => {
  test("parses a simple query string", () => {
    expect(parseQueryString("name=Sajad")).toEqual({
      name: "Sajad",
    });
  });

  test("handles multiple key-value pairs", () => {
    expect(parseQueryString("name=Sajad&age=25")).toEqual({
      name: "Sajad",
      age: "25",
    });
  });

  test("handles empty query string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("handles a key without a value", () => {
    expect(parseQueryString("name=")).toEqual({
      name: "",
    });
  });

  test("parses query string with duplicate keys, keeps the last value", () => {
    expect(parseQueryString("name=Sajad&name=Ali")).toEqual({
      name: "Ali",
    });
  });

  test("handles keys with special characters", () => {
    expect(parseQueryString("key@name=value")).toEqual({
      "key@name": "value",
    });
  });

  test("handles values with special characters", () => {
    expect(parseQueryString("name=Sajad@25")).toEqual({
      name: "Sajad@25",
    });
  });

  test("handles query string with only a key", () => {
    expect(parseQueryString("name")).toEqual({
      name: undefined,
    });
  });

  test("handles query string with no '=' or '&'", () => {
    expect(parseQueryString("name&age")).toEqual({
      name: undefined,
      age: undefined,
    });
  });

  test("handles query string with mixed valid and invalid parts", () => {
    expect(parseQueryString("name=Sajad&age&=25")).toEqual({
      name: "Sajad",
      age: undefined,
      "": "25",
    });
  });
});
