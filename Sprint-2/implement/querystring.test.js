// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

//Case 1 : equal sign within the value of query string
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

//Case 2 : multiple params in the query string
test("parses querystring containing multiple params", () => {
  expect(parseQueryString("equation=x=y+1&job=student")).toEqual({
    equation: "x=y+1",
    job: "student",
  });
});

//Case 3 : empty or missing value in the param
test("parses querystring containing empty or missing value in one of the params", () => {
  expect(parseQueryString("equation=x=y+1&job=")).toEqual({
    equation: "x=y+1",
    job: "",
  });
});

//Case 4 : extra & in the start, mid or at the end
test("parses querystring containing empty or missing value in one of the params", () => {
  expect(parseQueryString("&equation=x=y+1&&job=&")).toEqual({
    equation: "x=y+1",
    job: "",
  });
});

//Case 4 : querystring is empty
test("an empty query string should return an empty object", () => {
  expect(parseQueryString("")).toEqual({});
});

//Case 5 : querystring is null
test("if the querystring is null then an error should be thrown", () => {
  expect(() => parseQueryString(null)).toThrow("Invalid Input");
});

//Case 6 : querystring is undefined
test("if the querystring is undefined then an error should be thrown", () => {
  expect(() => parseQueryString(undefined)).toThrow("Invalid Input");
});

//Case 7 : querystring is a number
test("if the querystring is undefined then an error should be thrown", () => {
  expect(() => parseQueryString(123)).toThrow("Invalid Input");
});

//Case 8 : querystring is an object
test("if the querystring is an object then an error should be thrown", () => {
  expect(() => parseQueryString({})).toThrow("Invalid Input");
});
