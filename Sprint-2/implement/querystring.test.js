// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
  expect(parseQueryString("token=abc=123=xyz")).toEqual({
    "token": "abc=123=xyz",
  });
  expect(parseQueryString("shop=myshop.myshopify.com")).toEqual({
    "shop": "myshop.myshopify.com",
  });
});

test("parses querystring values containing = and &", () => {
  expect(parseQueryString("category=shoes&color=black&size=10")).toEqual({
    category: "shoes", color: "black", size: "10"
  });
   expect(parseQueryString("page=2&limit=10")).toEqual({
    page: "2", limit: "10"
  });
});

test("parses querystring values containing +", () => {
  expect(parseQueryString("q=javascript+array+methods")).toEqual({
    q: "javascript+array+methods"
  })
});


