// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});   

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({"equation": "x=y+1"});
  });

test("handles multiple key and value pairs", () => {
  expect(parseQueryString("city=New%20Jersey&age=60")).toEqual({city: "New Jersey", age: "60",});
});

test(" handles empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("decodes + as spaces and % ", () => {
  expect(
    parseQueryString("occasion=happy%20birthday&gift=mobile%20phone")
  ).toEqual({
    occasion: "happy birthday",
    gift: "mobile phone",
  });
});

test("handles key without value", () => {
  expect(parseQueryString("city")).toEqual({
    city: "",
  });
});