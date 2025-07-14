// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing multiple '=' signs", () => {
  expect(parseQueryString("name=JohnDoe&age=30&country=Canada&sort=recent&showDetails=true")).toEqual({
  name: "JohnDoe",
  age: "30",
  country: "Canada",
  sort: "recent",
  showDetails: "true"
});
});



test("parses an empty querystring & returns an empty object", () => {
  expect(parseQueryString("")).toEqual({});
});




test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});




test("parses querystring values without '=' & returns keys only", () => {
  expect(parseQueryString("fullName")).toEqual({fullName: "" });
});




test("parses querystring with duplicate/repeated keys & returns the last key-value pair", () => {
  expect(parseQueryString("haircut=buzzCut&haircut=mullet&haircut=lowFade&shaver=braun&shaver=philips&shaver=wahl")).toEqual({
    haircut: "lowFade",
    shaver: "wahl",
  });
});


test("parses an encoded querystring & returns decoded key-value pairs", () => {
  expect(parseQueryString("name=John%20Doe&email=john.doe%40example.com&message=Hello%2C%20how%20are%20you%3F")).toEqual({   
  name: "John Doe",
  email: "john.doe@example.com",
  message: "Hello, how are you?"
  })
})