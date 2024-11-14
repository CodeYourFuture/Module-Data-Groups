const parseQueryString = require("./querystring");

describe("parseQueryString function", () => {
  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      "equation": "x=y+1",
    });
  });

  test("parses querystring with multiple parameters", () => {
    const query = "name=John&age=30&city=New+York";
    expect(parseQueryString(query)).toEqual({
      "name": "John",
      "age": "30",
      "city": "New York",
    });
  });

  test("parses querystring with empty value", () => {
    const query = "name=&age=30";
    expect(parseQueryString(query)).toEqual({
      "name": "",
      "age": "30",
    });
  });

  test("parses querystring with missing value", () => {
    const query = "name&age=30";
    expect(parseQueryString(query)).toEqual({
      "name": "",
      "age": "30",
    });
  });

  test("parses querystring with encoded characters", () => {
    const query = "name=John%20Doe&city=New%20York";
    expect(parseQueryString(query)).toEqual({
      "name": "John Doe",
      "city": "New York",
    });
  });

  test("parses querystring with special characters", () => {
    const query = "description=Hello%20world%21";
    expect(parseQueryString(query)).toEqual({
      "description": "Hello world!",
    });
  });

  test("parses querystring with only one parameter", () => {
    const query = "key=value";
    expect(parseQueryString(query)).toEqual({
      "key": "value",
    });
  });

  test("parses querystring starting with ?", () => {
    const query = "?key=value&name=John";
    expect(parseQueryString(query)).toEqual({
      "key": "value",
      "name": "John",
    });
  });

  test("returns empty object for an empty query string", () => {
    const query = "";
    expect(parseQueryString(query)).toEqual({});
  });
});
