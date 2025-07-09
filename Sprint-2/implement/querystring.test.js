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

test("parses querystring values contains one pair", () => {
  expect(parseQueryString("brand=Tesla")).toEqual({
    brand: "Tesla",
  });
});

test("parses querystring contains more than one pair ",() =>{
  expect(parseQueryString("sort=lowest&colour=yellow")).toEqual({
    "sort":"lowest",
    "colour":"yellow"});
  });

  test("parses empty querystring", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses key without value", () => {
    expect(parseQueryString("name")).toEqual({name:""});
  });

 
  test("parses key with empty value", () => {
    expect(parseQueryString("name=")).toEqual({ name: "" });
  });
