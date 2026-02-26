// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge
// cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

// empty string
test("empty query string returns {}", () => {
  expect(parseQueryString("")).toEqual({});
});

// null or undefined
test("empty query string returns {}", () => {
  expect(parseQueryString(null)).toEqual({});
  expect(parseQueryString(undefined)).toEqual({});
  expect(parseQueryString()).toEqual({});
});

// happy path
// single valid kv pair
test("a single k, v with no special chars return object with matching k, v pair", () => {
  expect(parseQueryString("mykey=myvalue")).toEqual({ mykey: "myvalue" });
});
// mutiple valid kv pairs
test("multiple k, v pairs with no special chars return object with matching k, v pairs", () => {
  expect(parseQueryString("mykey=myvalue&otherkey=othervalue&third=3")).toEqual(
    {
      mykey: "myvalue",
      otherkey: "othervalue",
      third: "3",
    }
  );
});

// special characters in key, can't handle = in key, as that is fundamentally unparsable
test("special character in key without URL encoding", () => {
  expect(parseQueryString("my+key=myvalue")).toEqual({
    "my+key": "myvalue",
  });
});
// special characters in value
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

// missing values
test("key with no value return object with the key and value of empty string", () => {
  expect(parseQueryString("foo=")).toEqual({ foo: "" });
});

//valueless flags
test("when given valueless keys, keep the key with empty string as value", () => {
  expect(parseQueryString("debug&verbose")).toEqual({ debug: "", verbose: "" });
});

// ignore keyless values
test("ignores pairs with no key", () => {
  expect(parseQueryString("=value")).toEqual({});
});

// duplicate keys with different values (array)
test("collects duplicate keys into an array", () => {
  expect(parseQueryString("color=red&color=blue")).toEqual({
    color: ["red", "blue"],
  });
});

// duplicate k,v pair
test("if k,v already exists, or value array for a key already as value, ignore", () => {
  expect(parseQueryString("color=red&color=red")).toEqual({ color: "red" });
});

// white spaces
test("trims whitespace from keys and values", () => {
  expect(parseQueryString("name= Alice &age= 30 ")).toEqual({
    name: "Alice",
    age: "30",
  });
});
