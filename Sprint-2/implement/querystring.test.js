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
//other edge cases to consider:
test("parses empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});

test("parses querystring with multiple key-value pairs", () => {
  expect(parseQueryString("name=John&age=30&city=NewYork")).toEqual({
    "name": "John",
    "age": "30",
    "city": "NewYork",
  });
});

test("parses querystring with missing value", () => {
  expect(parseQueryString("name=John&age=&city=NewYork")).toEqual({
    "name": "John",
    "age": "",
    "city": "NewYork",
  });
});

test("parses querystring with missing key", () => {
  expect(parseQueryString("=John&age=30&city=NewYork")).toEqual({
    "": "John",
    "age": "30",
    "city": "NewYork",
  });
});

test("parses querystring with no equals sign", () => {
  expect(parseQueryString("nameJohn&age30&cityNewYork")).toEqual({
    "nameJohn": undefined,
    "age30": undefined,
    "cityNewYork": undefined,
  });
});

test("parses querystring with encoded characters", () => {
  expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
    "name": "John Doe",
    "city": "New York",
  });
});

test("parses querystring with repeated keys", () => {
  expect(parseQueryString("name=John&name=Jane&age=30")).toEqual({
    "name": "Jane",
    "age": "30",
  });
});

test("parses querystring with special characters in keys and values", () => {
  expect(parseQueryString("na!me=Jo@hn&ag#e=3$0")).toEqual({
    "na!me": "Jo@hn",
    "ag#e": "3$0",
  });
});
test("parses querystring with leading and trailing ampersands", () => {
  expect(parseQueryString("&name=John&age=30&")).toEqual({
    "name": "John",
    "age": "30",
  });
});

test("parses querystring with multiple equals signs in value", () => {
  expect(parseQueryString("data=a=b=c=d")).toEqual({
    "data": "a=b=c=d",
  });
});