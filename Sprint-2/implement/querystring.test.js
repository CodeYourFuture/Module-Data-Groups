// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

describe("parseQueryString function", () => {
  test("parses querystring values containing an '='", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("parses empty querystring", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses several key-value pairs", () => {
    expect(
      parseQueryString("name=John&age=40&city=NewYork&job=designer")
    ).toEqual({ name: "John", age: "40", city: "NewYork", job: "designer" });
  });
});
