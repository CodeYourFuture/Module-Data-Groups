// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("handles multiple parameters", () => {
  expect(parseQueryString("name=Alex&age=25&city=London")).toEqual({
    name: "Alex",
    age: "25",
    city: "London",
  });
});

test("handles empty value (key=)", () => {
  expect(parseQueryString("search=&page=3")).toEqual({
    search: "",
    page: "3",
  });
});

test("handles key without value", () => {
  expect(parseQueryString("debug&sort=asc")).toEqual({
    debug: "",
    sort: "asc",
  });
});

test("handles leading question mark", () => {
  expect(parseQueryString("?q=javascript&lang=en")).toEqual({
    q: "javascript",
    lang: "en",
  });
});

test("returns empty object when input is empty or just ?", () => {
  expect(parseQueryString("")).toEqual({});
  expect(parseQueryString("?")).toEqual({});
});

test("ignores trailing &", () => {
  expect(parseQueryString("a=1&b=2&")).toEqual({
    a: "1",
    b: "2",
  });
});

test("ignores repeated &", () => {
  expect(parseQueryString("x=10&&y=20")).toEqual({
    x: "10",
    y: "20",
  });
});
