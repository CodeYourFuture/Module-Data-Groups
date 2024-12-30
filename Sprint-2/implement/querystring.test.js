// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./parseQueryString.js");

describe("parseQueryString function", () => {
  test("parses a simple query string", () => {
    const queryString = "name=John&age=30";
    const expectedOutput = { name: "John", age: "30" };
    expect(parseQueryString(queryString)).toEqual(expectedOutput);
  });

  test("handles URL-encoded characters", () => {
    const queryString = "city=New%20York&country=USA";
    const expectedOutput = { city: "New York", country: "USA" };
    expect(parseQueryString(queryString)).toEqual(expectedOutput);
  });

  test("handles missing values", () => {
    const queryString = "key1=value1&key2=";
    const expectedOutput = { key1: "value1", key2: "" };
    expect(parseQueryString(queryString)).toEqual(expectedOutput);
  });

  test("handles duplicate keys", () => {
    const queryString = "key=1&key=2";
    const expectedOutput = { key: ["1", "2"] };
    expect(parseQueryString(queryString)).toEqual(expectedOutput);
  });

  test("returns an empty object for invalid input", () => {
    expect(parseQueryString("")).toEqual({});
    expect(parseQueryString(null)).toEqual({});
    expect(parseQueryString(undefined)).toEqual({});
  });
  
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });

});
});
