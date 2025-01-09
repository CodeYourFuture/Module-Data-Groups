// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("Given empty string", () => {
    expect(parseQueryString("")).toEqual({});
  });

test("Given one string", () => {
    expect(parseQueryString("name=Ali")).toEqual({
      name: "Ali",
    });
  });

  test("Given multiple strings", () => {
    expect(parseQueryString("name=Ali&city=London")).toEqual({
      name: "Ali",
      city: "London",
    });
  });

  test("Given a key without a value", () => {
    expect(parseQueryString("name=")).toEqual({
      name: "",
    });
  });


  test("Given a string with only a key", () => {
    expect(parseQueryString("name")).toEqual({
      name: undefined,
    });
  });

  test("Given a string with no '='", () => {
    expect(parseQueryString("name&city")).toEqual({
      name: undefined,
      city: undefined,
    });
  });

  test("Given a string with mixed valid and invalid parts", () => {
    expect(parseQueryString("name=Ali&city&=London")).toEqual({
      name: "Ali",
      city: undefined,
      "": "London",
    });
  });