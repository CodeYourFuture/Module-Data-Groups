// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("given a query string with one pair of query params, returns them in object form", function () {
  const input = "fruit=banana";
  const currentOutput = parseQueryString(input);
  const targetOutput = { fruit: "banana" };

  expect(currentOutput).toEqual(targetOutput);
});

test("parses querystring with multiple key-value pairs", () => {
  expect(parseQueryString("equation1=x=y+1&equation2=z=w+1")).toEqual({
    "equation1": "x=y+1",
    "equation2": "z=w+1"
  });
});


test("parses querystring with keys but no values", () => {
  expect(parseQueryString("equation1&equation2")).toEqual({
    "equation1": "",
    "equation2": ""
  });
});

test ("parse querystring with empty string", () => {
  expect(parseQueryString("")).toEqual({});
  const input=""
const currentOutput=parseQueryString(input)
const targetOutput={}
expect(currentOutput).toEqual(targetOutput)   

}); 

