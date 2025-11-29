// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({ equation: "x=y+1" });
});

test("parse querystring with multiple values", () => {
  expect(parseQueryString("equation=x=y+1&sound=none")).toEqual({
    equation: "x=y+1",
    sound: "none",
  });
});

test("parse querystring with multiple ==", () => {
  expect(parseQueryString("equation==x=y+1&sound=none")).toEqual({
    equation: "=x=y+1",
    sound: "none",
  });
});

test("parse querystring with multiple &&", () => {
  expect(parseQueryString("equation=x=y+1&&sound=none")).toEqual({
    equation: "x=y+1",
    sound: "none",
  });
});

test("parse querystring with no =", () => {
  expect(parseQueryString("equation=x=y+1&soundnone")).toEqual({
    equation: "x=y+1",
    soundnone:"",
  });
});

//don't know how to do this
// test("parse querystring with multiple ==", () => {
//   expect(parseQueryString("equation==x=y+1&sound=none")).toEqual({
//     equation=: "x=y+1",
//     sound: "none",
//   });
// });

//don't know how to do this
// test("parses querystring values containing &", () => {
//   expect(parseQueryString("&equation=x=y+1&sound=none")).toEqual({
//     "&equation": "x=y+1",
//     sound: "none",
//   });
// });
