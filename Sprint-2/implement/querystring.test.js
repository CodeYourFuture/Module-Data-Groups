// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.
const parseQueryString = require("./querystring.js")

//test case 1:
//when the query string is empty, it should return an empty object
test("When the query string is empty, it should return an empty object", () => {
  expect(parseQueryString("")).toEqual({});
});


//test case 2:
//when the query string contains a single key-value pair, it should return an object with that key-value pair
test("When the query string contains a single key-value pair, it should return an object with that key-value pair", () => {
  expect(parseQueryString("color=red")).toEqual({
    "color": "red",
  });
});

//test case 3:
//when the query string contains multiple key-value pairs, it should return an object with all of them
test("when the query string contains multiple key-value pairs, it should return an object with all of them", () => {
  expect(parseQueryString("name=John&age=30")).toEqual({
    "name": "John",
    "age": "30",
  });
});

//test case 4:
//when the query string doesn't contain an equal sign it should return the value as a string
test("when the query string doesn't contain an equal sign it should return the value as a string", () => {
  expect(parseQueryString("name")).toEqual({
    "name":"",
  });
});


test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

test("it should return an object with key value pair when it contains &", ()=>{
  expect(parseQueryString("name=John&age=30&city=London")).toEqual({
    "name": "John",
    "age": "30",
    "city": "London",
  });
});


